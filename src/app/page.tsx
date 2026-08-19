'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ExternalLink,
  Send,
  Sparkles,
  Zap,
  Smartphone,
  Gauge,
  Layers,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
  Calculator,
  Copy,
  Check,
  ChevronUp,
  Cookie,
  Palette,
  Clock,
  Coins,
  MessageSquare,
  ShieldCheck,
  Code2,
  Workflow,
  HelpCircle,
  ChevronDown,
  Server,
  Bot,
  Globe,
  Cpu,
  ArrowRight,
  Database,
  Terminal as TerminalIcon,
  Laptop,
  Radio,
  Activity,
  HardDrive,
  User,
  Share2,
  Menu,
  X,
} from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2L2 9.5l7 3.5 3.5 7 2-5.5 7-12.5z" />
    <path d="M9 13l5.5-5.5" />
  </svg>
);

// Theme Accent Palettes
const THEMES = [
  { id: 'blue', name: 'Electric Blue', color: '#3B82F6' },
  { id: 'emerald', name: 'Emerald Matrix', color: '#10B981' },
  { id: 'violet', name: 'Neon Violet', color: '#8B5CF6' },
  { id: 'amber', name: 'Cyber Amber', color: '#F59E0B' },
];

// Interactive Hero Living Infrastructure Graph Background
function HeroInteractiveCanvas({ themeColor }: { themeColor: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 140,
      isHovering: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const particleCount = Math.min(Math.floor((width * height) / 16000), 45);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      pulseSpeed: number;
      pulseOffset: number;
      alphaFactor: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isLeftSide = i % 2 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        baseRadius: Math.random() * 1.5 + 1.2,
        pulseSpeed: 0.0015 + Math.random() * 0.002,
        pulseOffset: Math.random() * Math.PI * 2,
        alphaFactor: isLeftSide ? 0.6 : 1.0,
      });
    }

    const dataPackets: {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }[] = [];

    let time = 0;

    const render = () => {
      time++;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const rightGlow = ctx.createRadialGradient(width * 0.75, height * 0.5, 50, width * 0.75, height * 0.5, width * 0.45);
      rightGlow.addColorStop(0, `${themeColor}12`);
      rightGlow.addColorStop(0.6, `${themeColor}04`);
      rightGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = rightGlow;
      ctx.fillRect(0, 0, width, height);

      if (mouse.isHovering) {
        const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.3);
        mouseGradient.addColorStop(0, `${themeColor}1a`);
        mouseGradient.addColorStop(0.6, `${themeColor}05`);
        mouseGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, width, height);
      }

      const connections: { i: number; j: number; dist: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mouse.isHovering && dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        const breathing = Math.sin(time * p.pulseSpeed + p.pulseOffset);
        const currentRadius = p.baseRadius + breathing * 0.6;
        const baseAlpha = (0.2 + (breathing + 1) * 0.15) * p.alphaFactor;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.globalAlpha = baseAlpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = themeColor;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const pjdx = p.x - p2.x;
          const pjdy = p.y - p2.y;
          const pjdist = Math.sqrt(pjdx * pjdx + pjdy * pjdy);

          if (pjdist < 130) {
            connections.push({ i, j, dist: pjdist });
            const lineAlpha = (1 - pjdist / 130) * 0.18 * ((p.alphaFactor + p2.alphaFactor) / 2);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${themeColor}${Math.floor(lineAlpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      if (connections.length > 0 && Math.random() < 0.018 && dataPackets.length < 5) {
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        dataPackets.push({
          fromIdx: randomConn.i,
          toIdx: randomConn.j,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
        });
      }

      for (let k = dataPackets.length - 1; k >= 0; k--) {
        const packet = dataPackets[k];
        packet.progress += packet.speed;

        const from = nodes[packet.fromIdx];
        const to = nodes[packet.toIdx];

        if (!from || !to || packet.progress >= 1) {
          dataPackets.splice(k, 1);
          continue;
        }

        const packetX = from.x + (to.x - from.x) * packet.progress;
        const packetY = from.y + (to.y - from.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = themeColor;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [themeColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

// 15 Tech Brand SVGs
const TECH_ICONS: Record<string, React.ReactNode> = {
  'Python': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.79 6.84H12V7.61H3.69S2 7.42 2 12.87c0 5.46 1.48 5.25 1.48 5.25h2.21v-3.11s-.12-3.69 3.65-3.69h5.18s3.53.06 3.53-3.44V4.44S18.57 2 11.91 2zM9.4 3.73a.87.87 0 110 1.74.87.87 0 010-1.74z" fill="#38BDF8"/>
      <path d="M12.09 22c5.47 0 5.13-2.38 5.13-2.38l-.01-2.46H12v-.77h8.31s1.69.19 1.69-5.26c0-5.46-1.48-5.25-1.48-5.25h-2.21v3.11s.12 3.69-3.65 3.69H9.48s-3.53-.06-3.53 3.44v3.44S5.43 22 12.09 22zm2.51-1.73a.87.87 0 110-1.74.87.87 0 010 1.74z" fill="#FBBF24"/>
    </svg>
  ),
  'Java': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8.8 17.5c-2.3.2-3.8.7-3.8 1.3 0 .9 3.1 1.7 7 1.7s7-.8 7-1.7c0-.6-1.5-1.1-3.8-1.3" stroke="#F87171" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M9 13.5c-1.8.3-2.8.7-2.8 1.2 0 .8 2.6 1.5 5.8 1.5 3.2 0 5.8-.7 5.8-1.5 0-.5-1-1-2.8-1.2" stroke="#F87171" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M12 2c1 2-2 3.5-2 5.5s3 3.5 1 5.5" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M15 4c1 1.5-1.5 2.5-1.5 4s2 2.5.5 4" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'Node.js': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#34D399" strokeWidth="1.6"/>
      <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#34D399"/>
    </svg>
  ),
  'Next.js 15': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" stroke="#FFF" strokeWidth="1.6"/>
      <path d="M15 8v8M9 8v8l7.5-9" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'React 19': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#60A5FA" strokeWidth="1.5" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#60A5FA" strokeWidth="1.5" transform="rotate(90 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#60A5FA" strokeWidth="1.5" transform="rotate(150 12 12)"/>
      <circle cx="12" cy="12" r="1.8" fill="#60A5FA"/>
    </svg>
  ),
  'TypeScript': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M11.5 9H6.5V11H8V18H10V11H11.5V9Z" fill="#FFF"/>
      <path d="M17.8 11.2C17.4 10.4 16.5 10 15.3 10C13.8 10 12.8 10.8 12.8 12.1C12.8 14.5 16 13.7 16 15.4C16 16.2 15.3 16.6 14.2 16.6C13.1 16.6 12.2 16 11.8 15.2L10.3 16.1C11 17.5 12.4 18.2 14.2 18.2C16.4 18.2 17.8 17.1 17.8 15.4C17.8 13 14.6 13.8 14.6 12.2C14.6 11.6 15.1 11.3 15.9 11.3C16.7 11.3 17.3 11.7 17.6 12.3L17.8 11.2Z" fill="#FFF"/>
    </svg>
  ),
  'Telegram Bot API': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#229ED9"/>
      <path d="M17.5 7.5L5.5 12.2l4.3 2.1 2.2 4.3 1.2-3.4 4.3-7.7z" fill="#FFF"/>
      <path d="M9.8 14.3l3.4-3.4" stroke="#229ED9" strokeWidth="1.2"/>
    </svg>
  ),
  'Docker': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M22 12.5c-.5-.4-1.5-.4-2.1 0-.3-1.6-1.5-2.7-3-2.7h-.5c-.3-1.4-1.5-2.3-2.9-2.3-1.6 0-3 1.2-3 2.8H4c-1.1 0-2 .9-2 2 0 4.4 3.6 8 8 8 5.3 0 9.8-3.8 10-9.1.7.3 1.5.1 2-.7z" stroke="#38BDF8" strokeWidth="1.5"/>
      <rect x="5" y="9.5" width="2" height="2" fill="#38BDF8"/>
      <rect x="8" y="9.5" width="2" height="2" fill="#38BDF8"/>
      <rect x="8" y="7" width="2" height="2" fill="#38BDF8"/>
    </svg>
  ),
  'Kubernetes': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#326CE5" strokeWidth="1.5"/>
      <polygon points="12,4 19,8 19,16 12,20 5,16 5,8" stroke="#326CE5" strokeWidth="1.4" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="#326CE5"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#818CF8" strokeWidth="1.6"/>
      <path d="M4 7v10c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V7" stroke="#818CF8" strokeWidth="1.6"/>
      <path d="M4 12c0 1.9 3.6 3.5 8 3.5" stroke="#818CF8" strokeWidth="1.6"/>
    </svg>
  ),
  'RabbitMQ': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="4" fill="#FF6600" opacity="0.15"/>
      <path d="M12 7c-2.5 0-4 1.5-4 4 0 1.5.5 3 2 3.8v2.2h4v-2.2c1.5-.8 2-2.3 2-3.8 0-2.5-1.5-4-4-4z" fill="#FB923C"/>
      <circle cx="10.5" cy="10.5" r="1" fill="#FFF"/>
      <circle cx="13.5" cy="10.5" r="1" fill="#FFF"/>
    </svg>
  ),
  'Nginx': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 21.5,7.5 21.5,18.5 12,24 2.5,18.5 2.5,7.5" stroke="#34D399" strokeWidth="1.6"/>
      <path d="M8 8v8l8-8v8" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Linux': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3c-2.8 0-4 2.5-4 5.5 0 1.5.5 3 1 4.5-.8.5-2 1.5-2 3.5 0 2.5 2.5 4.5 7 4.5s7-2 7-4.5c0-2-1.2-3-2-3.5.5-1.5 1-3 1-4.5 0-3-1.2-5.5-4-5.5z" stroke="#FBBF24" strokeWidth="1.6" fill="#FBBF24" fillOpacity="0.2"/>
      <circle cx="10" cy="7.5" r="1" fill="#FFF"/>
      <circle cx="14" cy="7.5" r="1" fill="#FFF"/>
      <ellipse cx="12" cy="10" rx="1.5" ry="1" fill="#F59E0B"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  ),
  'Git & CI/CD': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect width="18" height="18" rx="3" transform="rotate(45 12 12)" stroke="#F43F5E" strokeWidth="1.6" fill="#F43F5E" fillOpacity="0.15"/>
      <circle cx="12" cy="8" r="1.5" fill="#FFF"/>
      <circle cx="12" cy="16" r="1.5" fill="#FFF"/>
      <circle cx="16" cy="12" r="1.5" fill="#FFF"/>
      <path d="M12 9.5v5M12 12h2.5" stroke="#FFF" strokeWidth="1.5"/>
    </svg>
  ),
};

