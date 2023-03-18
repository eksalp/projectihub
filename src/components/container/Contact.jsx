import React from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-6" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">Hubungi Kami</div>
        <p className="text-sm leading-7 text-gray">Jika anda mengalami kendala atau membutuhkan informasi lebih lanjut mengenai OTOranger, dapat mengirimkan email anda di bawah</p>
        <motion.form initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-5">
          <input type="text" placeholder="Tulis Email Anda" className="rounded-tl-md rounded-tb-md sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60" />
          <button className="rounded-tr-md rounded-br-md text-sm text-white bg-[#ff0000] sm:p-3 p-2 shadow-md font-bold">Kirim</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
