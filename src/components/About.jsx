import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
    // Refs for scroll detection
    const imageRef = useRef(null);
    const textRef = useRef(null);

    // Hook to track if elements are in view
    const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });
    const isTextInView = useInView(textRef, { once: true, margin: "-50px" });

    // Animation Variants
    const slideInVariants = {
        hidden: (direction) => ({
            x: direction === "left" ? -100 : 100,
            opacity: 0,
        }),
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About 
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                {/* Left Side: Image */}
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    ref={imageRef}
                    variants={slideInVariants}
                    initial="hidden"
                    animate={isImageInView ? "visible" : "hidden"}
                    custom="left"
                >
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-2xl shadow-lg"
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Text */}
                <motion.div
                    className="w-full lg:w-1/2"
                    ref={textRef}
                    variants={slideInVariants}
                    initial="hidden"
                    animate={isTextInView ? "visible" : "hidden"}
                    custom="right"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
