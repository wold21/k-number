'use client';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps {}

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 프로젝트 소개 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">K-Number 프로젝트</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              한국의 해외 입양 역사와 입양인들의 경험을 기록하고 보존하는 프로젝트입니다. 
              숫자로 분류되었던 삶들을 다시 인간의 이야기로 되돌려 놓고, 
              사회적 인식 개선과 제도적 변화를 위해 노력합니다.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                프로젝트 소개서 다운로드
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 rounded transition-colors duration-300"
              >
                연락하기
              </button>
            </div>
          </div>
          
          {/* 빠른 링크 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 이동</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('knumber')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  K-Number란?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonies')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  증언의 기록
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('system')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  잊혀진 제도
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('memory')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  기억 저장소
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('action')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  참여하기
                </button>
              </li>
            </ul>
          </div>
          
          {/* 리소스 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">관련 자료</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  입양인 지원 단체
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  법적 지원 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  가족 찾기 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  심리 상담 서비스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  연구 자료실
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 구분선 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>© {currentYear} K-Number 프로젝트. 모든 권리 보유.</p>
              <p className="mt-1">이 사이트의 모든 이야기와 자료는 제출자의 동의 하에 공개됩니다.</p>
            </div>
            
            {/* 소셜 미디어 링크 */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 3a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 추가 정보 */}
          <div className="mt-6 text-center text-gray-400 text-xs">
            <p>
              이 웹사이트는 교육 및 인식 개선 목적으로 제작되었습니다. |{' '}
              <a href="#" className="hover:text-white">개인정보처리방침</a> |{' '}
              <a href="#" className="hover:text-white">이용약관</a> |{' '}
              <a href="#" className="hover:text-white">면책조항</a>
            </p>
            <p className="mt-2">
              입양 관련 정확한 정보나 법적 조언이 필요한 경우 전문 기관에 문의하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
