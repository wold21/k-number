'use client';

import { useState } from 'react';

interface ContactSectionProps {}

export default function ContactSection({}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    isAnonymous: false,
    story: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출이 필요합니다
    setTimeout(() => {
      setSubmitMessage('소중한 이야기를 공유해주셔서 감사합니다. 검토 후 연락드리겠습니다.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        category: '',
        isAnonymous: false,
        story: '',
        consent: false
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            함께 기억하기
          </h2>
          
          <p className="text-xl text-center mb-12 text-gray-600 leading-relaxed">
            당신의 이야기, 의견, 제안을 기다립니다. 
            모든 목소리는 소중하며, 익명으로도 참여하실 수 있습니다.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">연락 방법</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <p className="text-gray-600">stories@k-number.org</p>
                    <p className="text-sm text-gray-500 mt-1">개인정보는 철저히 보호됩니다</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">익명 신고함</h4>
                    <p className="text-gray-600">신원 공개 없이 안전하게 제보</p>
                    <p className="text-sm text-gray-500 mt-1">Tor 브라우저 지원</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">우편</h4>
                    <p className="text-gray-600">서울시 중구 명동길 123</p>
                    <p className="text-gray-600">K-Number 프로젝트팀</p>
                    <p className="text-sm text-gray-500 mt-1">문서나 사진 등 물리적 자료</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔒 개인정보 보호 정책</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 제출된 모든 정보는 암호화되어 저장됩니다</li>
                  <li>• 익명 옵션 선택 시 개인 식별 정보는 즉시 삭제됩니다</li>
                  <li>• 공개 전 반드시 본인 동의를 구합니다</li>
                  <li>• 언제든지 삭제 요청이 가능합니다</li>
                </ul>
              </div>
            </div>
            
            {/* 제출 폼 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">이야기 제출하기</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 {formData.isAnonymous && <span className="text-gray-500">(익명 처리됨)</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={formData.isAnonymous}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="실명 또는 가명"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 {formData.isAnonymous && <span className="text-gray-500">(익명 처리됨)</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={formData.isAnonymous}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="연락 가능한 이메일"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    카테고리
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택해주세요</option>
                    <option value="personal-story">개인 이야기</option>
                    <option value="family-search">가족 찾기</option>
                    <option value="document">문서 제공</option>
                    <option value="correction">정보 수정</option>
                    <option value="suggestion">제안 사항</option>
                    <option value="support">지원 요청</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isAnonymous"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isAnonymous" className="ml-2 text-sm text-gray-700">
                    익명으로 제출 (개인정보 없이 내용만 공유)
                  </label>
                </div>
                
                <div>
                  <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                    내용
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="당신의 이야기, 의견, 제안 등을 자유롭게 작성해주세요. 모든 내용은 소중히 다뤄집니다."
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                    개인정보 처리방침에 동의하며, 제출한 내용이 웹사이트에 공개될 수 있음을 이해합니다. 
                    (공개 전 반드시 별도 동의를 구합니다)
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? '제출 중...' : '이야기 제출하기'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
