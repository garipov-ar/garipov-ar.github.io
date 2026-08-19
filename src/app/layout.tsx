import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Айдар Гарипов — Full-Stack & Frontend Разработчик | Next.js 15, React 19, TypeScript',
  description: 'Создание современных сайтов, высококонверсионных веб-сервисов и квиз-калькуляторов под ключ. Скорость 95+ PageSpeed, чистый код, Telegram-интеграции.',
  authors: [{ name: 'Айдар Гарипов', url: 'https://garipov-ar.github.io/' }],
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
