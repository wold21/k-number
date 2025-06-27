# K-Number: 기억의 시작

한국의 해외 입양 역사와 입양인들의 경험을 기록하고 보존하는 웹사이트 프로젝트입니다.

## 프로젝트 개요

K-Number는 1950년대부터 시작된 한국의 해외 입양 제도와 그 안에서 숫자로 분류되었던 입양인들의 이야기를 담은 인식 개선 웹사이트입니다. 이 프로젝트는 입양인들의 경험을 기록하고, 사회적 인식을 개선하며, 관련 제도의 변화를 촉구하는 것을 목표로 합니다.

## 주요 섹션

- **기억의 시작 (Hero)**: 프로젝트 소개와 임팩트 있는 메시지
- **K-Number란? (K-Number)**: 입양 시스템의 실체와 문제점 설명
- **증언의 기록 (Testimonies)**: 입양인들의 생생한 증언과 이야기
- **잊혀진 제도 (System)**: 입양 제도의 역사적 배경과 문제점 분석
- **기억 저장소 (Memory)**: 입양인들의 개인 서사와 문서 아카이브
- **지금 할 수 있는 일 (Action)**: 방문자들의 참여와 행동 유도
- **함께 기억하기 (Contact)**: 이야기 제출과 소통 창구

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: ESLint, Hot Reload

## 시작하기

개발 서버를 실행하세요:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

## 개발 가이드

### 컴포넌트 구조

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── KNumberSection.tsx
│       ├── TestimoniesSection.tsx
│       ├── SystemSection.tsx
│       ├── MemorySection.tsx
│       ├── ActionSection.tsx
│       └── ContactSection.tsx
```

### 개발 원칙

1. **민감한 내용 처리**: 모든 콘텐츠는 존중과 존엄성을 바탕으로 작성
2. **접근성**: 적절한 시맨틱 HTML과 키보드 내비게이션 지원
3. **반응형 디자인**: 모든 디바이스에서 최적화된 경험 제공
4. **성능 최적화**: 빠른 로딩과 부드러운 인터랙션
5. **SEO 최적화**: 검색 엔진 최적화를 통한 더 넓은 도달

## 기여하기

이 프로젝트는 한국 해외 입양 문제에 대한 인식 개선을 목적으로 합니다. 기여하실 때는 다음 사항을 고려해주세요:

- 역사적 정확성 확보
- 개인정보 보호 및 익명성 보장
- 존중받는 톤앤매너 유지
- 접근성 및 사용성 고려

## 라이선스

이 프로젝트의 목적은 교육 및 사회 인식 개선입니다. 모든 개인 이야기와 증언은 제출자의 동의 하에 사용됩니다.

## 연락처

프로젝트 관련 문의: stories@k-number.org

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
