import React from 'react';
import { AiOutlineUser, AiFillStar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';

const Course = ({ image, lokasi, title, participants, rating }) => {
  return (
    <div className="cursor-pointer hover:scale-105 p-2 shadow-lg min-w-[15rem] bg-white rounded-xl">
      <img className="rounded-md" src={image} alt="" />
      <div className="mt-3">
        <div className="text-sm mt-2 font-bold">{title}</div>
        <div className="flex items-center justify-between mt-3 mb-1">
          <div className="flex items-center gap-1">
            <div className=" p-[0.1px]">
              <HiLocationMarker className="text-[#ff0000]" />
            </div>
            <div className="text-xs text-[#ff0000]">{lokasi}</div>
          </div>
          <div className="flex items-center gap-1">
            <div className=" p-[0.1px]">
              <AiOutlineUser className="text-[#ff0000]" />
            </div>
            <div className="text-xs">{participants}</div>
            <div className=" p-[0.1px]">
              <AiFillStar className="text-yellow" />
            </div>
            <div className="text-xs">{rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