// Architecture Node Inspection Details
const ARCH_DETAILS: Record<string, { title: string; subtitle: string; desc: string; metrics: string; tech: string; layerBadge: string; color: string }> = {
  user: {
    title: 'USER LAYER',
    subtitle: 'Пользователи и клиенты',
    desc: 'Клиент заходит на сайт со смартфона или ПК, заполняет интерактивный квиз, рассчитывает смету или нажимает «Оставить заявку».',
    metrics: 'Mobile 82% • First Input Delay < 15ms',
    tech: 'Mobile Browsers, Desktop Web, Telegram Webview',
    layerBadge: 'Entry Point',
    color: '#F43F5E',
  },
  web: {
    title: 'NEXT.JS APP',
    subtitle: 'Frontend & Client State',
    desc: 'Построен на Next.js 15 и React 19. Мгновенная генерация страниц (SSR), квиз-калькуляторы сметы, валидация полей и плавная анимация.',
    metrics: 'PageSpeed 98/100 • Core Web Vitals OK',
    tech: 'Next.js 15, React 19, TypeScript, Tailwind CSS',
    layerBadge: 'Frontend Layer',
    color: '#38BDF8',
  },
  api: {
    title: 'FASTAPI / SPRING BOOT',
    subtitle: 'Backend & Business Logic',
    desc: 'Серверная логика на Python и Java. Обрабатывает входящие заявки, рассчитывает скидки, проверяет авторизацию и формирует транзакции.',
    metrics: 'Throughput > 5k req/sec • Response < 12ms',
    tech: 'Python FastAPI, Java Spring Boot 3, REST / Webhooks',
    layerBadge: 'Core API Layer',
    color: '#818CF8',
  },
  db_postgres: {
    title: 'POSTGRESQL',
    subtitle: 'Relational Database',
    desc: 'Надежное ACID-хранилище заявок, пользователей, каталога товаров и истории заказов. Защищено резервным копированием.',
    metrics: 'ACID Compliant • Partitioned Storage',
    tech: 'PostgreSQL 16, pg_stat_statements, Indexes',
    layerBadge: 'Persistence Layer',
    color: '#FBBF24',
  },
  db_redis: {
    title: 'REDIS',
    subtitle: 'In-Memory Cache & Sessions',
    desc: 'Сверхбыстрое кэширование цен, ограничение частоты запросов (Rate Limiting) и мгновенный доступ к временным сессиям клиентов.',
    metrics: 'Latency < 1ms • In-Memory Key-Value',
    tech: 'Redis 7, Pub/Sub, TTL Caching',
    layerBadge: 'Cache Layer',
    color: '#FB923C',
  },
  tg: {
    title: 'TELEGRAM NOTIFICATIONS & BOT',
    subtitle: 'Instant Delivery & CRM Integration',
    desc: 'Мгновенная доставка заявки со сметой и контактом в Telegram владельцу за 2 секунды. Уведомление менеджеров и интеграция с CRM.',
    metrics: 'Delivery Time ~1.8s • 24/7 SLA 99.9%',
    tech: 'Telegram Bot API, aiogram, Webhooks, CRM Sync',
    layerBadge: 'Integration Layer',
    color: '#229ED9',
  },
};

