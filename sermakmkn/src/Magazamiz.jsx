import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaMapMarkerAlt, FaClock, FaPhone, FaTimes } from 'react-icons/fa';

function Magazamiz() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: 'magazamiz/magaza1.jpg', title: 'Mağaza Girişi' },
    { id: 2, src: 'magazamiz/magaza2.jpg', title: 'Dikiş Makinaları Bölümü' },
    { id: 3, src: 'magazamiz/magaza3.jpg', title: 'Ütü Makinaları' },
    { id: 4, src: 'magazamiz/magaza4.jpg', title: 'Yedek Parça Reyonu' },
    { id: 5, src: 'magazamiz/magaza5.jpg', title: 'Showroom' },
    { id: 6, src: 'magazamiz/magaza6.jpg', title: 'Servis Bölümü' },
    { id: 7, src: 'magazamiz/magaza7.jpg', title: 'Ürün Teşhiri' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="dikisbg shadow-2xl py-20 pt-60 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(249,115,22,0.5)'}}>
            Mağazamız
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Sultanbeyli'nde bulunan showroom'umuzda bizi ziyaret edin
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">Adres</h3>
                <p className="text-white/90 text-sm">Sultanbeyli, İstanbul</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaClock className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">Çalışma Saatleri</h3>
                <p className="text-white/90 text-sm">Pzt-Cmt: 09:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-white text-3xl" />
              <div>
                <h3 className="text-white font-bold text-lg">Telefon</h3>
                <p className="text-white/90 text-sm">+90 507 149 95 53</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Store */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Showroom'umuz Hakkında
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              İstanbul Sultanbeyli'nde bulunan <strong className="text-orange-500">Sermak Makina</strong> showroom'unda, 
              geniş ürün yelpazemizi yakından inceleme fırsatı bulabilirsiniz.
            </p>
            <p>
              Mağazamızda profesyonel dikiş makinaları, endüstriyel ütü makinaları, yedek parçalar ve tekstil 
              ekipmanları sergilenmektedir. Uzman ekibimiz, ürünlerimiz hakkında detaylı bilgi vermekte ve 
              ihtiyacınıza en uygun çözümü bulmanızda size yardımcı olmaktadır.
            </p>
            <p>
              Randevu alarak veya direkt olarak mağazamızı ziyaret edebilir, ürünlerimizi test edebilir 
              ve teknik özellikler hakkında bilgi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Mağaza Fotoğrafları
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Büyüt
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
          >
            <FaTimes className="text-4xl" />
          </button>
          <div className="relative max-w-6xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Visit CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mağazamızı Ziyaret Edin
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ürünlerimizi yerinde görmek ve test etmek için showroom'umuza bekleriz
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905071499553"
              className="flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaPhone />
              <span>Randevu Al</span>
            </a>
            
            <a
              href="/konum"
              className="flex items-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaMapMarkerAlt />
              <span>Konumu Gör</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Magazamiz;