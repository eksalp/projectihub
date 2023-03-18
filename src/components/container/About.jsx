import React from 'react';
import about from '../../assets/iiyuu.png';

const About = () => {
  return (
    <div className="container mx-auto py-10 px-6" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Mengapa <br />
            <span className="text-[#ff0000]">OTOranger</span>?
          </div>
          <p className="text-sm text-justify text-gray leading-7 mb-4">
            OTOranger merupakan sebuah layanan aplikasi yang mengatasi permasalahan darurat pada pengendara. OTOranger menyediakan berbagai macam layanan dan fitur yang dapat digunakan oleh pengendara melalui platform aplikasi OTOranger.
            OTOranger bekerjasama dengan mitra bengkel dengan kualitas yang sudah kami uji sesuai standard sehingga pengguna akan merasakan pegalaman terbaik bersama para ranger.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray hover:border-[#ff0000] hover:text-[#ff0000] rounded-lg font-bold">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