// Layered Architecture Tech Stack
const STACK_PIPELINES = [
  {
    layer: '01. Frontend & Client',
    tag: 'UI & Interactivity',
    color: '#38BDF8',
    items: [
      { name: 'Next.js 15', role: 'Full-Stack SSR / Turbopack' },
      { name: 'React 19', role: 'Component Architecture' },
      { name: 'TypeScript', role: 'Strict Type Safety' },
      { name: 'Tailwind CSS', role: 'Pixel-perfect Styling' },
    ],
  },
  {
    layer: '02. Backend & Core APIs',
    tag: 'Logic & Throughput',
    color: '#818CF8',
    items: [
      { name: 'Python', role: 'FastAPI / aiogram' },
      { name: 'Java', role: 'Spring Boot 3 / JVM' },
      { name: 'Node.js', role: 'Event-driven Services' },
      { name: 'Telegram Bot API', role: 'Bots & Webhook Handlers' },
    ],
  },
  {
    layer: '03. Data & Queues',
    tag: 'ACID & Caching',
    color: '#FBBF24',
    items: [
      { name: 'PostgreSQL', role: 'Relational DB / Indexes' },
      { name: 'RabbitMQ', role: 'Message Broker' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'Kubernetes', role: 'Orchestration' },
    ],
  },
  {
    layer: '04. DevOps & Systems',
    tag: 'Reliability & CI/CD',
    color: '#34D399',
    items: [
      { name: 'Nginx', role: 'Reverse Proxy / SSL' },
      { name: 'Linux', role: 'OS & Security' },
      { name: 'Git & CI/CD', role: 'Automated Pipelines' },
    ],
  },
];

// 3 Core Services
const SERVICES = [
  {
    id: 'sites',
    icon: <Globe size={28} color="#38BDF8" />,
    title: 'Сайты для бизнеса',
    desc: 'Продающие лендинги, каталоги услуг и интерактивные квиз-калькуляторы с конверсией x2–x3 и моментальной передачей заявок.',
    features: ['Next.js 15 & React 19', 'Квиз-калькуляторы сметы', 'PageSpeed 95–98/100', 'Mobile First верстка'],
  },
  {
    id: 'bots',
    icon: <Bot size={28} color="#34D399" />,
    title: 'Telegram-боты & TMA',
    desc: 'Чат-боты для автоматизации приема заявок, квалификации лидов, сбора клиентских брифов и интеграции с CRM.',
    features: ['Автоматический сбор брифов', 'Интеграция с базой данных', 'Уведомления менеджерам', 'Telegram Mini Apps (TMA)'],
  },
  {
    id: 'backend',
    icon: <Server size={28} color="#818CF8" />,
    title: 'Автоматизация и Backend',
    desc: 'Отказоустойчивые серверные микросервисы, REST API, парсинг данных, внутренние базы данных и сложная логика.',
    features: ['Java / Python / Node.js', 'PostgreSQL & Docker', 'Apache Kafka очереди', 'Высокая надежность (ACID)'],
  },
];

// Why Work With Me
const WHY_WORK_WITH_ME = [
  {
    title: 'От идеи до запуска',
    desc: 'Помогаю определить оптимальное решение, проектирую логику, разрабатываю и публикую проект в прод под ключ.',
    badge: 'Полный цикл',
  },
  {
    title: 'Без посредников',
    desc: 'Вы напрямую общаетесь с разработчиком. Никаких испорченных телефонов, затянутых правок и наценок веб-студий.',
    badge: 'Прямая связь',
  },
  {
    title: 'Full-stack подход',
    desc: 'Frontend с плавной анимацией, надежный Backend, базы данных, серверный деплой и Telegram-интеграции из одних рук.',
    badge: 'Комплексно',
  },
  {
    title: 'Исходный код ваш',
    desc: 'После завершения проекта вы получаете готовый результат и чистый исходный код в вашем GitHub-репозитории без привязки к конструкторам.',
    badge: '100% владение',
  },
];

// 4 Steps Workflow
const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Обсуждаем задачу',
    desc: 'Вы описываете идею, задачу или проблему бизнеса. Созваниваемся или разбираем проект в Telegram.',
  },
  {
    step: '02',
    title: 'Формируем решение',
    desc: 'Определяем функциональность, стек, точные сроки и прозрачную фиксированную стоимость без скрытых доплат.',
  },
  {
    step: '03',
    title: 'Разрабатываю проект',
    desc: 'Пишу чистый код и регулярно показываю промежуточные результаты на живом тестовом домене.',
  },
  {
    step: '04',
    title: 'Запускаем в прод',
    desc: 'Публикую проект в продакшн, подключаю домен, передаю исходный код и настраиваю уведомления.',
  },
];

interface CaseProject {
  id: string;
  title: string;
  category: 'web' | 'bots' | 'backend';
  categoryLabel: string;
  problem: string;
  solution: string;
  businessResult: string;
  stack: string[];
  demoUrl?: string;
  githubUrl: string;
  image: string;
  accentColor: string;
}

