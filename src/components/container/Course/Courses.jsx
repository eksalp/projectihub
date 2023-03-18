import React from 'react';
import { categories } from '../../../Data';
import { courses } from '../../../Data';
import Categories from './Categories';
import Course from './Course';
import { motion } from 'framer-motion';
// import { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Courses = () => {
  // const options = [
  //   { label: 'Surakarta', value: 'surakarta' },
  //   { label: 'Klaten', value: 'klaten' },
  //   { label: 'Boyolali', value: 'boyolali' },
  //   { label: 'Sukoharjo', value: 'sukoharjo' },
  //   { label: 'Wonogiri', value: 'wonogiri' },
  //   { label: 'Karanganyar', value: 'karanganyar' },
  // ];
  // const Select = ({ options, onChange }) => {
  //   return (
  //     <select className="block w-full px-4 py-2 border border-[#ff0000] bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onChange={onChange}>
  //       {options.map((option) => (
  //         <option key={option.value} value={option.value}>
  //           {option.label}
  //         </option>
  //       ))}
  //     </select>
  //   );
  // };

  // const [selectedOption, setSelectedOption] = useState('');

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  return (
    <div className="container mx-auto py-10 px-6" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Fitur dan Layanan <span className="text-[#ff0000]">OTOranger</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">Nikmatilah fitur dan layanan di OTOranger untuk membantu kendala kamu saat berkendara. Ranger akan siap untuk membantu mengatasi kendala kendaraanmu.</p>
      </div>
      <motion.div initial="hidden" whileInView="visible" className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">
        Mitra <span className="text-[#ff0000]">OTOranger</span>
      </div>
      <div className="mt-5">
        <Menu>
          <MenuButton bg="white" color="#ff0000" as={Button} rightIcon={<ChevronDownIcon />}>
            Pilih Kota...
          </MenuButton>
          <MenuList>
            <MenuItem>Surakarta</MenuItem>
            <MenuItem>Klaten</MenuItem>
            <MenuItem>Karanganyar</MenuItem>
            <MenuItem>Wonogiri</MenuItem>
            <MenuItem>Sukoharjo</MenuItem>
            <MenuItem>Boyolali</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton m={2} bg="white" color="#ff0000" as={Button} rightIcon={<ChevronDownIcon />}>
            Pilih Kendaraan...
          </MenuButton>
          <MenuList>
            <MenuItem>Motor</MenuItem>
            <MenuItem>Mobil</MenuItem>
          </MenuList>
        </Menu>
        <Button color="white" bg="#ff0000">
          Cari
        </Button>
      </div>
      {/* <div className="p-4 mt-10">
        <Select options={options} onChange={handleChange} />
      </div>
      <div className="text-center text-[#ff0000] text-lg text-bold mt-3">{selectedOption}</div> */}
      <div className="mt-6 overflow-x-hidden w-full relative">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
