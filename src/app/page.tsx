'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Code2,
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
  Terminal as TerminalIcon,
  Cpu,
  Database,
  Globe,
  Palette,
  Server,
  Workflow,
  Shield,
  Bot,
  Copy,
  Check,
  CreditCard,
  MessageSquareCode,
  LayoutGrid,
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

// Interactive Hero Particle Network Background
function HeroInteractiveCanvas() {
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
      radius: 160,
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

    const particleCount = Math.min(Math.floor((width * height) / 12000), 75);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ['#3B82F6', '#60A5FA', '#38BDF8', '#818CF8', '#34D399'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        baseRadius: Math.random() * 2 + 1,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      if (mouse.isHovering) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.5);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.18)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.06)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mouse.isHovering && dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
          p.radius = p.baseRadius + force * 2.5;
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        if (mouse.isHovering && dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - dist / mouse.radius) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pjdx = p.x - p2.x;
          const pjdy = p.y - p2.y;
          const pjdist = Math.sqrt(pjdx * pjdx + pjdy * pjdy);

          if (pjdist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - pjdist / 110) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
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
  }, []);

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

interface Project {
  id: string;
  title: string;
  category: 'construction' | 'services';
  categoryLabel: string;
  description: string;
  features: string[];
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  accentColor: string;
  metrics: string;
}

