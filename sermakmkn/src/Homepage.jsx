import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["img1/3.jpg", "img1/4.jpg", "img1/5.jpg"];
  
  const slides = [
    {
      image: "img1/3.jpg",
      buttons: [{ text: "Dikiş Makinaları", link: "Dikis" }]
    },
    {
      image: "img1/4.jpg",
      buttons: [{ text: "Ütü Makinaları", link: "Utu" }]
    },
    {
      image: "img1/5.jpg",
      buttons: [
        { text: "Yedek Parçalar", link: "Yedekparca" },
        { text: "Fabrika Kurulum", link: "Fabrika" }
      ]
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, );

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* Carousel */}
        <div className="relative h-full">
          {slides.map((slide, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={slide.image} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              
              {/* Overlay Buttons */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center space-y-6">
                  {/* Welcome Text */}
                  <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                      SERMAK MAKİNA
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow-lg mb-2">
                      Kaliteli Makinalar, Güvenilir Hizmet
                    </p>
                    <p className="text-base md:text-lg text-white/80 drop-shadow-lg">
                      1992'den beri sektörün güvenilir adresi
                    </p>
                  </div>
                  
                  {/* Category Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {slide.buttons.map((button, buttonIdx) => (
                      <a
                        key={buttonIdx}
                        href={button.link}
                        className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/25 min-w-[200px] text-center"
                      >
                        <span className="relative z-10">{button.text}</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 flex items-center justify-center">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 flex items-center justify-center">
            <FaChevronRight />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-orange-500 scale-125 shadow-lg" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Category Pills & Video */}
      <div className="lg:hidden container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-3 mb-6">
  <Link to="/Dikis" className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 px-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
    Dikiş Makinaları
  </Link>
  <Link to="/Utu" className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 px-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
    Ütü Makinaları
  </Link>
  <Link to="/Yedekparca" className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 px-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
    Yedek Parça
  </Link>
  <Link to="/Fabrika" className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 px-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
    Fabrika Kurulum
  </Link>
</div>

        <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
          <video className="w-full h-full object-cover" controls autoPlay muted loop>
            <source src="img1/vid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Experience Banner */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              20 Yıllık Deneyim ve Güven ile Hizmetinizdeyiz
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Lütfen mail ve telefon yolu ile iletişime geçiniz
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 hover:bg-white/25 transition-all duration-300">
                <FaEnvelope className="text-white text-lg" />
                <span className="text-white font-medium">slck.sermak@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 hover:bg-white/25 transition-all duration-300">
                <FaWhatsapp className="text-white text-lg" />
                <span className="text-white font-medium">+90 507 149 95 53</span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <div className="text-sm text-white/80">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-white/80">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/80">Destek Hizmeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "Videolar", img: "img3/2.jpg", desc: "Fabrika kurulumlarımız ve makinalarımız hakkında videolarımıza bu bölümden ulaşabilirsiniz", link: "#" },
      { title: "Mağazamız", img: "img3/1.jpg", desc: "Sultanbeyli'nde bulunan Sermak mağazamıza online bir ziyaret gerçekleştirebilirsiniz. Ütü ve dikiş makinalarımızın, yedek parçalarımızın bulunduğu mağazamız.", link: "/Magazamiz" },
      { title: "Hakkımızda", img: "img3/3.png", desc: "1992 yılında kurulan Sermak Makina, günümüzde Sultanbeyli'nde bulunan mağazı ile birlikte sektördeki bilinen ve güvenilen mağazalardan biri olmuştur...", link: "/hakkimizda" },
    ].map((card, idx) => (
      <div key={idx} className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 group">
        <div className="aspect-video overflow-hidden">
          <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{card.desc}</p>
          <a href={card.link} className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 hover:shadow-lg text-center">
            Ziyaret et
          </a>
        </div>
      </div>
    ))}
  </div>
</div> 

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Homepage;