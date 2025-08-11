import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { FaGithub, FaLink } from 'react-icons/fa';



export default function SwiperComponent() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch("/projects.json");
            return res.json();
        }
    })

    if (isPending) {
        return <p className="bg-red-400">Loading....</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div className='max-w-[1150px] rounded-2xl w-[80vw] min-h-[600px] flex '>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                {
                    data.map((singleData, index) => <SwiperSlide>
                        <div className='flex flex-col-reverse lg:flex-row gap-4 px-8 items-center justify-center h-full px-5'>
                            <div className='lg:w-[50%] space-y-4'>
                                <h1 className='header-text text-3xl lg:text-8xl'>0{index + 1}</h1>
                                <p className='text-xl lg:text-3xl'>{singleData.title}</p>
                                <h1 className='text-6xl header-text'>{singleData.name}</h1>
                                <p className='tlg:ext-xl'>{singleData.description}</p>
                                <p className='header-text text-[#a9927d] text-3xl font-semibold'>React, TailwindCSS, Express, MongoDB</p>
                                <div className='divider'></div>
                                <div className='flex gap-7'>
                                    <a href={singleData.github} target="_blank" className='tooltip' data-tip="Github Repo"><FaGithub size = {44}/></a>
                                    <a href={singleData.liveSite} target="_blank" className='tooltip' data-tip="Live Link"><FaLink size = {44}/></a>
                                </div>
                            </div>
                            <div className='lg:w-[40%]'>
                                <img src={singleData.image} className='rounded-3xl' alt="Project Image"/>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}
