import localFont from 'next/font/local';

// Geist Sans (Variable Font)
export const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    display: 'swap',
});

// Geist Mono (Variable Font)
export const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    display: 'swap',
});