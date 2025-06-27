'use client';

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            기억의 시작
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            숫자로 분류된 삶, 잊혀진 이야기들
          </p>
          
          {/* 인용문 섹션 */}
          <div className="space-y-8">
            <blockquote className="text-lg md:text-xl italic border-l-4 border-blue-400 pl-6 text-left max-w-3xl mx-auto">
              <p className="mb-4">
                "나는 K-12345였다. 이름이 아닌 번호로 불렸던 아이들의 이야기를 기억해주세요."
              </p>
              <cite className="text-sm text-gray-400 not-italic">- 한국 입양인의 증언</cite>
            </blockquote>
            
            <blockquote className="text-lg md:text-xl italic border-l-4 border-green-400 pl-6 text-left max-w-3xl mx-auto">
              <p className="mb-4">
                "우리는 통계가 아닙니다. 우리는 사람입니다."
              </p>
              <cite className="text-sm text-gray-400 not-italic">- 국제입양인연대</cite>
            </blockquote>
          </div>
          
          <div className="mt-12">
            <button 
              onClick={() => {
                const element = document.getElementById('knumber');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              이야기 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
