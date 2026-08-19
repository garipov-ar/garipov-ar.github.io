import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Айдар Гарипов — Разработка сайтов, веб-сервисов и Telegram-ботов под ключ',
  description: 'Создание современных сайтов, высококонверсионных лендингов, квиз-калькуляторов и Telegram-ботов любой сложности (Mini Apps, CRM, прием заявок, оплаты).',
  authors: [{ name: 'Айдар Гарипов', url: 'https://garipov-ar.github.io/' }],
  keywords: ['Айдар Гарипов', 'разработка сайтов', 'создание сайтов', 'Telegram бот', 'разработка телеграм ботов', 'Telegram Mini Apps', 'Next.js', 'React', 'TypeScript'],
  icons: {
    icon: 'icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
