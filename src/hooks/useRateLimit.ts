import { useState, useEffect } from "react";

interface RateLimitConfig {
  maxAttempts: number; // Máximo de tentativas
  windowMs: number; // Janela de tempo em milissegundos
  storageKey: string; // Chave do localStorage
}

interface RateLimitState {
  isLimited: boolean;
  remainingAttempts: number;
  resetTime: number | null;
  recordAttempt: () => boolean;
  reset: () => void;
}

export function useRateLimit({
  maxAttempts,
  windowMs,
  storageKey,
}: RateLimitConfig): RateLimitState {
  const [isLimited, setIsLimited] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(maxAttempts);
  const [resetTime, setResetTime] = useState<number | null>(null);

  // Verificar estado inicial
  useEffect(() => {
    checkRateLimit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkRateLimit = () => {
    const stored = localStorage.getItem(storageKey);
    if (!stored) {
      setRemainingAttempts(maxAttempts);
      setIsLimited(false);
      setResetTime(null);
      return;
    }

    try {
      const data = JSON.parse(stored);
      const now = Date.now();

      // Se a janela de tempo expirou, resetar
      if (now > data.resetTime) {
        reset();
        return;
      }

      // Calcular tentativas restantes
      const attempts = data.attempts || 0;
      const remaining = Math.max(0, maxAttempts - attempts);

      setRemainingAttempts(remaining);
      setIsLimited(remaining === 0);
      setResetTime(data.resetTime);
    } catch (error) {
      console.error("Erro ao verificar rate limit:", error);
      reset();
    }
  };

  const recordAttempt = (): boolean => {
    const stored = localStorage.getItem(storageKey);
    const now = Date.now();
    let data = { attempts: 0, resetTime: now + windowMs };

    if (stored) {
      try {
        data = JSON.parse(stored);

        // Se a janela expirou, resetar
        if (now > data.resetTime) {
          data = { attempts: 0, resetTime: now + windowMs };
        }
      } catch (error) {
        console.error("Erro ao ler rate limit:", error);
      }
    }

    // Incrementar tentativas
    data.attempts += 1;

    // Verificar se excedeu o limite
    if (data.attempts > maxAttempts) {
      setIsLimited(true);
      setRemainingAttempts(0);
      setResetTime(data.resetTime);
      localStorage.setItem(storageKey, JSON.stringify(data));
      return false;
    }

    // Salvar e atualizar estado
    localStorage.setItem(storageKey, JSON.stringify(data));
    setRemainingAttempts(maxAttempts - data.attempts);
    setResetTime(data.resetTime);
    setIsLimited(data.attempts >= maxAttempts);

    return true;
  };

  const reset = () => {
    localStorage.removeItem(storageKey);
    setIsLimited(false);
    setRemainingAttempts(maxAttempts);
    setResetTime(null);
  };

  return {
    isLimited,
    remainingAttempts,
    resetTime,
    recordAttempt,
    reset,
  };
}
