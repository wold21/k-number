// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SystemSectionProps {}

export default function SystemSection({}: SystemSectionProps) {
  return (
    <section id="system" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            잊혀진 제도
          </h2>
          
          <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
            한국의 해외입양 제도는 어떻게 시작되었고, 왜 이렇게 오래 지속되었을까요? 
            시스템의 문제점과 정부의 책임을 살펴봅니다.
          </p>
          
          {/* 타임라인 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">입양 제도의 역사</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>
              
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-bold text-blue-400">1950년대</h4>
                    <p className="text-gray-300">한국전쟁 후 전쟁고아 해외입양 시작</p>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <p className="text-sm text-gray-400">
                      전쟁으로 인한 고아들이 대량 발생, 
                      국제 구호단체를 통한 입양 시작
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-sm text-gray-400">
                      경제성장과 함께 입양이 산업화되기 시작, 
                      입양 기관들의 사업 확장
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-red-500 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <h4 className="text-xl font-bold text-red-400">1960-70년대</h4>
                    <p className="text-gray-300">입양의 산업화, 미혼모 자녀 입양 증가</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="text-xl font-bold text-green-400">1980-90년대</h4>
                    <p className="text-gray-300">올림픽을 앞두고 이미지 개선 압박</p>
                  </div>
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <p className="text-sm text-gray-400">
                      국제적 비판에도 불구하고 입양은 계속됨, 
                      정부의 소극적 대응
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-sm text-gray-400">
                      입양 특례법 개정, 그러나 여전히 미흡한 제도 개선
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <h4 className="text-xl font-bold text-purple-400">2000년대 이후</h4>
                    <p className="text-gray-300">점진적 제도 개선, 아직 갈 길이 멀어</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 문제점 분석 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-400">시스템의 문제점</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <div>
                    <strong>부실한 기록 관리</strong>
                    <p className="text-gray-300 text-sm mt-1">출생 정보, 가족 정보의 부정확한 기록 또는 조작</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <div>
                    <strong>이윤 추구 구조</strong>
                    <p className="text-gray-300 text-sm mt-1">입양 기관의 수익을 위한 아동 &lsquo;수출&rsquo;</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <div>
                    <strong>사후 관리 부재</strong>
                    <p className="text-gray-300 text-sm mt-1">입양 후 아동의 복지나 적응에 대한 관심 부족</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">정부의 책임</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <div>
                    <strong>감독 소홀</strong>
                    <p className="text-gray-300 text-sm mt-1">입양 기관에 대한 제대로 된 감시와 규제 부재</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <div>
                    <strong>사회적 지원 부족</strong>
                    <p className="text-gray-300 text-sm mt-1">미혼모, 저소득층 가정에 대한 지원 부족</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <div>
                    <strong>인권 의식 부족</strong>
                    <p className="text-gray-300 text-sm mt-1">아동의 권리보다 어른들의 편의를 우선시</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 통계 데이터 */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">숫자로 보는 현실</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">200,000+</div>
                <p className="text-gray-300 text-sm">총 해외입양아 수</p>
                <p className="text-gray-500 text-xs mt-1">(1953-현재)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">156개국</div>
                <p className="text-gray-300 text-sm">입양 대상국</p>
                <p className="text-gray-500 text-xs mt-1">전 세계 확산</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">1-3위</div>
                <p className="text-gray-300 text-sm">세계 입양 순위</p>
                <p className="text-gray-500 text-xs mt-1">70년간 지속</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">?</div>
                <p className="text-gray-300 text-sm">정확한 통계</p>
                <p className="text-gray-500 text-xs mt-1">기록 부실로 불명</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-900 rounded-lg border border-red-700">
              <p className="text-red-200 text-sm text-center">
                ⚠️ 이 수치들도 공식 기록에 기반한 것으로, 실제 수치는 더 클 가능성이 높습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
