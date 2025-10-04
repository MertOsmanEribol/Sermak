import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaSearch, FaFilter, FaPhone, FaEnvelope } from 'react-icons/fa';

function Dikis() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ['Tümü', 'Düz Dikiş', 'Overlok', 'Reçme', 'Zikzak', 'Özel Makina'];

  const machines = [
    {
      id: 1,
      name: 'TYPICAL GT 6430 DAT Serisi ',
      category: 'Zikzak',
      image: 'dikis/1.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ["Programlanabilir İlik Ucu Punteriz Makinası","Mükemmel punteriz dikiş kalitesi", " Dokunmatik Kontrol Paneli" ]
    },
    {
      id: 2,
      name: 'TYPICAL GK 31500 D3 Serisi ',
      category: 'Reçme',
      image: 'dikis/4.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ["Direct Drive Elektrikli İplik Kesicili Otomatik Reçme Makinası", 'Güçlü direct drive motor sistemi, düşük vibrasyon ve titreşim', 'İğne pozisyonu ve iğne mili konumunda bulunan led aydınlatma sistemi']
    },
    {
      id: 3,
      name: 'Typical GC-5490-7 serisi  Düz Dikiş',
      category: 'Düz Dikiş',
      image: 'dikis/7.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Ayak Transportlu ', 'Güçlü direct drive motor', 'Açık kartel yağlama sistemi']
    },
    {
      id: 4,
      name: 'Typical GN-7100-5/D3 serisi Overlok Makinesi',
      category: 'Overlok',
      image: 'dikis/14.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Otomatik 5 iplik', '-Ergonomik tasarım yüksek devirli sessiz ve titreşimsiz çalışma', 'Devir hızı ve iğne poziyonu ayarlanabilir tam otomatik yağlama sistemi']
    },
    {
      id: 5,
      name: 'TYPICAL GK 0056A -D1 Direct Drive serisi Düz Dikiş',
      category: 'Düz Dikiş',
      image: 'dikis/19.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Yüksek verimlilik sessiz ve titreşimsiz çalışma', '2 İğne 4 iplik zincir dikiş makinesi', ' direct drive motor tam otomatik açık kartel yağlama sistemi ']
    },
    {
      id: 6,
      name: 'Typical TC 131B-3020C serisi Desen İşleme Makinası ',
      category: 'Özel Makina',
      image: 'dikis/29.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Dokunmatik ekran sayesinde desen oluşturma ve desen değiştirme özelliği', 'Programlanabilir baskı ayağı yüksekliği', 'Tam otomatik yağlama sistemi maks. 3.000 Devir dk']
    },
     {
      id: 7,
      name: 'TYPICAL GC 2263L14 - D2T3 serisi Düz Dikiş',
      category: 'Düz Dikiş',
      image: 'dikis/30.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Güçlü Direct Drive Motor ', '» 36 Cm Fleto Genişliği ', ' Büyük mekik ve çağanoz sayesinde daha az masura değişimi ( standart masuraya göre % 40 daha fazla masura kapasitesi )']
    },
     {
      id: 8,
      name: 'Typical GC 6890 MD4 serisi Düz Dikiş',
      category: 'Düz Dikiş',
      image: 'dikis/27.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Tam otomatik yağlama sistemi Açık kartel.', ' Ergonomik yapı ve yüksek devirli dikiş makinesi, Geliştirilen teknoloji ile daha sessiz ve titreşimsiz çalışma. ', '  Entegre masura sarma sistem ve Entegre led aydınlatma, Hızlı Usb Şarz girişi ve program yükleme noktası ']
    },
     {
      id: 9,
      name: 'Typical GN-798C-5D3 5 serisi Overlok Makinesi',
      category: 'Overlok',
      image: 'dikis/12.jpeg',
      price: 'Fiyat için iletişime geçin',
      features: ['Direct Drive Motor', '4 İplik', ' Elektonik Transportlu']
    }
  ];

  const filteredMachines = machines.filter(machine => {
    const matchesCategory = selectedCategory === 'Tümü' || machine.category === selectedCategory;
    const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination hesaplamaları
  const totalPages = Math.ceil(filteredMachines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMachines = filteredMachines.slice(startIndex, endIndex);

  // Sayfa değiştiğinde yukarı scroll
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Filtre değiştiğinde sayfa 1'e dön
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="dikisbg shadow-2xl py-20 pt-60 relative">
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(249,115,22,0.5)'}}>
            Dikiş Makinaları
          </h1>
          <p className="text-lg md:text-xl font-bold text-orange-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
            Profesyonel ve endüstriyel dikiş makinaları ile üretim kalitenizi artırın
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Makina ara..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FaFilter className="text-orange-500 hidden md:block" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full md:w-auto px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none cursor-pointer transition-colors"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMachines.map(machine => (
            <div
              key={machine.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {machine.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {machine.name}
                </h3>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-bold text-orange-500 mb-4">
                  {machine.price}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Detaylar
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-xl transition-all duration-300">
                    <FaPhone />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMachines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinize uygun makina bulunamadı.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredMachines.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              Önceki
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 cursor-pointer py-2 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === index + 1
                    ? 'bg-orange-500 text-white shadow-lg scale-110'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 cursor-pointer rounded-lg font-semibold transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              Sonraki
            </button>
          </div>
        )}
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aradığınız Makinayı Bulamadınız mı?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tüm makina modellerimiz ve detaylı bilgi için bizimle iletişime geçin
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

export default Dikis;