import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-orange-500">Hizmetlerimiz</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={closeMenu}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <Link
                  to="/Homepage"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  <FaHome className="mr-3" /> Anasayfa
                </Link>
                <Link
                  to="/Hakkimizda"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  <FaInfoCircle className="mr-3" /> Hakkımızda
                </Link>
                <Link
                  to="/Konum"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  <FaMapMarkerAlt className="mr-3" /> Konum
                </Link>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Hizmetlerimiz
              </h3>
              <div className="space-y-2">
                <Link to="/Dikis" className="block p-3 hover:bg-gray-100 border-l-4 border-transparent hover:border-orange-500 rounded-lg" onClick={closeMenu}>
                  Dikiş Makinaları
                </Link>
                <Link to="/Utu" className="block p-3 hover:bg-gray-100 border-l-4 border-transparent hover:border-orange-500 rounded-lg" onClick={closeMenu}>
                  Ütü Makinaları
                </Link>
                <Link to="/Yedekparca" className="block p-3 hover:bg-gray-100 border-l-4 border-transparent hover:border-orange-500 rounded-lg" onClick={closeMenu}>
                  Yedek Parça
                </Link>
                <Link to="/Fabrika" className="block p-3 hover:bg-gray-100 border-l-4 border-transparent hover:border-orange-500 rounded-lg" onClick={closeMenu}>
                  Fabrika Kurulum
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-orange-500 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center lg:justify-between">
            <Link to="/Homepage">
              <div className="flex items-center space-x-4">
                <span className="hidden lg:block text-white text-xl font-bold">
                  SERMAK
                </span>
                <img
                  src="sermak-logo.png"
                  alt="Sermak Logo"
                  className="w-24 h-24 lg:w-24 lg:h-24"
                />
                <span className="hidden lg:block text-white text-xl font-bold">
                  MAKİNA
                </span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden right-5 absolute text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-5">
              <div className="flex space-x-6">
                <Link to="/Dikis" className="text-white hover:text-orange-500 font-semibold">
                  Dikiş Makinaları
                </Link>
                <Link to="/Utu" className="text-white hover:text-orange-500 font-semibold">
                  Ütü Makinaları
                </Link>
                <Link to="/Yedekparca" className="text-white hover:text-orange-500 font-semibold">
                  Yedek Parça
                </Link>
                <Link to="/Fabrika" className="text-white hover:text-orange-500 font-semibold">
                  Fabrika Kurulum
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link to="/Iletisim" className="text-white hover:text-orange-500 flex items-center">
                  <FaInfoCircle className="mr-2" /> İletişim
                </Link>
                <Link to="/Konum" className="text-white hover:text-orange-500 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Konum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;