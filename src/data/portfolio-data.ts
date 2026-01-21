import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  about: {
    title: "Sobre Mim",
    description: "Desenvolvedor .NET com 4+ anos de experiência em desenvolvimento backend e full stack. Especializado em microsserviços com Clean Architecture, CQRS e Domain Events. Experiência sólida em AWS, Docker, Kubernetes e integração de sistemas financeiros. Apaixonado por criar soluções escaláveis e robustas seguindo as melhores práticas de desenvolvimento.",
    stats: [
      {
        label: "Anos de Experiência",
        value: "4+"
      },
      {
        label: "Microsserviços em Produção",
        value: "14+"
      },
      {
        label: "Certificações",
        value: "6+"
      }
    ]
  },

  skills: [
    // Backend
    { name: ".NET 8", category: "backend", level: 5 },
    { name: "C#", category: "backend", level: 5 },
    { name: "ASP.NET Core", category: "backend", level: 5 },
    { name: "Entity Framework", category: "backend", level: 5 },
    { name: "Dapper", category: "backend", level: 5 },
    { name: "MediatR", category: "backend", level: 5 },
    { name: "Clean Architecture", category: "backend", level: 5 },
    { name: "CQRS", category: "backend", level: 5 },
    { name: "Domain Events", category: "backend", level: 5 },
    { name: "Microsserviços", category: "backend", level: 5 },
    { name: "RabbitMQ", category: "backend", level: 5 },
    { name: "MassTransit", category: "backend", level: 5 },

    // Frontend
    { name: "Angular", category: "frontend", level: 4 },
    { name: "React", category: "frontend", level: 4 },
    { name: "TypeScript", category: "frontend", level: 4 },
    { name: "Redux", category: "frontend", level: 3 },

    // Database
    { name: "PostgreSQL", category: "database", level: 5 },
    { name: "SQL Server", category: "database", level: 5 },
    { name: "Redis", category: "database", level: 4 },
    { name: "MongoDB", category: "database", level: 4 },

    // DevOps
    { name: "Docker", category: "devops", level: 5 },
    { name: "Kubernetes", category: "devops", level: 5 },
    { name: "AWS EC2", category: "devops", level: 5 },
    { name: "AWS S3", category: "devops", level: 5 },
    { name: "AWS Cognito", category: "devops", level: 5 },
    { name: "Azure DevOps", category: "devops", level: 5 },
    { name: "Jenkins", category: "devops", level: 4 },
    { name: "New Relic", category: "devops", level: 4 },
    { name: "SonarQube", category: "devops", level: 4 },
    { name: "Prometheus", category: "devops", level: 4 },
    { name: "Grafana", category: "devops", level: 4 },
  ],

  experiences: [
    {
      company: "Flow Solutions",
      role: "Desenvolvedor Backend .NET",
      startDate: "Ago 2024",
      endDate: "Atual",
      description: "Desenvolvimento de microsserviços com .NET 8, aplicando Clean Architecture, CQRS e Domain Events. Integração com AWS e sistemas de reconciliação financeira.",
      achievements: [
        "Desenvolvimento de microsserviços com .NET 8",
        "Integração com AWS: S3, EC2, ECR, SFTP, Cognito e IAM",
        "Sistemas de reconciliação financeira com integração CERC",
        "Mensageria assíncrona com RabbitMQ e MassTransit",
        "Testes unitários (xUnit/Moq) e BDD com SpecFlow",
        "Modelagem PostgreSQL com EF Core e Dapper",
        "Monitoramento de 14+ serviços com Grafana"
      ]
    },
    {
      company: "Sicoob Cocred",
      role: "Desenvolvedor Full Stack & DevOps",
      startDate: "Abr 2024",
      endDate: "Jul 2025",
      description: "Desenvolvimento full stack com .NET, Angular e SQL Server. Pipelines CI/CD, containerização com Docker e orquestração com Kubernetes.",
      achievements: [
        "Desenvolvimento com .NET (C#), ASP.NET Core e SQL Server",
        "Aplicações web e desktop seguindo SOLID e Clean Architecture",
        "Pipelines CI/CD com Azure DevOps e Jenkins",
        "Containerização com Docker e orquestração com Kubernetes",
        "Administração de SQL Server e PostgreSQL",
        "Análise de código com SonarQube"
      ]
    },
    {
      company: "Sicoob Cocred",
      role: "Analista de Sistemas e Infraestrutura",
      startDate: "Mar 2022",
      endDate: "Abr 2024",
      description: "Automações com PowerShell e Python, administração de infraestrutura Microsoft e suporte avançado para sistemas corporativos.",
      achievements: [
        "Automações com PowerShell e Python para provisionamento",
        "Administração Office 365, Active Directory, GPO, Exchange",
        "Análise e manutenção em sistemas TOTVS RM e Fluig",
        "Suporte avançado para Linux, redes TCP/IP e firewall Fortinet"
      ]
    }
  ],

  projects: [
    {
      id: "1",
      title: "Migração para Kubernetes",
      description: "Liderança na migração de sistemas legados para .NET 8 + Angular containerizado. Clusters KubeSphere com Ingress, Load Balancer e observabilidade com Prometheus e Grafana. Redução de 30% nos custos com dimensionamento eficiente.",
      technologies: [".NET 8", "Angular", "Kubernetes", "KubeSphere", "Prometheus", "Grafana", "Harbor"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      stars: 1
    },
    {
      id: "2",
      title: "Sistema de Reconciliação Financeira",
      description: "Microsserviços para reconciliação financeira com integração CERC e processamento de recebíveis. Arquitetura escalável com RabbitMQ, PostgreSQL e monitoramento New Relic.",
      technologies: [".NET 8", "RabbitMQ", "PostgreSQL", "AWS", "Clean Architecture", "CQRS"],
      github: "https://github.com/claytonoliver/ExpenseControl",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      stars: 1
    },
    {
      id: "3",
      title: "Gerenciador de Gastos",
      description: "Aplicação para controle de finanças pessoais desenvolvida em um monorepositório .NET 8, utilizando CQRS e MediatR para separação de responsabilidades. Backend estruturado com Entity Framework Core e frontend em React, responsivo e focado na experiência do usuário.",
      technologies: [
        ".NET 8",
        "CQRS",
        "MediatR",
        "Entity Framework Core",
        "Domain Events",
        "React"
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      id: "4",
      title: "Infraestrutura AWS com Terraform",
      description: "Infraestrutura como código com Terraform para provisionamento de recursos AWS: EC2, S3, RDS, Cognito. Pipeline CI/CD com AWS CodePipeline.",
      technologies: ["AWS", "Terraform", "EC2", "S3", "Cognito", "IAM", "CloudWatch"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      id: "5",
      title: "Pipeline CI/CD Enterprise",
      description: "Implementação de pipelines CI/CD com Azure DevOps e Jenkins para múltiplos ambientes. Integração com SonarQube para análise de código e Docker para containerização.",
      technologies: ["Azure DevOps", "Jenkins", "Docker", "SonarQube", "Git"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80"
    },
    {
      id: "6",
      title: "Criptografia de Arquivos",
      description: "Sistema de criptografia de arquivos desenvolvido em Python, focado em segurança e proteção de dados sensíveis com algoritmos modernos.",
      technologies: ["Python", "Cryptography", "Security"],
      github: "https://github.com/claytonoliver/criptografia-de-arquivos-com-python",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
    }
  ],

  social: [
    {
      platform: "github",
      url: "https://github.com/claytonoliver",
      icon: Github,
      label: "GitHub"
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/claytonf-oliveira/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      platform: "email",
      url: "mailto:claytonoliveira.dev@gmail.com",
      icon: Mail,
      label: "Email"
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/5516997834055",
      icon: Phone,
      label: "WhatsApp"
    }
  ]
};
