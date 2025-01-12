import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.jpg";

const Hero = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="px-8"> {/* Ensures the content aligns with the navbar */}
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="pb-8 text-6xl font-thin tracking-tight text-left lg:mt-20">
                                Hirusha Dheemantha
                            </h1>
                            <span className="bg-gradient-to-r from-pink-400 via-slate-300 to-slate-500 bg-clip-text text-4xl tracking-tight text-transparent text-left">
                                Full Stack Developer
                            </span>
                            <p className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</p>
                            
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                            <div className="flex justify-center">
                                <img src={profilePic} alt="Hirusha" />
                            </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