const CASES: CaseProject[] = [
  {
    id: 'nordic',
    title: 'Nordic Craft — Строительная компания',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Клиенты уходили с сайта без заявки из-за отсутствия понятного расчета стоимости дома и условий ипотеки.',
    solution: 'Разработан 5-шаговый интерактивный квиз-калькулятор с мгновенным подбором комплектации и связкой с Telegram.',
    businessResult: 'Заявки поступают сразу с выбранной сметой и контактом, повышая конверсию первого касания.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Telegram Bot API', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/nordic-craft-construction/',
    githubUrl: 'https://github.com/garipov-ar/nordic-craft-construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#10B981',
  },
  {
    id: 'echo',
    title: 'Гостевой комплекс «ЭХО»',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Требовалось автоматизировать расчет бронирования в зависимости от дней недели (будни/выходные) и спа-услуг.',
    solution: 'Создан атмосферный лендинг с переключателем домов (Шалаш/Большой дом), динамическим прайсингом и скидкой от 2 суток.',
    businessResult: 'Гости самостоятельно конфигурируют отдых с доп. услугами (чан/баня), снижая нагрузку на администратора.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Booking Engine', 'Yandex Maps'],
    demoUrl: 'https://garipov-ar.github.io/echo-houses-rental/',
    githubUrl: 'https://github.com/garipov-ar/echo-houses-rental',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#D97706',
  },
  {
    id: 'briefy-bot',
    title: 'Briefy Bot — Умный Telegram-бот сбора брифов',
    category: 'bots',
    categoryLabel: 'Telegram-боты & CRM',
    problem: 'Менеджеры тратили до 40 минут на первичный опрос каждого лида для выяснения требований к проекту.',
    solution: 'Интерактивный Telegram-бот проводит пошаговый опрос клиента, валидирует данные и формирует готовое ТЗ.',
    businessResult: 'Экономия до 80% времени менеджеров, мгновенная отправка заполненного брифа в рабочий чат.',
    stack: ['Python', 'aiogram', 'Telegram Bot API', 'SQLite/PostgreSQL'],
    githubUrl: 'https://github.com/garipov-ar/briefy-bot',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#F43F5E',
  },
  {
    id: 'field-support',
    title: 'Field Support System — Telecom Bot + CMS',
    category: 'bots',
    categoryLabel: 'Telegram-боты & CMS',
    problem: 'Выездные инженеры тратили время на поиск актуальных схем оборудования и регламентов на удаленных объектах.',
    solution: 'Telegram-бот для мгновенного поиска документации по коду ошибки + Web-панель управления базой знаний.',
    businessResult: 'Сокращение времени простоя оборудования и оперативный доступ к регламентам прямо со смартфона.',
    stack: ['Java', 'Spring Boot', 'Telegram Bot API', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/garipov-ar/field-support-system',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#818CF8',
  },
  {
    id: 'transaction-engine',
    title: 'Transaction Processing Engine — Highload',
    category: 'backend',
    categoryLabel: 'Backend & Автоматизация',
    problem: 'Необходимость надежной распределенной обработки финансового потока без потерь и дублирования транзакций.',
    solution: 'Построена асинхронная архитектура на базе Apache Kafka и Spring Boot 3 с гарантией идемпотентности (ACID).',
    businessResult: 'Стабильная работа под высокой нагрузкой с защитой от сбоев и полным мониторингом состояний.',
    stack: ['Java 21', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'Docker', 'JVM Tuning'],
    githubUrl: 'https://github.com/garipov-ar/transaction-engine',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#38BDF8',
  },
  {
    id: 'door',
    title: 'Дверь-Мастер — Установка дверей',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Сложность дистанционного расчета монтажа полотен, доборов и врезки магнитных замков отпугивала заказчиков.',
    solution: 'Создан наглядный калькулятор комплектации со скидкой 10% от 3-х полотен и презентацией чистого монтажа.',
    businessResult: 'Заказчик сразу видит точную прозрачную вилку цен, что увеличивает доверие и звонки мастеру.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/door-install/',
    githubUrl: 'https://github.com/garipov-ar/door-install',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#C08244',
  },
  {
    id: 'audit-log',
    title: 'Immutable Financial Audit Log Service',
    category: 'backend',
    categoryLabel: 'Backend & Автоматизация',
    problem: 'Требование регуляторов к неизменяемому хранению финансовых логов и аудиту действий операторов.',
    solution: 'Разработан сервис на базе PostgreSQL и WORM-паттерна (Write Once, Read Many) с защитой от модификации.',
    businessResult: '100% юридическая чистота логов и моментальный поиск по миллионам архивных записей.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Docker'],
    githubUrl: 'https://github.com/garipov-ar/audit-log-service',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#A78BFA',
  },
  {
    id: 'demolition',
    title: 'Демонтаж-Про — Демонтажные работы',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Заказчикам сложно оценить объемы сноса стен и количество контейнеров для строительного мусора.',
    solution: 'Внедрен экспресс-калькулятор расчета площади пола, типа стен и объема контейнеров (8–27 м³).',
    businessResult: 'Клиент за 15 секунд получает смету, а компания — подготовленный лид с параметрами объекта.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/demolition-service/',
    githubUrl: 'https://github.com/garipov-ar/demolition-service',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#E57A22',
  },
  {
    id: 'handyman',
    title: 'Муж на час 24/7 — Срочный ремонт',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Высокая конкуренция в нише мелкого бытового ремонта и недоверие к скрытым накруткам цен на месте.',
    solution: 'Интерактивный чек-лист услуг с фиксированным прайсом и таймером срочного выезда за 45 минут.',
    businessResult: 'Прозрачная смета до приезда мастера повышает конверсию в вызов на 40%.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/handyman-service/',
    githubUrl: 'https://github.com/garipov-ar/handyman-service',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#3B82F6',
  },
  {
    id: 'electrical',
    title: 'Электро-Монтаж — Работы по ГОСТ',
    category: 'web',
    categoryLabel: 'Сайты для бизнеса',
    problem: 'Потребители опасаются некачественной проводки и хотят понимать схему работы по официальному договору.',
    solution: 'Сайт с онлайн-расчетом точек розеток, сборки щита ABB и демонстрацией лазерной прокладки трасс.',
    businessResult: 'Фокус на ГОСТ, ПУЭ и 5 лет гарантии привлекает заказчиков с премиальными чеками.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/electrical-service/',
    githubUrl: 'https://github.com/garipov-ar/electrical-service',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#F59E0B',
  },
];

// Project Calculator Types & Dynamic Modules per Type
const PROJECT_TYPES = [
  {
    id: 'landing',
    title: 'Продающий Landing Page',
    desc: 'Высококонверсионный сайт на Next.js 15 с квизом и адаптивностью',
    basePrice: 35000,
    baseDays: 5,
  },
  {
    id: 'service',
    title: 'Веб-сервис / Платформа',
    desc: 'Индивидуальное full-stack приложение с личным кабинетом или букингом',
    basePrice: 65000,
    baseDays: 12,
  },
  {
    id: 'bot',
    title: 'Telegram-бот / TMA',
    desc: 'Чат-бот с логикой, базой данных или Telegram Mini App',
    basePrice: 28000,
    baseDays: 4,
  },
  {
    id: 'backend',
    title: 'Backend API & Автоматизация',
    desc: 'Масштабируемый серверный сервис на Java/Python/PostgreSQL',
    basePrice: 50000,
    baseDays: 10,
  },
];

interface ModuleOption {
  id: string;
  label: string;
  price: number;
  days: number;
}

const DYNAMIC_MODULES_BY_TYPE: Record<string, ModuleOption[]> = {
  landing: [
    { id: 'quiz', label: 'Интерактивный квиз-калькулятор сметы', price: 10000, days: 2 },
    { id: 'tg_leads', label: 'Мгновенные уведомления о заявках в Telegram', price: 8000, days: 1 },
    { id: 'payment', label: 'Модуль онлайн-оплаты / предоплаты (ЮKassa)', price: 12000, days: 2 },
    { id: 'seo_speed', label: 'PageSpeed 95+ и расширенная SEO-разметка', price: 8000, days: 1 },
    { id: 'ab_test', label: 'Настройка A/B тестирования офферов', price: 7000, days: 1 },
  ],
  service: [
    { id: 'auth_cabinet', label: 'Личный кабинет пользователя и система прав', price: 18000, days: 3 },
    { id: 'admin_cms', label: 'Админ-панель управления контентом и заказами', price: 22000, days: 4 },
    { id: 'pay_gateway', label: 'Платежный шлюз (рекуррентные платежи/счета)', price: 15000, days: 2 },
    { id: 'rest_integration', label: 'Интеграция со сторонними REST API / 1C', price: 16000, days: 3 },
    { id: 'notifications', label: 'Email & Telegram система транзакционных рассылок', price: 10000, days: 2 },
  ],
  bot: [
    { id: 'tma_app', label: 'Telegram Mini App (TMA веб-интерфейс в окне Telegram)', price: 22000, days: 4 },
    { id: 'brief_collector', label: 'Модуль пошагового сбора и валидации брифов', price: 8000, days: 1 },
    { id: 'bot_admin', label: 'Админ-панель управления ботом и рассылками', price: 12000, days: 2 },
    { id: 'crm_sync', label: 'Двусторонняя интеграция с CRM (Bitrix24 / AmoCRM)', price: 14000, days: 2 },
    { id: 'tg_payments', label: 'Прием платежей в боте (Telegram Stars / ЮKassa)', price: 10000, days: 2 },
  ],
  backend: [
    { id: 'queues', label: 'Очереди сообщений (RabbitMQ / Apache Kafka)', price: 20000, days: 3 },
    { id: 'redis_cache', label: 'Кэширование Redis и оптимизация SQL-индексов', price: 12000, days: 2 },
    { id: 'docker_cicd', label: 'Контейнеризация Docker и автодеплой CI/CD', price: 15000, days: 2 },
    { id: 'audit_worm', label: 'Неизменяемый WORM-аудит финансовых логов', price: 18000, days: 3 },
    { id: 'data_parser', label: 'Фоновый парсер данных и агрегатор внешних API', price: 14000, days: 2 },
  ],
};

