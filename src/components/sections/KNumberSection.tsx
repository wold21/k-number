// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface KNumberSectionProps {}

export default function KNumberSection({}: KNumberSectionProps) {
  return (
    <section id="knumber" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            K-Number란?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">입양 서류의 실체</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  K-Number는 한국에서 해외로 입양된 아이들에게 부여된 식별 번호입니다. 
                  1950년대부터 시작된 이 시스템은 아이들을 개별적인 인간이 아닌 
                  단순한 번호로 분류했습니다.
                </p>
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <p className="text-red-800 font-semibold">
                    예시: K-12345, K-67890
                  </p>
                  <p className="text-red-600 text-sm mt-2">
                    * 실제 번호는 개인정보 보호를 위해 예시로 표시
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">숫자 뒤에 숨겨진 이야기</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">정체성의 상실</h4>
                  <p className="text-blue-700 text-sm">
                    번호로 분류된 아이들은 본래의 이름과 출생 정보를 잃었습니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">가족 찾기의 어려움</h4>
                  <p className="text-green-700 text-sm">
                    불완전한 기록으로 인해 생물학적 가족을 찾는 것이 거의 불가능했습니다.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">문화적 단절</h4>
                  <p className="text-purple-700 text-sm">
                    한국어, 전통, 문화적 연결고리가 완전히 끊어졌습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">통계로 보는 현실</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200,000+</div>
                  <p className="text-gray-600">총 해외입양아 수 (추정)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">70년</div>
                  <p className="text-gray-600">입양 제도 운영 기간</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">?</div>
                  <p className="text-gray-600">정확한 기록 부족</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
