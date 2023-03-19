import React from 'react';
import teacher1 from '../../assets/iiyuuu.png';
import teacher2 from '../../assets/iiyu.png';
import p from '../../assets/p.png';
import pp from '../../assets/pp.png';
import ppp from '../../assets/ppp.png';
import { accordions } from '../../Data';
import Accordion from './Accordion';

const Teacher = () => {
  return (
    <div className="container mx-auto py-10 px-6" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="md:pb-10">
          <div className="pb-5 justify-center flex md:w-3/4 sm:row-start-1">
            <img src={teacher1} alt="" />
          </div>{' '}
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">Kendaraan juga perlu kasih sayang..</div>
          <p className="text-sm leading-7 text-gray mb-5 text-justify">
            Melakukan mobilitas dengan cepat tentu mempengaruhi produktivitas dan efisiensi dalam bekerja. Kendaraan menjadi salah satu faktor mobilitas seseorang untuk melakukan berbagai pekerjaan di tempat yang berbeda-beda dengan cepat.
            Kendaraan yang kita pakai sehari-hari perlu kita perhatikan kondisinya. Berikut tips untuk merawat kendaraan kesayangan anda agar siap selalu mendukung mobilitas Anda....
          </p>
          <button className="px-6 py-3 font-bold text-white bg-[#ff0000] rounded-lg mr-4 text-sm">Lihat Selengkapnya</button>
        </div>

        <div>
          <div className="flex justify-center text-center p-4 md:w-3/4">
            <img src={teacher2} alt="" />
          </div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">Tips Aman Berkendara Saat Mudik Lebaran 2023</div>
          <p className="text-sm leading-7 text-gray mb-5 text-justify">
            Libur Lebaran menjadi momen menarik dan berharg bagi masyarakat khususnya mereka yang tinggal di perkotaan. Libur lebaran menjadi momen untuk berkumpul bersama seluruh anggota keluarga untuk merayakan Hari Raya Lebaran.
            Masyarakt pun antusias untuk Mudik ke kampung halamannya dengan menggunakan kendaraan pribadi. Agar perjalanan menjadi nyaman dan aman, kendaraan yang akan digunakan untuk Mudik perlu di cek kondisinya. Berikut Tips dari
            OTOranger dalam melakukan pengecekkan kendaraan....
          </p>
          <button className="px-6 py-3 font-bold text-white bg-[#ff0000] rounded-lg mr-4 text-sm">Lihat Selengkapnya</button>
        </div>
      </div>
      <div id="faq" className="mt-20 text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently Asked<span className="text-[#ff0000]"> Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
      <div className="bg-[#ff0000] rounded-xl md:mt-7 grid sm:grid-cols-2 place-items-center gap-8 py-5 ">
        <div className="md:pl-1 pl-5 pt-8">
          <div className="text-white font-bold sm:text-[20px] text-[24px] mb-5">
            Bantuan Darurat di Aplikasi OTOranger <br /> Respon Cepat, Mudah, dan Terpecaya
          </div>
          <div className="flex p-4 w-[170px] sm:row-start-1">
            <img src={pp} className="md:ml-10 ml-2" alt="" />
            <img src={ppp} alt="" />
          </div>
        </div>
        <div className="md:pl-5 pl-3 py-8 md:w-[500px] sm:row-start-1">
          <img src={p} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
