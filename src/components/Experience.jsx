import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
    // Scroll tracking and animations for both images and text
    const imageVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        {/* Left Side: Image */}
                        <motion.div
                            className="w-full lg:w-1/4"
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariants}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <img
                                src={experience.image}
                                alt={experience.role}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </motion.div>

                        {/* Right Side: Text */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            initial="hidden"
                            whileInView="visible"
                            variants={textVariants}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
