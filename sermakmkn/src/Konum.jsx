import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Konum() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-orange-500" />,
      title: 'Adres',
      content: 'Sultanbeyli, İstanbul',
      subContent: 'SERMAK MAKİNA ENDÜSTRİYEL TEKSTİL SİSTEMLERİ'
    },
    {
      icon: <FaPhone className="text-3xl text-orange-500" />,
      title: 'Telefon',
      content: '+90 507 149 95 53',
      link: 'tel:+905071499553'
    },
    {
      icon: <FaEnvelope className="text-3xl text-orange-500" />,
      title: 'E-posta',
      content: 'slck.sermak@gmail.com',
      link: 'mailto:slck.sermak@gmail.com'
    },
    {
      icon: <FaClock className="text-3xl text-orange-500" />,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi',
      subContent: '09:00 - 18:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="dikisbg shadow-2xl py-20 pt-60 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(249,115,22,0.5)'}}>
            Konum ve İletişim
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Bize ulaşın, size en yakın şekilde hizmet verelim
          </p>
        </div>
      </section>

         {/* Quick Contact Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-white text-2xl" />
              <div>
                <p className="text-white/80 text-sm">Hemen Arayın</p>
                <a href="tel:+905071499553" className="text-white font-bold text-lg hover:text-orange-200 transition-colors">
                  +90 507 149 95 53
                </a>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-white text-2xl" />
              <div>
                <p className="text-white/80 text-sm">WhatsApp ile Yazın</p>
                <a href="https://wa.me/905071499553" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-orange-200 transition-colors">
                  Mesaj Gönderin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



  {/* Map and Info Section */}
      <section className="container mx-auto px-4 pb-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236777.52755573596!2d28.869634!3d41.097428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1ebb1db9b97%3A0x2c505a84d26684a8!2zU0VSTUFLIE1BS8SwTkEgRU5Ew5xTVFLEsFlFTCBURUtTVMSwTCBTxLBTVEVNTEVSxLA!5e1!3m2!1str!2str!4v1759582422789!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-500 to-orange-600">
              <h3 className="text-white font-bold text-xl mb-2">Mağazamızı Ziyaret Edin</h3>
              <p className="text-white/90">Sultanbeyli'nde bulunan mağazamızda tüm ürünlerimizi yerinde inceleyebilirsiniz.</p>
            </div>
          </div>

          {/* Contact Form / Info */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
            
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-orange-600 mb-3">Mağaza Ziyareti</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sultanbeyli'nde bulunan mağazamızda dikiş makinaları, ütü makinaları ve yedek parçalarımızı 
                  yakından inceleyebilir, uzman ekibimizden detaylı bilgi alabilirsiniz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-gray-700 mb-3">Online iletişim</h3>
                <p className="text-gray-600 mb-4">
                  tüm soru ve siparişleriniz için bize ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+905071499553"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    <FaPhone className="inline mr-2" />
                    Hemen Ara
                  </a>
                  <a 
                    href="https://wa.me/905071499553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    <FaWhatsapp className="inline mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg text-gray-700 mb-3">Sosyal Medya</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/sermak_makina/" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/sermak.utu.1" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="https://wa.me/905071499553" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-gray-700 hover:text-orange-500 font-medium transition-colors block">
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-700 font-medium">{info.content}</p>
              )}
              {info.subContent && (
                <p className="text-gray-500 text-sm mt-1">{info.subContent}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Mağazanız nerede bulunuyor?</h3>
              <p className="text-gray-600">Mağazamız İstanbul, Sultanbeyli'nde bulunmaktadır. Yukarıdaki haritadan detaylı konumumuzu görebilirsiniz.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Çalışma saatleriniz nedir?</h3>
              <p className="text-gray-600">Pazartesi - Cumartesi günleri 09:00 - 18:00 saatleri arasında hizmet vermekteyiz. Pazar günleri kapalıyız.</p>
            </div>
           
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Konum;