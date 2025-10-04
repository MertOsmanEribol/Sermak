import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaCheckCircle, FaPhone, FaEnvelope, FaTools, FaCog, FaShippingFast, FaUserTie } from 'react-icons/fa';

function Fabrika() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: 'fabrika/fabrika1.jpg', title: 'Dikiş Bölümü kurulum' },
    { id: 2, src: 'fabrika/fabrika2.jpg', title: 'Ütü Bölümü Kurulum' },
    { id: 3, src: 'fabrika/fabrika3.jpg', title: 'Kazan Kurulum' },
    { id: 4, src: 'fabrika/fabrika4.jpg', title: 'Uzman tarafından Kurulum ve Test' },
    { id: 5, src: 'fabrika/fabrika5.jpg', title: 'Çalışma alanı Kurulumu' },
    { id: 6, src: 'fabrika/fabrika6.jpg', title: 'Paskaralar ve Sistem Kurulumu' },
  ];

  const services = [
    {
      icon: <FaTools className="text-4xl text-orange-500" />,
      title: 'Profesyonel Kurulum',
      desc: 'Uzman ekibimiz ile eksiksiz ve hızlı kurulum hizmeti'
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: 'Teknik Destek',
      desc: '7/24 teknik destek ve bakım hizmetleri'
    },
    {
      icon: <FaShippingFast className="text-4xl text-orange-500" />,
      title: 'Hızlı Teslimat',
      desc: 'Türkiye geneli hızlı ve güvenli teslimat'
    },
    {
      icon: <FaUserTie className="text-4xl text-orange-500" />,
      title: 'Eğitim Desteği',
      desc: 'Uzmanlarımız tarafından kurulum bilgilendirilmesi'
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
            Fabrika Kurulum Hizmetleri
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            A'dan Z'ye eksiksiz fabrika kurulum çözümleri ile yanınızdayız
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">30+ Yıllık Deneyim</h3>
                <p className="text-white/90 text-sm">Sektörde güvenilir isim</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">100+ Tamamlanmış Proje</h3>
                <p className="text-white/90 text-sm">Başarılı kurulumlar</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">%100 Müşteri Memnuniyeti</h3>
                <p className="text-white/90 text-sm">Kaliteli hizmet garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Fabrika Kurulum Hizmetlerimiz
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-orange-500">Sermak Makina</strong> olarak, 1992 yılından bu yana tekstil sektöründe faaliyet gösteren firmamız, 
                profesyonel fabrika kurulum hizmetleri sunmaktadır. Sektördeki uzun yıllara dayanan deneyimimiz ve 
                uzman kadromuz ile işletmenizin ihtiyaçlarına özel çözümler üretiyoruz.
              </p>
              <p>
                Fabrika kurulum sürecinde, ön keşif ve planlama aşamasından başlayarak, makina seçimi, yerleşim planı, 
                montaj, devreye alma ve personel eğitimi dahil olmak üzere tüm aşamalarda profesyonel destek sağlıyoruz.
              </p>
              <p>
                Modern teknoloji ile donatılmış makinalarımız ve eksiksiz servis hizmetlerimiz sayesinde, 
                üretim kalitenizi artırırken maliyetlerinizi optimize ediyoruz. Her ölçekteki işletmeye uygun, 
                esnek ve ekonomik çözümler sunarak iş ortaklarımızın başarısına katkıda bulunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-orange-600 mb-3">Hizmet Kapsamımız</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Proje danışmanlığı ve planlama</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Makina ve ekipman tedariki</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Profesyonel montaj hizmetleri</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Test ve devreye alma</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-gray-700 mb-3">Ek Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Personel eğitim programları</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Bakım ve onarım desteği</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Yedek parça temini</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>7/24 teknik destek hattı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Referans Projelerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-video overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-orange-500 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <h3 className="text-white text-center text-xl font-bold mt-4">{selectedImage.title}</h3>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fabrika Kurulum Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size özel çözümler üretmek için hazır. Detaylı bilgi ve teklif için bize ulaşın.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905071499553"
              className="flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaPhone />
              <span>+90 507 149 95 53</span>
            </a>
            
            <a
              href="mailto:slck.sermak@gmail.com"
              className="flex items-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaEnvelope />
              <span>E-posta Gönder</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Fabrika;