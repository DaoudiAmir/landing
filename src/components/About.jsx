import React from "react";

const About = () => {
    return (
        
        <div name='about' className="w-full my-32">
            <div className="max-w-[1024px] mx-auto">
                <div className="text-center">
                    <h2 data-aos="fade-down" data-aos-duration="500" className="text-5xl font-bold">Our Purpose</h2>
                    <p data-aos="fade-up" data-aos-duration="700" className="text-3xl py-6 text-gray-500">This platform is for graduate students who want to take their 
                    first step in the career path of technology and innovation. </p>
                </div>
                <div className="grid md:grid-cols-3 text-center gap-1 px-2">
                        <div data-aos="fade-up" data-aos-duration="1000" className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">100%</p>
                            <p className="text-gray-600 mt-2">Completion</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">24/7</p>
                            <p className="text-gray-600 mt-2">Work</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">100%</p>
                            <p className="text-gray-600 mt-2">Tracking</p>
                        </div>


                </div>
            </div>
        </div>
    )
}
export default About;