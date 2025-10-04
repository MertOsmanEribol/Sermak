import React from 'react'
import { FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    
       <footer className="bg-gray-900 text-white py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-orange-500 text-xl" />
                    <span className="text-gray-300">slck.sermak@gmail.com</span>
                  </div>
      
                  <div className="flex space-x-6">
                    <a href="https://www.instagram.com/sermak_makina/" className="text-gray-300 hover:text-orange-500 transform hover:scale-110">
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/sermak.utu.1" className="text-gray-300 hover:text-orange-500 transform hover:scale-110">
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://wa.me/905071499553" className="text-gray-300 hover:text-orange-500 transform hover:scale-110">
                      <FaWhatsapp className="text-2xl" />
                    </a>
                  </div>
      
                  <div className="text-gray-400 text-sm">
                    <span>Tüm hakları saklıdır 2025 © By Eribol</span>
                  </div>
                </div>
              </div>
            </footer>
   
  )
}

export default Footer
