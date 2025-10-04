import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaAward, FaUsers, FaCog, FaHandshake, FaCheckCircle } from 'react-icons/fa';

function Hakkimizda() {
  const values = [
    {
      icon: <FaAward className="text-4xl text-orange-500" />,
      title: 'Kalite',
      desc: 'En yüksek kalite standartlarında ürün ve hizmet sunuyoruz'
    },
    {
      icon: <FaUsers className="text-4xl text-orange-500" />,
      title: 'Müşteri Odaklı',
      desc: 'Müşteri memnuniyeti her zaman önceliğimizdir'
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: 'Profesyonellik',
      desc: 'Uzman kadromuz ile profesyonel çözümler üretiyoruz'
    },
    {
      icon: <FaHandshake className="text-4xl text-orange-500" />,
      title: 'Güven',
      desc: '30 yıllık deneyimimiz ile sektörün güvenilir ismi'
    }
  ];

  const milestones = [
    { year: '1992', title: 'Kuruluş', desc: 'Sermak Makina kuruldu' },
    { year: '2000', title: 'Büyüme', desc: 'Ürün gamı genişletildi' },
    { year: '2010', title: 'Yenilik', desc: 'Modern teknolojiler entegre edildi' },
    { year: '2025', title: 'Bugün', desc: 'Sektörde bilinen ve güvenlilen bir konumda' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="dikisbg shadow-2xl py-20 pt-60 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(249,115,22,0.5)'}}>
            Hakkımızda
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            1992'den beri tekstil sektörünün güvenilir çözüm ortağı
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Hikayemiz
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-orange-500">Sermak Makina</strong>, 1992 yılında <strong>Selçuk Eribol</strong> tarafından tekstil sektörüne hizmet vermek amacıyla kurulmuştur. Kuruluşundan bu yana, sektördeki derin bilgi birikimi ve deneyimi ile müşterilerine en kaliteli ürün ve hizmetleri sunmayı ilke edinmiştir.
              </p>
              <p>
                30 yılı aşkın süredir İstanbul Sultanbeyli'nde faaliyet gösteren firmamız, dikiş makinaları, ütü makinaları, yedek parça tedariki ve fabrika kurulum hizmetleri konularında uzmanlaşmıştır. Sektördeki gelişmeleri yakından takip ederek, modern teknoloji ile donatılmış makinalar sunmaktayız.
              </p>
              <p>
                Müşteri memnuniyetini ön planda tutan anlayışımız, kaliteli ürünlerimiz ve güvenilir satış sonrası hizmetlerimiz ile tekstil sektöründe güvenilir bir marka haline geldik. Yüzlerce işletmeye hizmet veren firmamız, bugün sektörün önde gelen firmalarından biri olarak faaliyet göstermektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Değerlerimiz
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            İş yapış şeklimizi şekillendiren temel prensiplerimiz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Yolculuğumuz
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative mb-8 md:mb-12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <FaCheckCircle className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Dikiş Makinaları</h3>
              <p className="text-gray-300 text-sm">Profesyonel ve endüstriyel modeller</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <FaCheckCircle className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Ütü Makinaları</h3>
              <p className="text-gray-300 text-sm">Yüksek kaliteli ütüleme sistemleri</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <FaCheckCircle className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Yedek Parça</h3>
              <p className="text-gray-300 text-sm">Orijinal yedek parça tedariki</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <FaCheckCircle className="text-orange-500 text-3xl mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Fabrika Kurulum</h3>
              <p className="text-gray-300 text-sm">A'dan Z'ye kurulum hizmeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bizimle Çalışmaya Başlayın
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            30 yıllık deneyimimiz ve güvenilir hizmetimiz ile iş ortağınız olmaktan mutluluk duyarız
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              İletişime Geçin
            </a>
            <a
              href="/dikis"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ürünleri İnceleyin
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Hakkimizda;