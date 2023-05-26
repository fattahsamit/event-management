/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-full carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/DDg2BCg/pexels-syed-qaarif-andrabi-12946949-Custom.jpg" className="w-full " />
                    {/* <img src="https://i.ibb.co/CVHT29H/A10.jpg" className="w-4/5 " /> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❮</a>
                        <a href="#slide2" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/WVsm3Lg/troy-t-kbi-GSJpi-TKE-unsplash-Custom.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❮</a>
                        <a href="#slide3" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/PQJZF5f/PHOTOFINE-51-compressor-Custom.jpg " className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❮</a>
                        <a href="#slide4" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/60PZsmp/pexels-pixabay-265920-Custom.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❮</a>
                        <a href="#slide1" className="bg-transparent border border-white hover:bg-slate-500 btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;