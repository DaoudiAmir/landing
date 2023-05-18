import React from "react";
import { LightBulbIcon,  ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import {ChipIcon, ViewfinderCircleIcon} from '@heroicons/react/24/solid'
import supportImg from '../assets/Support1.jpg'
const Support = () => {
    return (
        <div name="support" className="w-full  mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay "src={supportImg} alt="/"/>
            </div>
            <div className="max-w-[1024px] mx-auto text-white relative">
                    <div data-aos="fade-up" data-aos-duration="500" className="px-4 py-12">
                        <h2 className="text-3xl text-center uppercase pt-8 text-slate-300">Support</h2>
                        <h3 className="text-5xl text-center py-6 font-bold ">Finding the right team </h3>
                        <p className="py-4 text-3xl text-slate-300">Collaborate with your teammates and Supervisors to make an outstanding future </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                        <div data-aos="fade-up" data-aos-duration="2500"  className="bg-white rounded-xl shadow-2xl">
                            <div className="p-8">
                                <LightBulbIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] "/>
                                <h3 className="font-bold text-2xl my-6">Innovation </h3>
                                <p>We guide you throughout your journey to help you come up with the best ideas possible, so what are you waiting for, start taking recommendations now . </p>
                            </div>
                            <div className="bg-slate-100 pl-8 py-4">
                                <p className="flex items-center text-indigo-600">Contact Specialists <ArrowSmallRightIcon className="w-5 ml-2"/></p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" className="bg-white rounded-xl shadow-2xl">
                            <div className="p-8">
                                <ViewfinderCircleIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] "/>
                                <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                                <p>We provide beautiful team workspaces to help you collaborate with your supervisors , also including chat and much much more to explore...</p>
                            </div>
                            <div className="bg-slate-100 pl-8 py-4">
                                <p className="flex items-center text-indigo-600">Collaborate now  <ArrowSmallRightIcon className="w-5 ml-2"/></p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="500" className="bg-white rounded-xl shadow-2xl">
                            <div className="p-8">
                                <LightBulbIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] "/>
                                <h3 className="font-bold text-2xl my-6">Innovation </h3>
                                <p>Accepted projects will have the opportunity to present them in the real world , by helping you get technical and financial support from the government.</p>
                            </div>
                            <div className="bg-slate-100 pl-8 py-4">
                                <p className="flex items-center text-indigo-600">Explore More  <ArrowSmallRightIcon className="w-5 ml-2"/></p>
                            </div>
                        </div>




                    </div>


            </div>

        </div>
      )
}

export default Support;