import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    // Animation Variants for Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const leftSlideVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const rightSlideVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="border-b border-neutral-900 pb-4 lg:mb-35"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="px-8"> {/* Ensures the content aligns with the navbar */}
                <div className="flex flex-wrap">
                    {/* Left Side: Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={leftSlideVariants}
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="pb-8 text-6xl font-thin tracking-tight text-left lg:mt-20">
                                Hirusha Dheemantha
                            </h1>
                            <span className="bg-gradient-to-r from-pink-400 via-slate-300 to-slate-500 bg-clip-text text-4xl tracking-tight text-transparent text-left">
                                Full Stack Developer
                            </span>
                            <p className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Profile Image */}
                    <motion.div
                        className="w-full lg:w-1/2 lg:p-8"
                        variants={rightSlideVariants}
                    >
                        <div className="flex justify-center">
                            <img
                                src={profilePic}
                                alt="Hirusha"
                                className="rounded-lg shadow-lg" // Optional: Adds some styling
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
