import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Артур Гарипов — Web & Full-Stack Developer | Портфолио проектов',
  description: 'Разработка быстрых и конверсионных сайтов, квиз-калькуляторов и веб-сервисов под ключ на Next.js 15, React 19, TypeScript.',
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