// FAQ Items
const FAQ_ITEMS = [
  {
    q: 'Сколько времени занимает разработка проекта?',
    a: 'Лендинг с интерактивным квиз-калькулятором создается в среднем за 5–7 рабочих дней. Telegram-боты запускаются за 3–5 дней. Сложные веб-сервисы и Backend-системы — от 10 до 20 рабочих дней. Возможен срочный экспресс-запуск.',
  },
  {
    q: 'Как строится процесс оплаты?',
    a: 'Обычно мы делим оплату на 2 этапа: 50% предоплата перед стартом проектирования и 50% после полной демонстрации готового продукта на тестовом стенде перед передачей исходников и публикацией.',
  },
  {
    q: 'Что требуется от меня для старта?',
    a: 'Достаточно описать задачу своими словами в Telegram: чем занимается ваш бизнес, какие есть пожелания по функционалу или референсы. Я помогу структурировать ТЗ и предложу оптимальный план реализации.',
  },
  {
    q: 'Будет ли сайт быстро работать на смартфонах?',
    a: 'Да, все проекты разрабатываются по методологии Mobile First на Next.js 15. Показатели в Google PageSpeed составляют 95–98 баллов из 100, что обеспечивает мгновенную загрузку даже на мобильном 4G.',
  },
];

// Animated Count-Up Hook for Smooth Metric & Price Transitions
function useAnimatedNumber(target: number, duration: number = 380): number {
  const [current, setCurrent] = useState(target);
  const startRef = useRef(target);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = current;
    startTimeRef.current = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(startRef.current + (target - startRef.current) * ease);
      setCurrent(val);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration]);

  return current;
}

