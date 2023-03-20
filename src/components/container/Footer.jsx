import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import logooo from '../../assets/fixlogoputih.png';

const Footer = () => {
  return (
    <motion.div initial={{ height: 0 }} whileInView={{ height: 'auto' }} transition={{ duration: 0 }} className="bg-[#ff0000] p-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-10 text-white">
        <div>
          <div className="w-[150px] mb-3">
            <img src={logooo} alt="" />
          </div>
          <p className="text-sm leading-7 mb-1">Alamat Kantor: Asrama UNS, Jebres, Kota Surakarta, Jawa Tengah 57126.</p>

          <iframe
            className="rounded-xl drop-shadow-md w-[335px] md:w-[250px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.8820342388976!2d110.86591960718316!3d-7.555348502303528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a171ac7a9a63b%3A0x270a5a229ac41dbe!2sAsrama%20Mahasiswa%20UNS!5e0!3m2!1sen!2sid!4v1676935833415!5m2!1sen!2sid"
            height="200"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="font-bold mb-6">Layanan</div>
          <div className="flex flex-col gap-4">
            <a href="#courses" className="text-sm hover:underline">
              OtoTires
            </a>
            <a href="#courses" className="text-sm hover:underline">
              OtoFuel
            </a>
            <a href="#courses" className="text-sm hover:underline">
              OtoMachine
            </a>
            <a href="#courses" className="text-sm hover:underline">
              OtoPickup
            </a>
            <a href="#courses" className="text-sm hover:underline">
              OtoInspect
            </a>

            <a href="#courses" className="text-sm hover:underline">
              OtoTips
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Perusahaan</div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm hover:underline">
              Layanan
            </a>
            <a href="#" className="text-sm hover:underline">
              Mitra Usaha
            </a>
            <a href="#" className="text-sm hover:underline">
              Bantuan
            </a>
            <a href="#" className="text-sm hover:underline">
              Syarat dan Ketentuan
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Ikuti kami</div>
          <a href="mailto:otorangerofc@gmail.com">
            <div className="text-sm mb-4">otorangerofc@gmail.com</div>
          </a>
          <a href="https://wa.me/085173151862">
            <div className="text-sm">+62 851-7315-1862</div>
          </a>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/6285173151862" className="hover:scale-110 text-xl">
              <RiWhatsappFill />
            </a>
            <a href="https://instagram.com/otorangerofficial" className="hover:scale-110 text-xl">
              <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100089873405579" className="hover:scale-110 text-xl">
              <FaFacebookSquare />
            </a>
            <a href="https://www.tiktok.com/@otorangerofficial?_t=8anXWl9X37R&_r=1" className="hover:scale-110 text-xl">
              <FaTiktok />
            </a>
            <a href="mailto:otorangerofc@gmail.com" className="hover:scale-110 text-xl">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="text-white justify-center text-center text-sm">Copyright © 2023 OTOranger. All Rights Reserved</div>
    </motion.div>
  );
};

export default Footer;
