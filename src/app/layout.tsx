import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-Number: 기억의 시작 - 한국 해외입양 이야기",
  description: "한국의 해외 입양 역사와 입양인들의 경험을 기록하고 보존하는 프로젝트. 숫자로 분류되었던 삶들을 다시 인간의 이야기로 되돌려 놓습니다.",
  keywords: "한국입양, 해외입양, K-Number, 입양인, 가족찾기, 한국전쟁, 입양제도",
  openGraph: {
    title: "K-Number: 기억의 시작",
    description: "한국의 해외 입양 역사와 입양인들의 경험을 기록하고 보존하는 프로젝트",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