export default function PortfolioHub() {
  const [filter, setFilter] = useState<'all' | 'web' | 'bots' | 'backend'>('all');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentTheme, setCurrentTheme] = useState<string>('blue');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Architecture Hover Node
  const [activeArchNode, setActiveArchNode] = useState<string>('web');

  // Calculator State
  const [calcType, setCalcType] = useState<string>('landing');
  const [selectedModules, setSelectedModules] = useState<string[]>(['quiz', 'tg_leads']);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const filteredCases = filter === 'all' ? CASES : CASES.filter((c) => c.category === filter);

  const activeThemeColor = useMemo(() => {
    return THEMES.find((t) => t.id === currentTheme)?.color || '#3B82F6';
  }, [currentTheme]);

  // Current available modules for the selected project type
  const currentAvailableModules = useMemo(() => {
    return DYNAMIC_MODULES_BY_TYPE[calcType] || DYNAMIC_MODULES_BY_TYPE.landing;
  }, [calcType]);

  // Change project type and intelligently preset relevant modules
  const handleSelectProjectType = (typeId: string) => {
    setCalcType(typeId);
    const newModules = DYNAMIC_MODULES_BY_TYPE[typeId] || [];
    if (newModules.length >= 2) {
      setSelectedModules([newModules[0].id, newModules[1].id]);
    } else if (newModules.length === 1) {
      setSelectedModules([newModules[0].id]);
    } else {
      setSelectedModules([]);
    }
  };

  // Calculator Computation
  const calculation = useMemo(() => {
    const selectedType = PROJECT_TYPES.find((t) => t.id === calcType) || PROJECT_TYPES[0];
    let totalPrice = selectedType.basePrice;
    let totalDays = selectedType.baseDays;

    selectedModules.forEach((modId) => {
      const mod = currentAvailableModules.find((m) => m.id === modId);
      if (mod) {
        totalPrice += mod.price;
        totalDays += mod.days;
      }
    });

    if (isExpress) {
      totalPrice = Math.round(totalPrice * 1.25);
      totalDays = Math.max(3, Math.round(totalDays * 0.6));
    }

    return {
      typeTitle: selectedType.title,
      price: totalPrice,
      days: totalDays,
    };
  }, [calcType, selectedModules, isExpress, currentAvailableModules]);

  const animatedPrice = useAnimatedNumber(calculation.price, 360);
  const animatedDays = useAnimatedNumber(calculation.days, 280);

  // Telegram Pre-filled URL
  const telegramMessageUrl = useMemo(() => {
    const selectedModsNames = selectedModules
      .map((id) => currentAvailableModules.find((m) => m.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Здравствуйте, Айдар! Хочу обсудить разработку проекта:
📌 Тип: ${calculation.typeTitle}
🔧 Модули: ${selectedModsNames || 'Без доп. модулей'}
⚡ Темп: ${isExpress ? 'Срочный экспресс (быстрый запуск)' : 'Стандартный'}
💰 Расчетная смета: ~${calculation.price.toLocaleString('ru-RU')} ₽ (срок: ${calculation.days} дн.)`;

    return `https://t.me/Aidar_RG?text=${encodeURIComponent(text)}`;
  }, [calculation, selectedModules, isExpress, currentAvailableModules]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('garipov_theme_accent') || 'blue';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme-accent', savedTheme);

    const savedCookie = localStorage.getItem('garipov_cookie_consent');
    if (!savedCookie) {
      setCookieAccepted(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['hero', 'services', 'cases', 'trust', 'workflow', 'calculator', 'technologies', 'faq', 'contacts'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme-accent', themeId);
    localStorage.setItem('garipov_theme_accent', themeId);
  };

  const toggleModule = (id: string) => {
    setSelectedModules((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const acceptCookies = () => {
    localStorage.setItem('garipov_cookie_consent', 'true');
    setCookieAccepted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('disprogar@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { id: 'services', label: 'Услуги' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'trust', label: 'Почему я' },
    { id: 'workflow', label: 'Процесс' },
    { id: 'calculator', label: 'Калькулятор' },
    { id: 'technologies', label: 'Стек' },
    { id: 'faq', label: 'FAQ' },
  ];

  const currentArchInfo = ARCH_DETAILS[activeArchNode] || ARCH_DETAILS.web;

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* Top Engineering Status Bar */}
      <div style={{ background: '#040609', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '6px 0', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#34D399', fontWeight: 700 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }}></span>
              SYSTEM ONLINE
            </span>
            <span>node: prod-eu-north</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>Next.js 15 Turbopack</span>
            <span>&lt;45ms</span>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)', padding: '12px 0', backgroundColor: 'rgba(6, 8, 13, 0.94)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          {/* Logo & Brand */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', color: '#FFF', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)', border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
              AG
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Айдар Гарипов</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-primary-light)', fontFamily: 'var(--font-mono)' }}>Full-Stack & Bot Dev</div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <style>{`
              @media (min-width: 960px) {
                .desktop-nav { display: flex !important; gap: 4px; align-items: center; }
                .mobile-toggle-btn { display: none !important; }
              }
            `}</style>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    color: isActive ? '#FFF' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'rgba(var(--color-primary-rgb), 0.15)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(var(--color-primary-rgb), 0.4)' : 'transparent'}`,
                    padding: '6px 12px',
                    borderRadius: 10,
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Theme Palette */}
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.04)', padding: '4px 6px', borderRadius: 10, border: '1px solid var(--border-subtle)' }} title="Сменить тему">
              {THEMES.map((th) => (
                <button
                  key={th.id}
                  type="button"
                  onClick={() => changeTheme(th.id)}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: th.color,
                    border: currentTheme === th.id ? '2px solid #FFF' : '1px solid transparent',
                    cursor: 'pointer',
                    transform: currentTheme === th.id ? 'scale(1.15)' : 'scale(0.9)',
                    boxShadow: currentTheme === th.id ? `0 0 8px ${th.color}` : 'none',
                    transition: 'all 0.2s ease',
                  }}
                  title={th.name}
                  aria-label={th.name}
                />
              ))}
            </div>

            {/* Telegram Header CTA */}
            <a href="https://t.me/Aidar_RG" target="_blank" rel="noopener noreferrer" className="cyber-btn" style={{ padding: '8px 14px', fontSize: '0.8125rem' }}>
              <TelegramIcon size={15} /> <span style={{ display: 'inline' }}>Обсудить</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn cyber-btn-ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ padding: '8px 10px', minHeight: '38px', borderRadius: '10px' }}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div style={{ background: 'rgba(6, 8, 13, 0.98)', borderTop: '1px solid var(--border-subtle)', padding: '16px 20px', marginTop: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: isActive ? 'var(--color-primary-light)' : '#FFF',
                      backgroundColor: isActive ? 'rgba(var(--color-primary-rgb), 0.15)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isActive ? 'rgba(var(--color-primary-rgb), 0.4)' : 'var(--border-subtle)'}`,
                      padding: '12px 16px',
                      borderRadius: 12,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} color="var(--color-primary-light)" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" style={{ padding: '60px 0 50px 0', position: 'relative', overflow: 'hidden' }}>
        <HeroInteractiveCanvas themeColor={activeThemeColor} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Left: Commercial Result Copy */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: 9999, background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34D399', fontSize: '0.78rem', fontWeight: 700, marginBottom: '16px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981', flexShrink: 0 }}></span>
                Открыт для проектов • Запуск под ключ
              </div>

              <h1 style={{ fontSize: 'clamp(1.85rem, 5vw, 3.2rem)', lineHeight: 1.18, marginBottom: '16px', letterSpacing: '-0.03em' }}>
                Сайты, Telegram-боты и <span className="glow-accent">автоматизация бизнеса</span> под ключ
              </h1>

              <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px', maxWidth: 580 }}>
                Создаю современные сайты, сервисы и Telegram-ботов, которые помогают получать заявки и автоматизировать работу бизнеса.
              </p>

              {/* Technologies Proof Tagline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {['Next.js', 'Python', 'Java', 'PostgreSQL', 'Docker', 'Telegram API'].map((t, idx) => (
                  <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'var(--color-primary-light)', padding: '3px 8px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="hero-buttons-wrapper" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="https://t.me/Aidar_RG" target="_blank" rel="noopener noreferrer" className="cyber-btn" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
                  <TelegramIcon size={18} /> Обсудить проект
                </a>
                <a href="#calculator" className="cyber-btn-ghost" style={{ padding: '14px 22px', fontSize: '0.95rem' }}>
                  <Calculator size={18} /> Рассчитать смету
                </a>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFF', fontFamily: 'var(--font-heading)' }}>10+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Кейсов в портфолио</div>
                </div>
                <div style={{ width: 1, height: 28, background: 'var(--border-subtle)' }}></div>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#34D399', fontFamily: 'var(--font-heading)' }}>98/100</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Скорость PageSpeed</div>
                </div>
                <div style={{ width: 1, height: 28, background: 'var(--border-subtle)' }}></div>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-primary-light)', fontFamily: 'var(--font-heading)' }}>0%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Посредников</div>
                </div>
              </div>
            </div>

            {/* Right: The Exact Interactive Architecture Map with Ambient Glow */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'radial-gradient(circle at 60% 50%, rgba(var(--color-primary-rgb), 0.2) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              <div className="cyber-card" style={{ position: 'relative', zIndex: 1, padding: '20px', border: '1px solid rgba(var(--color-primary-rgb), 0.35)', boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(var(--color-primary-rgb), 0.15)', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    <Activity size={14} color="var(--color-primary-light)" /> Interactive Architecture Map
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', color: '#34D399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }}></span> Live
                  </span>
                </div>

                {/* Node System */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', width: '100%' }}>
                  {/* 1. Node: USER */}
                  <div
                    onMouseEnter={() => setActiveArchNode('user')}
                    onClick={() => setActiveArchNode('user')}
                    style={{
                      width: '100%',
                      background: activeArchNode === 'user' ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${activeArchNode === 'user' ? '#F43F5E' : 'var(--border-subtle)'}`,
                      borderRadius: 10,
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: 42,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <User size={15} color="#F43F5E" />
                      <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>USER</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#F43F5E', fontFamily: 'var(--font-mono)' }}>Client</span>
                  </div>

                  {/* Arrow 1 */}
                  <div style={{ color: activeArchNode === 'web' || activeArchNode === 'user' ? 'var(--color-primary-light)' : 'var(--text-muted)', fontSize: '0.7rem', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>
                    │<br />▼
                  </div>

                  {/* 2. Node: NEXT.JS APP */}
                  <div
                    onMouseEnter={() => setActiveArchNode('web')}
                    onClick={() => setActiveArchNode('web')}
                    style={{
                      width: '100%',
                      background: activeArchNode === 'web' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(56, 189, 248, 0.06)',
                      border: `1px solid ${activeArchNode === 'web' ? '#38BDF8' : 'rgba(56, 189, 248, 0.25)'}`,
                      borderRadius: 10,
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: 42,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Globe size={15} color="#38BDF8" />
                      <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>NEXT.JS APP</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>Frontend</span>
                  </div>

                  {/* Arrow 2 */}
                  <div style={{ color: activeArchNode === 'api' || activeArchNode === 'web' ? 'var(--color-primary-light)' : 'var(--text-muted)', fontSize: '0.7rem', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>
                    │<br />▼
                  </div>

                  {/* 3. Node: FASTAPI */}
                  <div
                    onMouseEnter={() => setActiveArchNode('api')}
                    onClick={() => setActiveArchNode('api')}
                    style={{
                      width: '100%',
                      background: activeArchNode === 'api' ? 'rgba(129, 140, 248, 0.2)' : 'rgba(129, 140, 248, 0.06)',
                      border: `1px solid ${activeArchNode === 'api' ? '#818CF8' : 'rgba(129, 140, 248, 0.25)'}`,
                      borderRadius: 10,
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: 42,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Server size={15} color="#818CF8" />
                      <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>FASTAPI</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#818CF8', fontFamily: 'var(--font-mono)' }}>Backend</span>
                  </div>

                  {/* Arrow 3 (Split) */}
                  <div style={{ color: activeArchNode === 'db_postgres' || activeArchNode === 'db_redis' ? 'var(--color-primary-light)' : 'var(--text-muted)', fontSize: '0.7rem', lineHeight: 1, fontFamily: 'var(--font-mono)', letterSpacing: '18px', paddingLeft: '18px' }}>
                    ││<br />▼▼
                  </div>

                  {/* 4. Split Nodes: POSTGRES & REDIS */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                    <div
                      onMouseEnter={() => setActiveArchNode('db_postgres')}
                      onClick={() => setActiveArchNode('db_postgres')}
                      style={{
                        background: activeArchNode === 'db_postgres' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${activeArchNode === 'db_postgres' ? '#FBBF24' : 'var(--border-subtle)'}`,
                        borderRadius: 10,
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minHeight: 42,
                      }}
                    >
                      <Database size={14} color="#FBBF24" />
                      <span style={{ fontWeight: 800, fontSize: '0.74rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>POSTGRES</span>
                    </div>

                    <div
                      onMouseEnter={() => setActiveArchNode('db_redis')}
                      onClick={() => setActiveArchNode('db_redis')}
                      style={{
                        background: activeArchNode === 'db_redis' ? 'rgba(251, 146, 60, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${activeArchNode === 'db_redis' ? '#FB923C' : 'var(--border-subtle)'}`,
                        borderRadius: 10,
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minHeight: 42,
                      }}
                    >
                      <HardDrive size={14} color="#FB923C" />
                      <span style={{ fontWeight: 800, fontSize: '0.74rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>REDIS</span>
                    </div>
                  </div>

                  {/* Arrow 4 */}
                  <div style={{ color: activeArchNode === 'tg' ? '#229ED9' : 'var(--text-muted)', fontSize: '0.7rem', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>
                    │<br />▼
                  </div>

                  {/* 5. Node: TELEGRAM */}
                  <div
                    onMouseEnter={() => setActiveArchNode('tg')}
                    onClick={() => setActiveArchNode('tg')}
                    style={{
                      width: '100%',
                      background: activeArchNode === 'tg' ? 'rgba(34, 158, 217, 0.25)' : 'rgba(34, 158, 217, 0.08)',
                      border: `1px solid ${activeArchNode === 'tg' ? '#229ED9' : 'rgba(34, 158, 217, 0.3)'}`,
                      borderRadius: 10,
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: 42,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TelegramIcon size={15} />
                      <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>TELEGRAM</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#34D399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>Delivered</span>
                  </div>
                </div>

                {/* Dynamic Live Inspector Panel */}
                <div style={{ marginTop: '14px', background: 'rgba(0,0,0,0.5)', borderRadius: 10, border: `1px solid ${currentArchInfo.color}30`, padding: '10px 12px', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: currentArchInfo.color, display: 'inline-block' }}></span>
                      <span style={{ fontWeight: 800, fontSize: '0.8rem', color: '#FFF', fontFamily: 'var(--font-mono)' }}>{currentArchInfo.title}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: currentArchInfo.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{currentArchInfo.layerBadge}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '4px' }}>
                    {currentArchInfo.desc}
                  </p>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    ⚡ {currentArchInfo.metrics}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Services Section */}
      <section id="services" style={{ padding: '70px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
              &lt; services /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Что я могу сделать для вашего бизнеса</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Конкретные продукты, решающие задачи продаж, обслуживания клиентов и автоматизации</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {SERVICES.map((srv) => (
              <div key={srv.id} className="cyber-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
                    {srv.icon}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#FFF' }}>{srv.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {srv.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#calculator" className="cyber-btn-ghost" style={{ padding: '12px 16px', fontSize: '0.85rem', justifyContent: 'center', width: '100%' }}>
                  Рассчитать стоимость <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                &lt; all-projects /&gt;
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)' }}>Реализованные кейсы ({CASES.length})</h2>
            </div>

            {/* Filter Tabs with Mobile Swipe Scroll */}
            <div className="scroll-pills-container" style={{ background: 'var(--bg-surface)', padding: '4px', borderRadius: 12, border: '1px solid var(--border-subtle)', maxWidth: '100%' }}>
              {[
                { id: 'all', label: `Все кейсы (${CASES.length})` },
                { id: 'web', label: 'Сайты (6)' },
                { id: 'bots', label: 'Боты (2)' },
                { id: 'backend', label: 'Backend (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as any)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 8,
                    border: 'none',
                    background: filter === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: filter === tab.id ? '#FFF' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    minHeight: 36,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cases Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredCases.map((project) => (
              <div
                key={project.id}
                className="cyber-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Case Preview Image */}
                  <div style={{ height: 180, backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12, 16, 26, 0.95) 0%, transparent 60%)' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(6, 8, 13, 0.88)', backdropFilter: 'blur(8px)', color: project.accentColor, border: `1px solid ${project.accentColor}40`, padding: '4px 10px', borderRadius: 6, fontSize: '0.72rem', fontWeight: 800 }}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Case Content */}
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '14px', color: '#FFF' }}>{project.title}</h3>

                    {/* Problem */}
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#EF4444', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                        Проблема бизнеса
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {project.problem}
                      </div>
                    </div>

                    {/* Solution */}
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                        Решение
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {project.solution}
                      </div>
                    </div>

                    {/* Business Result */}
                    <div style={{ marginBottom: '14px', background: 'rgba(16, 185, 129, 0.08)', padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#34D399', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '2px' }}>
                        Результат для бизнеса
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#E2E8F0', fontWeight: 500, lineHeight: 1.45 }}>
                        {project.businessResult}
                      </div>
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
                      {project.stack.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', padding: '2px 6px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="case-actions-grid" style={{ padding: '0 20px 20px 20px', display: 'grid', gridTemplateColumns: project.demoUrl ? '1.2fr 0.8fr' : '1fr', gap: '10px' }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-btn"
                      style={{ padding: '10px 14px', fontSize: '0.82rem' }}
                    >
                      Смотреть демо <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn-ghost"
                    style={{ padding: '10px 12px', fontSize: '0.82rem', justifyContent: 'center' }}
                  >
                    <GithubIcon size={15} /> Исходники
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" style={{ padding: '70px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              &lt; why-me /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Почему со мной работают</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Прозрачные условия, надежность и фокус на решении бизнес-задач</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {WHY_WORK_WITH_ME.map((item, idx) => (
              <div key={idx} className="cyber-card" style={{ background: 'var(--bg-main)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 6, background: 'rgba(var(--color-primary-rgb), 0.12)', color: 'var(--color-primary-light)', fontSize: '0.72rem', fontWeight: 800, marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                    {item.badge}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps Workflow Section */}
      <section id="workflow" style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              &lt; workflow /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Как проходит работа</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>4 понятных этапа от первого сообщения до готового продукта</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {WORKFLOW_STEPS.map((step, idx) => (
              <div key={idx} className="cyber-card" style={{ padding: '22px 20px', position: 'relative' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary-light)', fontFamily: 'var(--font-heading)', opacity: 0.4, marginBottom: '10px' }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Cost & Timeline Calculator */}
      <section id="calculator" style={{ padding: '70px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              &lt; calculator /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Калькулятор стоимости и сроков</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Сконфигурируйте параметры разработки вашего проекта и получите моментальный предварительный расчёт
            </p>
          </div>

          <div className="calculator-layout-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'start' }}>
            {/* Left Config Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Step 1 */}
              <div className="cyber-card" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-primary-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                  Шаг 1. Тип разработки
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = calcType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleSelectProjectType(type.id)}
                        className={`calc-option-btn ${isSelected ? 'active' : ''}`}
                      >
                        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: isSelected ? '#FFF' : 'var(--text-primary)' }}>
                          {type.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                          {type.desc}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-primary-light)', fontWeight: 700, marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                          от {type.basePrice.toLocaleString('ru-RU')} ₽ • {type.baseDays} дн.
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div className="cyber-card" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-primary-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                  Шаг 2. Дополнительные модули ({calculation.typeTitle})
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {currentAvailableModules.map((mod) => {
                    const isChecked = selectedModules.includes(mod.id);
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className={`calc-checkbox-btn ${isChecked ? 'active' : ''}`}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${isChecked ? 'var(--color-primary)' : 'var(--border-subtle)'}`, background: isChecked ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {isChecked && <Check size={12} color="#FFF" />}
                          </div>
                          <span style={{ fontSize: '0.84rem', color: isChecked ? '#FFF' : 'var(--text-secondary)', fontWeight: isChecked ? 600 : 400 }}>
                            {mod.label}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 700, flexShrink: 0 }}>
                          +{mod.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div className="cyber-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#FFF' }}>⚡ Экспресс-запуск проекта</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Приоритетная разработка и сдача в 2 раза быстрее</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpress(!isExpress)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 10,
                    border: `1px solid ${isExpress ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                    background: isExpress ? 'rgba(var(--color-primary-rgb), 0.2)' : 'transparent',
                    color: isExpress ? 'var(--color-primary-light)' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    minHeight: 40,
                  }}
                >
                  {isExpress ? '✓ Включено (+25%)' : 'Обычный темп'}
                </button>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="cyber-card calculator-summary-card" style={{ padding: '24px', border: '1px solid rgba(var(--color-primary-rgb), 0.35)', boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(var(--color-primary-rgb), 0.15)', position: 'sticky', top: 100 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', gap: '8px', flexWrap: 'wrap' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', borderRadius: 6, background: 'rgba(var(--color-primary-rgb), 0.15)', color: 'var(--color-primary-light)', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                  Итоговый расчёт
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary-light)', background: 'rgba(255,255,255,0.04)', padding: '3px 8px', borderRadius: 6, border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  CONFIG: {selectedModules.length}/{currentAvailableModules.length} MODULES
                </span>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Выбранный тип:</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFF' }}>{calculation.typeTitle}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '16px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '2px' }}>
                    <Coins size={14} color="var(--color-primary-light)" /> Ориентировочно
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                    ~{animatedPrice.toLocaleString('ru-RU')} ₽
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '2px' }}>
                    <Clock size={14} color="var(--color-primary-light)" /> Срок
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#34D399', fontFamily: 'var(--font-heading)' }}>
                    {animatedDays} дн.
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Включенные модули ({selectedModules.length}):</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedModules.length === 0 ? (
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Базовая комплектация</div>
                  ) : (
                    selectedModules.map((mId) => {
                      const mod = currentAvailableModules.find((m) => m.id === mId);
                      return (
                        <div key={mId} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          <Check size={13} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                          <span>{mod?.label || mId}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              <a
                href={telegramMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn"
                style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
              >
                <TelegramIcon size={16} /> Обсудить в Telegram ➔
              </a>

              <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Конфигурация автоматически передастся в диалог с Айдаром
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layered Architectural Tech Stack Matrix */}
      <section id="technologies" style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              &lt; tech-pipelines /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Архитектурный стек технологий</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Сквозной пайплайн разработки от пользовательского интерфейса до облачной инфраструктуры</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {STACK_PIPELINES.map((pipeline, pIdx) => (
              <div key={pIdx} className="cyber-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFF' }}>{pipeline.layer}</div>
                    <span style={{ fontSize: '0.68rem', color: pipeline.color, background: `${pipeline.color}15`, padding: '2px 6px', borderRadius: 4, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      {pipeline.tag}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {pipeline.items.map((item, iIdx) => (
                      <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                        <div style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {TECH_ICONS[item.name] || <span style={{ width: 6, height: 6, borderRadius: '50%', background: pipeline.color }}></span>}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#FFF' }}>{item.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '70px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
              &lt; faq /&gt;
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.4rem)', marginBottom: '10px' }}>Часто задаваемые вопросы</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ответы на популярные вопросы о процессе, оплате и гарантиях</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="cyber-card" style={{ background: 'var(--bg-main)', padding: '18px 20px', cursor: 'pointer' }} onClick={() => setOpenFaq(isOpen ? null : idx)}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <h3 style={{ fontSize: '0.98rem', color: '#FFF' }}>{item.q}</h3>
                    <ChevronDown size={18} color="var(--color-primary-light)" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0 }} />
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Converting Final CTA Section */}
      <section id="contacts" style={{ padding: '80px 0', background: 'radial-gradient(circle at 50% 100%, rgba(var(--color-primary-rgb), 0.18) 0%, transparent 60%)' }}>
        <div className="container" style={{ maxWidth: 840, textAlign: 'center' }}>
          <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
            &lt; start-project /&gt;
          </div>
          <h2 style={{ fontSize: 'clamp(1.85rem, 5vw, 2.8rem)', marginBottom: '14px' }}>Есть задача или идея?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.55, maxWidth: 680, margin: '0 auto 32px auto' }}>
            Опишите её в Telegram. Я предложу вариант реализации и помогу определить оптимальный формат проекта.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://t.me/Aidar_RG"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              <TelegramIcon size={18} /> Обсудить проект
            </a>

            <a
              href="https://github.com/garipov-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn-ghost"
              style={{ padding: '16px 24px', fontSize: '1rem' }}
            >
              <GithubIcon size={18} /> GitHub
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="cyber-btn-ghost"
              style={{ padding: '16px 20px', fontSize: '1rem' }}
              title="Скопировать email"
            >
              <Mail size={16} color="var(--color-primary-light)" />
              <span>{copiedEmail ? 'Email скопирован!' : 'Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '36px 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.84rem', background: '#05070B' }}>
        <div className="container">
          <div style={{ fontWeight: 800, color: '#FFF', fontSize: '1rem', marginBottom: '6px' }}>Айдар Гарипов — Full-Stack & Bot Developer</div>
          <p style={{ color: 'var(--color-primary-light)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginTop: '4px' }}>
            Сделано с терминалом и любовью ❤️
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.72rem' }}>© {new Date().getFullYear()} Все права защищены. garipov-ar.github.io</p>
        </div>
      </footer>

      {/* Back to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '20px',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(12, 16, 26, 0.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(var(--color-primary-rgb), 0.4)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(var(--color-primary-rgb), 0.25)',
            zIndex: 90,
            transition: 'all 0.25s ease',
          }}
          title="Наверх"
          aria-label="Наверх"
        >
          <ChevronUp size={20} color="var(--color-primary-light)" />
        </button>
      )}

      {/* Cookie Consent Banner */}
      {!cookieAccepted && (
        <div
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '640px',
            background: 'rgba(12, 16, 26, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(var(--color-primary-rgb), 0.3)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(var(--color-primary-rgb), 0.15)',
            zIndex: 100,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '220px' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(var(--color-primary-rgb), 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-light)', flexShrink: 0 }}>
              <Cookie size={18} />
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
              Этот сайт использует файлы cookie для улучшения пользовательского опыта и аналитики.
            </div>
          </div>

          <button
            type="button"
            onClick={acceptCookies}
            className="cyber-btn"
            style={{ padding: '8px 18px', fontSize: '0.82rem', borderRadius: 8, minHeight: 38 }}
          >
            Принять
          </button>
        </div>
      )}
    </div>
  );
}
