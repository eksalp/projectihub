import React from 'react';
import hero from '../../assets/hero.png';

const Home = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="container mx-auto pb-10 pt-24 px-6" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-[#ff0000] mb-4"> The Superhero of Your Journey</div>
          <div className="sm:text-[2.5rem] text-[1.825rem]  font-bold">
            Solusi Terbaik <br /> Untuk Perjalanan <br /> Anda
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">Temukan berbagai layanan OTOranger yang bisa kamu gunakan dalam keadaan darurat saat perjalanan.</p>
          <div className="mt-6">
            <button className="hover:scale-110 px-6 py-3 font-bold text-white bg-[#ff0000] hover:bg[#ffffff] rounded-lg mr-4 text-sm">Mulai</button>
            <button className="px-6 py-3 font-bold border border-solid border-gray hover:border-[#ff0000] hover:text-[#ff0000] rounded-lg text-sm">Jelajahi</button>
          </div>
        </div>
        <div className="md:w-[55%] md:ml-[60px]">
          <img src={hero} alt="" />
        </div>
      </div>
      {/* <div className="md:mt-10">
        <p className="text-center text-xl">
          We collaborate with <span className="text-Teal">100+ leading universities ans companies</span>
        </p>
        <motion.div initial="hidden" whileInView="visible" className="flex items-center justify-center flex-wrap gap-8 p-2">
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Home;
