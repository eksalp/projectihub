import courses1 from './assets/courses1.png';
import courses2 from './assets/courses2.png';
import courses3 from './assets/courses3.png';
import courses4 from './assets/courses4.png';
import courses5 from './assets/courses5.png';
import courses6 from './assets/courses6.png';
import courses7 from './assets/courses7.png';
import courses8 from './assets/courses8.png';

import l1 from './assets/11.png';
import l2 from './assets/22.png';
import l3 from './assets/33.png';
import l4 from './assets/4.png';
import l5 from './assets/5.png';
import l6 from './assets/6.png';

import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
import logo6 from './assets/logo6.png';

import logoo from './assets/fixlogo.png';

export const navLinks = [
  {
    id: 1,
    href: 'home',
    link: 'Beranda',
  },
  {
    id: 2,
    href: 'about',
    link: 'Tentang Kami',
  },
  {
    id: 3,
    href: 'courses',
    link: 'Layanan',
  },
  {
    id: 4,
    href: 'faq',
    link: 'FAQ',
  },
  {
    id: 5,
    href: 'contact',
    link: 'Contact',
  },
];

export const categories = [
  {
    id: 1,
    icon: l1,
    category: 'OtoTires',
    konten:
      'OtoTires merupakan layanan panggilan yang bisa digunakan oleh konsumen untuk mengatasi permasalahan pada ban kendaraan seperti kempes, bocor, dan pecah ban.',
  },
  {
    id: 2,
    icon: l2,
    category: 'OtoFuel',
    konten:
      'OtoFuel merupakan layanan panggilan yang bisa digunakan oleh konsumen untuk mengatasi permasalahan pada kendaraan seperti kehabisan bahan bakar minyak.',
  },
  {
    id: 3,
    icon: l3,
    category: 'OtoMachine',
    konten:
      'OtoMachine terdiri dari dua layanan yakni service darurat dan service rutin. Konsumen bisa menggunakan service darurat ketika mesin kendaraan mati seketika di jalan, seperti permasalahan ringan mesin, aki, dll. Untuk service rutin, konsumen bisa menggunakan layanan tersebut untuk memanggil tim OTOranger datang ke tempat anda dan akan memeriksa serta service rutin sesuai kondisi mesin kendaraan.',
  },
  {
    id: 4,
    icon: l4,
    category: 'OtoPickup',
    konten:
      'OtoPickup merupakan sebuah layanan yang bisa konsumen gunakan untuk mengangkut atau menderek kendaraan anda yang bermasalah di jalan dan diantar ke bengkel terdekat atau ke rumah.',
  },
  {
    id: 5,
    icon: l6,
    category: 'OtoInspect',
    konten:
      'OtoInspect merupakan sebuah layanan dari OTOranger yang bisa digunakan oleh konsumen yang ingin membeli kendaraan bekas, tetapi awam terkait pemeriksaan kondisi kendaraan. Ranger memiliki kompetensi serta kahlian khusus dalam melakukan inspeksi kendaraan bekas, sehingga dapat membantu dalam memilih kendaraan impian anda.',
  },
  {
    id: 6,
    icon: l5,
    category: 'OtoTips',
    konten:
      'OtoTips merupakan layanan gratis dari OTOranger untuk menyediakan literasi seputar perawatan kendaraan anda, informasi berita terkait Automotive, Update Automotive terkini, dan sebagainya.',
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: 'Motor',
    title: 'Bengkel Barokah Motor',
    rating: 4.9,
    participants: 500,
    lokasi: 'Boyolali',
  },
  {
    id: 2,
    image: courses2,
    category: 'Motor',
    title: 'DAV Auto',
    rating: 4.8,
    participants: 700,
    lokasi: 'Klaten',
  },
  {
    id: 3,
    image: courses3,
    category: 'Mobil',
    title: 'Surya Jaya Abadi',
    rating: 4.9,
    participants: 300,
    lokasi: 'Surakarta',
  },
  {
    id: 4,
    image: courses4,
    category: 'Motor',
    title: 'Sabar Jaya Motor',
    rating: 4.7,
    participants: 600,
    lokasi: 'Surakarta',
  },
  {
    id: 5,
    image: courses5,
    category: 'Mobil',
    title: 'Budi Karya Motor',
    rating: 4.9,
    participants: 500,
    lokasi: 'Surakarta',
  },
  {
    id: 6,
    image: courses6,
    category: 'Mobil',
    title: 'CARfix Veteran',
    rating: 4.9,
    participants: 500,
    lokasi: 'Surakarta',
  },
  {
    id: 7,
    image: courses7,
    category: 'Motor',
    title: 'Dunia Motor Abadi',
    rating: 4.9,
    participants: 500,
    lokasi: 'Surakarta',
  },
  {
    id: 8,
    image: courses8,
    category: 'Mobil',
    title: 'Zaini Auto Motor',
    rating: 4.9,
    participants: 500,
    lokasi: 'Surakarta',
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
export default logoo;
export const accordions = [
  {
    id: 1,
    title: 'Apa itu OTOranger?',
    ket: 'Layanan aplikasi yang mengatasi permasalahan darurat pada pengendara dengan platform kami yang menyediakan berbagai fitur',
  },
  {
    id: 2,
    title: 'Apa saja fitur dan layanan yang disediakan oleh OTOranger?',
    ket: `OtoTire:  Layanan darurat untuk permasalahan ban kendaraan bermotor OtoFuel: Layanan darurat untuk mengatasi masalah kehabisan bahan bakar OtoPickup: Layanan darurat untuk memindahkan kendaraan OtoInspect: Layanan yang menyediakan jasa inspeksi kendaraan bekas OtoMachine: Layanan untuk memperbaiki masalah pada mesin OtoTips: Fitur yang menyediakan tips-tips yang berkaitan dengan safety riding dan berkendara`,
  },
  {
    id: 3,
    title: 'Dimana Layanan Kami Tersedia?',
    ket: 'Untuk saat ini, kami memberikan akses layanan di 6 kota besar, antara lain: Surakarta, Sukoharjo, Karanganyar, Wonogiri, Klaten, Boyolali. Kami juga akan segera menjaungkau di berbagai kota wilayah Anda.',
  },
  {
    id: 4,
    title: 'Ranger tidak menjemput namun menyelesaikan pesanan?',
    ket: 'Kami mohon maaf atas kejadian yang kamu alami, sebelum melaporkan hal ini, bila kamu memesan OtoTires, OtoFuel, OtoMachine, dan OtoPickup. Kamu bisa coba hubungi ranger terlebih dahulu dengan mengirimkan chat ke ranger sampai 2 jam setelah pesanan selesai dari halaman Riwayat Pesanan. Namun, jika ranger tidak dapat dihubungi dan tidak datang setelah kamu menunggu, kamu bisa laporkan kejadian ini kepada kami melalui halaman Bantuan',
  },
];
