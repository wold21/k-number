'use client';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MemorySectionProps {}

interface MemoryItem {
  id: number;
  title: string;
  type: 'story' | 'document' | 'letter';
  excerpt: string;
  author: string;
  date: string;
  isAnonymous: boolean;
}

const memoryItems: MemoryItem[] = [
  {
    id: 1,
    title: "K-12458, 나의 첫 번째 이름",
    type: 'story',
    excerpt: "1983년 2월, 나는 K-12458이라는 번호를 받았다. 그것이 내가 기억하는 한국에서의 마지막 흔적이었다. 35년이 지난 지금, 나는 여전히 진짜 내 이름이 무엇이었는지 모른다...",
    author: "Michael Kim",
    date: "2023.03.15",
    isAnonymous: false
  },
  {
    id: 2,
    title: "어머니가 남긴 마지막 편지",
    type: 'letter',
    excerpt: "내 딸아, 미안해. 엄마가 너를 지켜주지 못해서 정말 미안해. 언젠가 네가 이 편지를 읽게 된다면, 엄마가 너를 얼마나 사랑했는지 알아주길...",
    author: "익명",
    date: "1987.11.22",
    isAnonymous: true
  },
  {
    id: 3,
    title: "입양 서류에서 발견한 진실",
    type: 'document',
    excerpt: "40년 만에 공개된 입양 서류. 하지만 그 안에는 거짓 정보들이 가득했다. 내 나이, 출생지, 심지어 부모에 대한 정보까지 모두 조작되어 있었다...",
    author: "이수진",
    date: "2022.08.09",
    isAnonymous: false
  },
  {
    id: 4,
    title: "한국으로의 첫 번째 여행",
    type: 'story',
    excerpt: "25살이 되어서야 처음 한국 땅을 밟았다. 인천공항에 내리는 순간, 나도 모르게 눈물이 났다. 이곳이 내가 태어난 땅이라는 사실이 믿어지지 않았다...",
    author: "익명",
    date: "2021.05.12",
    isAnonymous: true
  },
  {
    id: 5,
    title: "30년 만에 만난 생모",
    type: 'story',
    excerpt: "DNA 검사를 통해 생모를 찾았다. 30년 만의 만남. 서로를 알아보지 못했지만, 우리는 같은 눈을 가지고 있었다. 그녀는 나를 한 번도 잊은 적이 없다고 했다...",
    author: "김민수",
    date: "2023.07.20",
    isAnonymous: false
  },
  {
    id: 6,
    title: "입양 기관의 거짓 기록",
    type: 'document',
    excerpt: "입양 기관에서 제공한 기록과 실제 사실이 완전히 달랐다. 부모가 사망했다고 기록되어 있었지만, 실제로는 경제적 어려움으로 인한 포기였다. 평생 고아라고 믿고 살았던 나...",
    author: "익명",
    date: "2020.12.03",
    isAnonymous: true
  }
];

export default function MemorySection({}: MemorySectionProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'story':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'letter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'story':
        return 'text-blue-600 bg-blue-100';
      case 'letter':
        return 'text-green-600 bg-green-100';
      case 'document':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'story':
        return '개인 서사';
      case 'letter':
        return '편지';
      case 'document':
        return '문서';
      default:
        return '기록';
    }
  };

  return (
    <section id="memory" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            기억 저장소
          </h2>
          
          <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
            입양인들이 직접 기록한 경험과 기억들. 각각의 이야기는 한 사람의 인생이며, 
            우리가 기억하고 보존해야 할 소중한 증언입니다.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center px-3 py-1 rounded-full text-sm ${getTypeColor(item.type)}`}>
                      <span className="mr-2">{getTypeIcon(item.type)}</span>
                      {getTypeName(item.type)}
                    </div>
                    {item.isAnonymous && (
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">익명</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                    {item.excerpt}
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="font-medium">{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-4">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300">
                    전체 읽기
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">기억을 함께 만들어가요</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                이 기억 저장소는 입양인들의 경험을 보존하고 공유하는 공간입니다. 
                여러분의 이야기, 문서, 사진, 편지 등 모든 형태의 기록을 환영합니다. 
                개인정보는 철저히 보호되며, 익명 제출도 가능합니다.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">개인 이야기</h4>
                  <p className="text-sm text-gray-600">입양 경험, 가족 찾기, 정체성에 대한 개인적인 서사</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">편지와 메모</h4>
                  <p className="text-sm text-gray-600">가족에게 보내지 못한 편지, 일기, 메모 등</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">역사적 문서</h4>
                  <p className="text-sm text-gray-600">입양 서류, 공문서, 사진 등 역사적 가치가 있는 자료</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                기억 공유하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