const PROJECTS: Project[] = [
  {
    id: 'nordic',
    title: 'Nordic Craft — Строительная компания',
    category: 'construction',
    categoryLabel: 'Строительство и архитектура',
    description: 'Премиальный адаптивный сайт для строительной компании с интерактивным 5-шаговым квиз-калькулятором сметы и ипотеки.',
    features: [
      '5-шаговый интерактивный квиз-калькулятор стоимости и ипотеки',
      'Каталог проектов домов с планировками и рендерами',
      'Интеграция с Telegram-ботом для моментального приема заявок',
      'PageSpeed 98/100 и полная Mobile First адаптивность',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules', 'Telegram API'],
    demoUrl: 'https://garipov-ar.github.io/nordic-craft-construction/',
    githubUrl: 'https://github.com/garipov-ar/nordic-craft-construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#10B981',
    metrics: 'PageSpeed 98 • 5 шагов квиза',
  },
  {
    id: 'echo',
    title: 'Гостевой комплекс «ЭХО»',
    category: 'construction',
    categoryLabel: 'Посуточная аренда & Спа',
    description: 'Атмосферный лендинг для загородного комплекса в таежном стиле с переключателем домов, умным букингом и спа-ритуалами.',
    features: [
      'Интерактивный переключатель (A-Frame «Шалаш» vs «Большой дом»)',
      'Умный калькулятор дат (будний / выходной тариф, скидка 10% от 2 суток)',
      'Интерактивный выбор спа-услуг (чан, баня, барбекю-сет)',
      'Интеграция с Яндекс Картами (реальная геопозиция)',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Booking Engine', 'Yandex Maps'],
    demoUrl: 'https://garipov-ar.github.io/echo-houses-rental/',
    githubUrl: 'https://github.com/garipov-ar/echo-houses-rental',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#D97706',
    metrics: 'Dynamic Pricing • 2 объекта',
  },
  {
    id: 'door',
    title: 'Дверь-Мастер — Установка межкомнатных дверей',
    category: 'services',
    categoryLabel: 'Бытовые услуги',
    description: 'Высококонверсионный сайт для мастеров по установке дверей с онлайн-калькулятором, врезкой магнитных замков и гарантией 2 года.',
    features: [
      'Калькулятор стоимости (распашные, Invisible, купе, доборы, врезка)',
      'Скидка 10% при заказе от 3-х полотен',
      'Фотогалерея выполненных объектов с макро-деталями',
      'Оффер монтажа без пыли с подключением пылесоса',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/door-install/',
    githubUrl: 'https://github.com/garipov-ar/door-install',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#C08244',
    metrics: 'Скидки 10% • Чистый монтаж',
  },
  {
    id: 'demolition',
    title: 'Демонтаж-Про — Демонтажные работы под ключ',
    category: 'services',
    categoryLabel: 'Бытовые услуги',
    description: 'Продающий лендинг по сносу стен, перегородок, стяжки и вывозу строительного мусора контейнерами 8–27 м³.',
    features: [
      'Калькулятор демонтажа по площади пола и типу стен',
      'Расчет стоимости вывоза мусора и спуска грузчиками',
      'Фотогалерея объектов «до / после»',
      'Акцент на соблюдение закона о тишине и чистоту подъезда',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/demolition-service/',
    githubUrl: 'https://github.com/garipov-ar/demolition-service',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#E57A22',
    metrics: 'Смета за 15 сек • Контейнеры 8м³',
  },
  {
    id: 'handyman',
    title: 'Муж на час 24/7 — Срочный бытовой ремонт',
    category: 'services',
    categoryLabel: 'Бытовые услуги',
    description: 'Лендинг службы срочного мелкого ремонта с интерактивным чек-листом услуг и выездом мастера за 45 минут.',
    features: [
      'Интерактивный чек-лист бытовых услуг с автоматическим подсчетом сметы',
      'Категории: сантехника, навеска ТВ/полок, сборка мебели, замки',
      'Таймер срочного выезда за 45 минут',
      'Прозрачный прайс-лист без накруток на месте',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/handyman-service/',
    githubUrl: 'https://github.com/garipov-ar/handyman-service',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#3B82F6',
    metrics: 'Выезд 45 мин • Чек-лист',
  },
  {
    id: 'electrical',
    title: 'Электро-Монтаж — Электромонтажные работы',
    category: 'services',
    categoryLabel: 'Бытовые услуги',
    description: 'Экспертный сайт по электромонтажу в квартирах и домах по ГОСТ и ПУЭ с онлайн-расчетом проекта и сборкой щитов.',
    features: [
      'Калькулятор стоимости по типу жилья (1к, 2к, 3к, коттедж) и материалу стен',
      'Расчет точек розеток и сборки электрощита на автоматике ABB/Schneider',
      'Фотогалерея кабельных трасс по лазерному уровню',
      'Гарантия 5 лет по официальному договору',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://garipov-ar.github.io/electrical-service/',
    githubUrl: 'https://github.com/garipov-ar/electrical-service',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#F59E0B',
    metrics: 'ГОСТ & ПУЭ • Гарантия 5 лет',
  },
];

// Unified Developer Technologies: Original + Modern Web
const TECHNOLOGIES = [
  { name: 'Python', category: 'Backend / Scripting', color: '#38BDF8' },
  { name: 'Java', category: 'Backend & Enterprise', color: '#F87171' },
  { name: 'Node.js', category: 'Runtime & APIs', color: '#34D399' },
  { name: 'Next.js 15', category: 'Full-Stack Web', color: '#FFFFFF' },
  { name: 'React 19', category: 'Frontend UI', color: '#60A5FA' },
  { name: 'TypeScript', category: 'Language', color: '#3B82F6' },
  { name: 'Telegram Bot API', category: 'Bots & Mini Apps', color: '#229ED9' },
  { name: 'PostgreSQL', category: 'Database', color: '#818CF8' },
  { name: 'Docker', category: 'Containers', color: '#38BDF8' },
  { name: 'Kubernetes', category: 'Orchestration', color: '#60A5FA' },
  { name: 'RabbitMQ', category: 'Message Queue', color: '#FB923C' },
  { name: 'Nginx', category: 'Web Server', color: '#34D399' },
  { name: 'Linux', category: 'OS & Infrastructure', color: '#FBBF24' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#38BDF8' },
  { name: 'Git & CI/CD', category: 'DevOps', color: '#F43F5E' },
  { name: 'Figma', category: 'UX/UI Design', color: '#C084FC' },
];

const INITIAL_LOGS = [
  '⚡ [aidar@hub ~]$ init portfolio-core --prod',
  '✔ [kernel] Loaded Next.js 15.1 (Turbopack) & React 19.0.0',
  '✔ [stack] Python, Java, Node.js, Next.js, Docker, Kubernetes, PostgreSQL ready',
  '✔ [cases] 6 live production projects verified & mounted',
  '✔ [network] Status: 200 OK | Core Web Vitals: 98/100',
  '✔ [telegram] Gateway ready: https://t.me/Aidar_RG',
  '💡 [terminal] Type "help" or click any project below to inspect.',
];

export default function PortfolioHub() {
  const [filter, setFilter] = useState<'all' | 'construction' | 'services'>('all');
  const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
  const [cmdInput, setCmdInput] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = cmdInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';
    if (cleanCmd === 'help') {
      response = 'Доступные команды: projects, stack, contact, stats, clear, reload';
    } else if (cleanCmd === 'projects') {
      response = `В базе 6 кейсов: ${PROJECTS.map((p) => p.title.split('—')[0].trim()).join(', ')}`;
    } else if (cleanCmd === 'stack') {
      response = 'Стек: Python, Java, Node.js, Next.js 15, React 19, TypeScript, Docker, Kubernetes, PostgreSQL, RabbitMQ, Linux, Tailwind CSS';
    } else if (cleanCmd === 'contact') {
      response = 'Telegram: @Aidar_RG (https://t.me/Aidar_RG) | Email: disprogar@gmail.com';
    } else if (cleanCmd === 'stats') {
      response = 'Метрики: 6 проектов, PageSpeed 98/100, 100% Mobile First, Конверсия x2.8';
    } else if (cleanCmd === 'clear') {
      setLogs([]);
      setCmdInput('');
      return;
    } else if (cleanCmd === 'reload') {
      setLogs(INITIAL_LOGS);
      setCmdInput('');
      return;
    } else {
      response = `Команда "${cleanCmd}" не найдена. Введите "help" для списка команд.`;
    }

    setLogs((prev) => [...prev, `⚡ [aidar@hub ~]$ ${cmdInput}`, response]);
    setCmdInput('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('disprogar@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div>
      {/* Top Navigation */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)', padding: '16px 0', backgroundColor: 'rgba(6, 8, 13, 0.92)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', color: '#FFF', boxShadow: '0 4px 18px rgba(59, 130, 246, 0.5)', border: '1px solid rgba(255,255,255,0.2)' }}>
              AG
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#FFF', letterSpacing: '-0.02em' }}>Айдар Гарипов</div>
              <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>Web & Software Developer</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#projects" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>Кейсы</a>
            <a href="#technologies" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>Технологии</a>
            <a href="#terminal" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>Терминал</a>
            <a href="#contacts" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://github.com/garipov-ar" target="_blank" rel="noopener noreferrer" className="cyber-btn-ghost" style={{ padding: '8px 14px', fontSize: '0.8125rem' }}>
              <GithubIcon size={16} /> GitHub
            </a>
            <a href="https://t.me/Aidar_RG" target="_blank" rel="noopener noreferrer" className="cyber-btn" style={{ padding: '8px 18px', fontSize: '0.8125rem' }}>
              <TelegramIcon size={16} /> @Aidar_RG
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Interactive Neural Mesh Canvas */}
      <section style={{ padding: '90px 0 60px 0', position: 'relative', overflow: 'hidden' }}>
        <HeroInteractiveCanvas />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 50px auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 9999, background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34D399', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '24px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }}></span>
              Открыт для новых проектов и заказов
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 5.2vw, 3.6rem)', lineHeight: 1.15, marginBottom: '24px' }}>
              Разработка современных сайтов на <span className="glow-accent">Next.js 15 & React 19</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 760, margin: '0 auto 36px auto' }}>
              Создаю сверхбыстрые веб-приложения и продающие посадочные страницы с интерактивными квиз-калькуляторами сметы, плавной анимацией и интеграцией с Telegram / CRM.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#projects" className="cyber-btn" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Смотреть кейсы ({PROJECTS.length}) ➔
              </a>
              <a href="https://t.me/Aidar_RG" target="_blank" rel="noopener noreferrer" className="cyber-btn-ghost" style={{ padding: '16px 28px', fontSize: '1rem' }}>
                <TelegramIcon size={18} /> Написать в Telegram
              </a>
            </div>
          </div>

          {/* Interactive Terminal Window */}
          <div id="terminal" style={{ maxWidth: 900, margin: '0 auto 60px auto' }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot" style={{ background: '#EF4444' }}></div>
                  <div className="terminal-dot" style={{ background: '#F59E0B' }}></div>
                  <div className="terminal-dot" style={{ background: '#10B981' }}></div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TerminalIcon size={13} /> aidar-garipov@portfolio-hub: ~
                </div>
                <div style={{ width: 40 }}></div>
              </div>

              <div className="terminal-body">
                {logs.map((line, idx) => (
                  <div key={idx} style={{ marginBottom: '4px', color: line.startsWith('✔') ? '#34D399' : line.startsWith('⚡') ? '#60A5FA' : line.startsWith('💡') ? '#FBBF24' : '#94A3B8' }}>
                    {line}
                  </div>
                ))}
                <div ref={terminalBottomRef}></div>

                {/* Input Prompt */}
                <form onSubmit={handleCommand} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                  <span style={{ color: '#60A5FA', fontWeight: 700 }}>⚡ [aidar@hub ~]$</span>
                  <input
                    type="text"
                    value={cmdInput}
                    onChange={(e) => setCmdInput(e.target.value)}
                    placeholder="введите команду (help, projects, stack, contact)..."
                    style={{ flex: 1, background: 'transparent', border: 'none', color: '#FFF', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', outline: 'none' }}
                  />
                  <span className="cursor-blink"></span>
                </form>
              </div>
            </div>
          </div>

          {/* Clean Quick Metrics Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', background: 'rgba(12, 16, 26, 0.85)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '24px', boxShadow: '0 12px 36px rgba(0,0,0,0.4)' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#60A5FA', fontFamily: 'var(--font-heading)' }}>6</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Реализованных проектов</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#34D399', fontFamily: 'var(--font-heading)' }}>98/100</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>PageSpeed производительность</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#A78BFA', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Mobile First адаптивность</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FBBF24', fontFamily: 'var(--font-heading)' }}>x2.8</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Конверсия с калькулятором</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section (Original + Modern Web) */}
      <section id="technologies" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
              &lt; technologies /&gt;
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Стек технологий</h2>
            <p style={{ color: 'var(--text-muted)' }}>Инструменты разработки масштабируемых систем и веб-сервисов</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '16px' }}>
            {TECHNOLOGIES.map((tech, idx) => (
              <div
                key={idx}
                className="cyber-card"
                style={{
                  background: 'var(--bg-main)',
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: '#FFF' }}>{tech.name}</span>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}></span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                &lt; case-studies /&gt;
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Реализованные веб-решения</h2>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-surface)', padding: '6px', borderRadius: 14, border: '1px solid var(--border-subtle)' }}>
              {[
                { id: 'all', label: 'Все проекты (6)' },
                { id: 'construction', label: 'Строительство и аренда (2)' },
                { id: 'services', label: 'Бытовые услуги (4)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as any)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 10,
                    border: 'none',
                    background: filter === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: filter === tab.id ? '#FFF' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {filteredProjects.map((project) => (
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
                  {/* Project Image */}
                  <div style={{ height: 230, backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12, 16, 26, 0.95) 0%, transparent 60%)' }} />
                    <span style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(6, 8, 13, 0.85)', backdropFilter: 'blur(8px)', color: project.accentColor, border: `1px solid ${project.accentColor}40`, padding: '6px 14px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 800 }}>
                      {project.categoryLabel}
                    </span>
                    <span style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(6, 8, 13, 0.85)', color: '#FFF', padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                      {project.metrics}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div style={{ padding: '24px 24px 0 24px' }}>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#FFF' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={16} color={project.accentColor} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {project.stack.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ padding: '0 24px 24px 24px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn"
                    style={{ padding: '12px 18px', fontSize: '0.875rem' }}
                  >
                    Демо сайта <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn-ghost"
                    style={{ padding: '12px 14px', fontSize: '0.875rem', justifyContent: 'center' }}
                  >
                    <GithubIcon size={16} /> Исходники
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section id="contacts" style={{ padding: '90px 0', borderTop: '1px solid var(--border-subtle)', background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)' }}>
        <div className="container" style={{ maxWidth: 860, textAlign: 'center' }}>
          <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
            &lt; contact-me /&gt;
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Готовы обсудить ваш проект?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6 }}>
            Напишите мне в Telegram или на электронную почту — проведу консультацию, подберем архитектуру и сделаем быстрый запуск.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://t.me/Aidar_RG"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              <TelegramIcon size={18} /> Написать в Telegram
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="cyber-btn-ghost"
              style={{
                padding: '16px 24px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
              title="Нажмите, чтобы скопировать email"
            >
              <Mail size={18} color="#60A5FA" />
              <span>disprogar@gmail.com</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '4px', opacity: 0.8 }}>
                {copiedEmail ? <Check size={16} color="#34D399" /> : <Copy size={16} />}
              </span>
              {copiedEmail && (
                <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: 600, marginLeft: '4px' }}>
                  (скопирован!)
                </span>
              )}
            </button>

            <a
              href="https://github.com/garipov-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn-ghost"
              style={{ padding: '16px 26px', fontSize: '1rem' }}
            >
              <GithubIcon size={18} /> GitHub Профиль
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', background: '#05070B' }}>
        <div className="container">
          <div style={{ fontWeight: 800, color: '#FFF', fontSize: '1.1rem', marginBottom: '8px' }}>Айдар Гарипов — Web & Software Developer</div>
          <p style={{ color: '#60A5FA', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginTop: '6px' }}>
            Сделано с терминалом и любовью ❤️
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.75rem' }}>© {new Date().getFullYear()} Все права защищены. garipov-ar.github.io</p>
        </div>
      </footer>
    </div>
  );
}
