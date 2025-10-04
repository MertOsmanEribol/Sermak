import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      alert('Lütfen zorunlu alanları doldurun (Ad Soyad, E-posta, Konu ve Mesaj)');
      return;
    }

    // Mail içeriğini hazırla
    const subject = `${formData.subject} - ${formData.name}`;
    const body = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone || 'Belirtilmedi'}
Konu: ${formData.subject}

Mesaj:
${formData.message}
    `;

    // mailto linkini oluştur
    const mailtoLink = `mailto:slck.sermak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mail uygulamasını aç
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="dikisbg shadow-2xl py-20 pt-60 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(249,115,22,0.5)'}}>
            İletişim
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Sorularınız için bize ulaşın, size yardımcı olmaktan memnuniyet duyarız
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a href="tel:+905071499553" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FaPhone className="text-4xl text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
            <p className="text-gray-600">+90 507 149 95 53</p>
          </a>

          <a href="mailto:slck.sermak@gmail.com" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FaEnvelope className="text-4xl text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">E-posta</h3>
            <p className="text-gray-600">slck.sermak@gmail.com</p>
          </a>

          <a href="https://wa.me/905071499553" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600">Mesaj Gönderin</p>
          </a>

          <a href="https://www.instagram.com/sermak_makina/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <FaInstagram className="text-4xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600">@sermak_makina</p>
          </a>
        </div>

        {/* Form and Address */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="0555 555 55 55"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Konu</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Konu Seçiniz</option>
                    <option value="dikiş">Dikiş Makinaları</option>
                    <option value="utu">Ütü Makinaları</option>
                    <option value="yedek">Yedek Parça</option>
                    <option value="fabrika">Fabrika Kurulum</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Mesajı Gönder
              </button>
            </div>
          </div>

          {/* Address and Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <FaMapMarkerAlt className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adres</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sultanbeyli, İstanbul<br />
                SERMAK MAKİNA ENDÜSTRİYEL TEKSTİL SİSTEMLERİ
              </p>
              <a 
                href="/konum"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
              >
                Haritada Görüntüle
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Çalışma Saatleri</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Pazartesi - Cumartesi</span>
                  <span className="font-bold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span className="font-bold">Kapalı</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Hızlı İletişim</h3>
              <p className="text-gray-300 text-sm mb-4">
                Acil durumlar ve hızlı bilgi için doğrudan arayabilirsiniz.
              </p>
              <a
                href="tel:+905071499553"
                className="block bg-white hover:bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg font-bold transition-all duration-300"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Iletisim;