'use client';

import React, { useState } from 'react';
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
  Terminal,
  Cpu,
} from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
}

const PROJECTS: Project[] = [
  {
    id: 'nordic',
    title: 'Nordic Craft — Строительная компания',
    category: 'construction',
    categoryLabel: 'Строительство и архитектура',
    description: 'Премиальный адаптивный сайт для строительной компании с интерактивным 5-шаговым квиз-калькулятором сметы и ипотеки.',
    features: [
      '5-шаговый интерактивный квиз-калькулятор стоимости',
      'Каталог проектов домов с фильтрацией и планировками',
      'Интеграция с Telegram-ботом для приема заявок',
      'Скорость загрузки 95+ по Google PageSpeed',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'CSS Modules', 'Telegram API'],
    demoUrl: 'https://garipov-ar.github.io/nordic-craft-construction/',
    githubUrl: 'https://github.com/garipov-ar/nordic-craft-construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#10B981',
  },
  {
    id: 'echo',
    title: 'Гостевой комплекс «ЭХО»',
    category: 'construction',
    categoryLabel: 'Посуточная аренда & Спа',
    description: 'Стильный лендинг для загородного комплекса в таежном стиле с переключателем домов, календарем бронирования и расчетом спа-ритуалов.',
    features: [
      'Интерактивный переключатель (A-Frame «Шалаш» vs «Большой дом»)',
      'Умный калькулятор дат (будний / выходной тариф, скидка 10% от 2 суток)',
      'Интерактивный выбор спа-услуг (чан, баня, барбекю-сет)',
      'Интерактивная карта Яндекс с реальной локацией',
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Booking Engine', 'Yandex Maps'],
    demoUrl: 'https://garipov-ar.github.io/echo-houses-rental/',
    githubUrl: 'https://github.com/garipov-ar/echo-houses-rental',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#D97706',
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
  },
];

export default function PortfolioHub() {
  const [filter, setFilter] = useState<'all' | 'construction' | 'services'>('all');

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      {/* Top Navigation */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)', padding: '18px 0', backgroundColor: 'rgba(7, 9, 14, 0.9)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', color: '#FFF', boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)' }}>
              AG
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#FFF', letterSpacing: '-0.02em' }}>Артур Гарипов</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Frontend & Full-Stack Web Developer</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#projects" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Кейсы</a>
            <a href="#stack" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Стек</a>
            <a href="#advantages" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Преимущества</a>
            <a href="#contacts" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Контакты</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://github.com/garipov-ar" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.875rem' }}>
              <GithubIcon size={18} /> GitHub
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
              <Send size={16} /> Написать в Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '90px 0 60px 0', position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.18) 0%, transparent 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 9999, background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34D399', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '24px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }}></span>
            Открыт для новых проектов и заказов
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '24px' }}>
            Разработка современных сайтов под ключ на <span className="glow-gradient">Next.js 15 & React 19</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '40px', maxWidth: 740, margin: '0 auto 40px auto' }}>
            Создаю сверхбыстрые, адаптивные веб-сервисы и продающие лендинги с интерактивными квиз-калькуляторами, плавной анимацией и интеграцией с Telegram / CRM.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Смотреть портфолио ({PROJECTS.length} кейсов) ➔
            </a>
            <a href="#contacts" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1.05rem' }}>
              Обсудить проект
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '24px', boxShadow: '0 12px 36px rgba(0,0,0,0.4)' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#60A5FA' }}>6</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Реализованных проектов</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#34D399' }}>95+</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>PageSpeed производительность</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#A78BFA' }}>100%</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Mobile First адаптивность</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FBBF24' }}>x2.8</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Конверсия с калькулятором</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" style={{ padding: '60px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Технологический стек</div>
            <h3 style={{ fontSize: '1.7rem' }}>Современные и надежные инструменты разработки</h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {[
              'Next.js 15 (App Router)',
              'React 19',
              'TypeScript',
              'CSS Modules',
              'Tailwind CSS',
              'Static Export (SSG)',
              'Telegram Bot API',
              'Responsive Design',
              'SEO & Schema.org',
              'GitHub Actions CI/CD',
              'PageSpeed 95+',
            ].map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  padding: '10px 18px',
                  borderRadius: 12,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#FFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Code2 size={16} color="var(--color-primary)" /> {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Кейсы и проекты
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Реализованные веб-решения</h2>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-surface)', padding: '6px', borderRadius: 12, border: '1px solid var(--border-subtle)' }}>
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
                    borderRadius: 8,
                    border: 'none',
                    background: filter === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: filter === tab.id ? '#FFF' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
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
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 24,
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Project Image */}
                <div style={{ height: 240, backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 19, 31, 0.95) 0%, transparent 60%)' }} />
                  <span style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(7, 9, 14, 0.85)', backdropFilter: 'blur(8px)', color: project.accentColor, border: `1px solid ${project.accentColor}40`, padding: '6px 14px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 800 }}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Content */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#FFF' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={16} color={project.accentColor} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                      {project.stack.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600 }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '12px 18px', fontSize: '0.875rem' }}
                    >
                      Демо сайта <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '12px 14px', fontSize: '0.875rem', justifyContent: 'center' }}
                    >
                      <GithubIcon size={16} /> Исходники
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="advantages" style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px auto' }}>
            <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Гарантии качества
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Почему заказывают разработку у меня</h2>
            <p style={{ color: 'var(--text-muted)' }}>Фокусируюсь на бизнес-результатах, конверсии и чистом коде</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--bg-main)', padding: '28px', borderRadius: 20, border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(59, 130, 246, 0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Gauge size={26} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Скорость 95+ PageSpeed</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Никаких перегруженных конструкторов. Чистый React/Next.js код мгновенно открывается на любых устройствах и снижает цену клика в рекламе.
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '28px', borderRadius: 20, border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Calculator size={26} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Квизы и калькуляторы</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Интерактивный расчет сметы вовлекает пользователя, повышая конверсию посадочной страницы в заявку в 2–3 раза.
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '28px', borderRadius: 20, border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(168, 85, 247, 0.15)', color: '#C084FC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Send size={26} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Уведомления в Telegram</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Каждая заявка моментально поступает в ваш личный или групповой Telegram-чат со всеми параметрами расчета.
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '28px', borderRadius: 20, border: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Smartphone size={26} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Mobile First адаптивность</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                80%+ мобильного трафика получают идеальный пользовательский опыт без горизонтального скролла и съехавших кнопок.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section id="contacts" style={{ padding: '90px 0', background: 'radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Контакты для связи
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Готовы обсудить ваш проект?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '36px' }}>
            Напишите мне в удобный мессенджер — проведу бесплатную консультацию, предложу подходящую структуру и рассчитаю сроки.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              <Send size={18} /> Написать в Telegram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem' }}>
              <Phone size={18} /> WhatsApp
            </a>
            <a href="https://github.com/garipov-ar" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem' }}>
              <GithubIcon size={18} /> GitHub Профиль
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div className="container">
          <div style={{ fontWeight: 800, color: '#FFF', fontSize: '1.1rem', marginBottom: '8px' }}>Артур Гарипов — Web & Full-Stack Developer</div>
          <p>Создание современных веб-сервисов и высококонверсионных посадочных страниц.</p>
          <p style={{ marginTop: '12px' }}>© {new Date().getFullYear()} Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
