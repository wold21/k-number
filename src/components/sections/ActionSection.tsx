'use client';

import { useEffect, useState } from 'react';

interface ActionSectionProps {}

export default function ActionSection({}: ActionSectionProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    // 클라이언트에서만 실행
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = (platform: string) => {
    const url = currentUrl || 'https://k-number.org'; // fallback URL
    const title = "K-Number: 기억의 시작 - 한국 해외입양 이야기";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'kakao':
        // KakaoTalk sharing would require SDK setup
        alert('카카오톡 공유 기능은 준비 중입니다.');
        break;
      case 'copy':
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url);
          alert('링크가 복사되었습니다.');
        } else {
          alert('클립보드 복사를 지원하지 않는 브라우저입니다.');
        }
        break;
    }
  };

  return (
    <section id="action" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            지금 할 수 있는 일
          </h2>
          
          <p className="text-xl mb-12 text-blue-100 leading-relaxed">
            이 이야기들이 더 많은 사람들에게 알려질 수 있도록 도와주세요. 
            작은 관심과 참여가 큰 변화를 만들어냅니다.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* 공유하기 */}
            <div className="bg-blue-700 p-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">공유하기</h3>
              <p className="text-blue-100 text-sm mb-4">SNS나 지인들에게 이 이야기를 공유해주세요</p>
              <div className="space-y-2">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-full bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded text-sm transition-colors"
                >
                  Facebook
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-full bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded text-sm transition-colors"
                >
                  Twitter
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="w-full bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded text-sm transition-colors"
                >
                  링크 복사
                </button>
              </div>
            </div>
            
            {/* 참여하기 */}
            <div className="bg-green-600 p-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">참여하기</h3>
              <p className="text-green-100 text-sm mb-4">입양인 지원 단체나 관련 활동에 참여해주세요</p>
              <div className="space-y-2">
                <button className="w-full bg-green-700 hover:bg-green-800 py-2 px-4 rounded text-sm transition-colors">
                  단체 찾기
                </button>
                <button className="w-full bg-green-700 hover:bg-green-800 py-2 px-4 rounded text-sm transition-colors">
                  자원봉사
                </button>
                <button className="w-full bg-green-700 hover:bg-green-800 py-2 px-4 rounded text-sm transition-colors">
                  후원하기
                </button>
              </div>
            </div>
            
            {/* 연결하기 */}
            <div className="bg-purple-600 p-6 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">연결하기</h3>
              <p className="text-purple-100 text-sm mb-4">입양인 커뮤니티와 연결되어 서로를 지지해주세요</p>
              <div className="space-y-2">
                <button className="w-full bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded text-sm transition-colors">
                  커뮤니티 가입
                </button>
                <button className="w-full bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded text-sm transition-colors">
                  상담 신청
                </button>
                <button className="w-full bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded text-sm transition-colors">
                  멘토링
                </button>
              </div>
            </div>
            
            {/* 기록하기 */}
            <div className="bg-orange-600 p-6 rounded-lg hover:bg-orange-700 transition-colors duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">기록하기</h3>
              <p className="text-orange-100 text-sm mb-4">당신의 이야기를 기록하고 보존하는 일에 동참해주세요</p>
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-orange-700 hover:bg-orange-800 py-2 px-4 rounded text-sm transition-colors"
                >
                  이야기 제출
                </button>
                <button className="w-full bg-orange-700 hover:bg-orange-800 py-2 px-4 rounded text-sm transition-colors">
                  사진 기부
                </button>
                <button className="w-full bg-orange-700 hover:bg-orange-800 py-2 px-4 rounded text-sm transition-colors">
                  문서 기증
                </button>
              </div>
            </div>
          </div>
          
          {/* 임팩트 섹션 */}
          <div className="bg-blue-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">우리가 함께 만든 변화</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">1,247</div>
                <p className="text-blue-100 text-sm">사이트 공유 수</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-200 mb-2">89</div>
                <p className="text-blue-100 text-sm">새로운 증언 수집</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-200 mb-2">156</div>
                <p className="text-blue-100 text-sm">커뮤니티 연결</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-200 mb-2">23</div>
                <p className="text-blue-100 text-sm">가족 재회 성공</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-800 rounded border border-blue-500">
              <p className="text-blue-100 text-sm">
                💙 이 수치들은 여러분의 관심과 참여로 만들어진 결과입니다. 
                계속해서 함께 해주세요.
              </p>
            </div>
          </div>
          
          {/* CTA 버튼 */}
          <div className="mt-12">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 mr-4"
            >
              지금 시작하기
            </button>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              처음부터 다시 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
