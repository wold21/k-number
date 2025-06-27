'use client';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TestimoniesSectionProps {}

interface Testimony {
  id: number;
  quote: string;
  author: string;
  background: string;
  isAnonymous: boolean;
}

const testimonies: Testimony[] = [
  {
    id: 1,
    quote: "내가 누구인지, 어디서 왔는지 알고 싶었습니다. 하지만 내게 남은 것은 K로 시작하는 번호뿐이었어요.",
    author: "이진영",
    background: "1985년 미국 입양, 38세",
    isAnonymous: false
  },
  {
    id: 2,
    quote: "양부모님은 좋은 분들이었지만, 나는 항상 뿌리를 찾고 싶었습니다. 한국어를 배우려고 해도 너무 늦었다는 생각이 들었어요.",
    author: "익명",
    background: "1978년 유럽 입양",
    isAnonymous: true
  },
  {
    id: 3,
    quote: "K-number 뒤에는 한 아이의 인생이 있었습니다. 우리는 숫자가 아닌 사람입니다.",
    author: "김미나",
    background: "1992년 호주 입양, 국제입양인연대 활동가",
    isAnonymous: false
  },
  {
    id: 4,
    quote: "한국을 방문했을 때, 내가 떠났던 곳을 찾을 수 없었습니다. 모든 것이 변해있었고, 나를 기억하는 사람도 없었어요.",
    author: "익명",
    background: "1980년 캐나다 입양",
    isAnonymous: true
  }
];

export default function TestimoniesSection({}: TestimoniesSectionProps) {
  return (
    <section id="testimonies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            증언의 기록
          </h2>
          
          <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
            숫자 뒤에 숨겨진 진짜 이야기들. 용기를 내어 목소리를 낸 입양인들의 증언을 들어보세요.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonies.map((testimony) => (
              <div key={testimony.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 01-1-1zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm2 2v-1h1v1H5zM10 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V6a1 1 0 01-1-1zm2 2V5h1v1h-1zM10 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 01-1-1zm2 2v-1h1v1h-1z" clipRule="evenodd" />
                  </svg>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    &ldquo;{testimony.quote}&rdquo;
                  </blockquote>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimony.isAnonymous ? (
                          <span className="flex items-center">
                            <span className="bg-gray-200 px-2 py-1 rounded text-sm mr-2">익명</span>
                            {testimony.author}
                          </span>
                        ) : (
                          testimony.author
                        )}
                      </p>
                      <p className="text-sm text-gray-500">{testimony.background}</p>
                    </div>
                    {testimony.isAnonymous && (
                      <div className="text-xs text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-blue-800 mb-2">당신의 이야기도 중요합니다</h3>
              <p className="text-blue-700 mb-4">
                입양 경험을 가지고 계신다면, 여러분의 이야기도 들려주세요. 
                익명으로도 가능하며, 모든 이야기는 소중히 다뤄집니다.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
              >
                이야기 남기기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
