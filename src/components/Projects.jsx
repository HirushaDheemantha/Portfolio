import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap items-center lg:justify-center"
                    >
                        {/* Left Side: Image */}
                        <motion.div
                            className="w-full lg:w-1/4 flex justify-center"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={project.image}
                                width={120} // Resized for smaller and proportional dimensions
                                height={120} // Resized to match width
                                alt={project.title}
                                className="mb-4 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </motion.div>

                        {/* Right Side: Text */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h6 className="mb-2 font-semibold text-center lg:text-left cursor-pointer transition-transform duration-300 ease-in-out hover:text-purple-400 hover:scale-105">
                                {project.title}
                            </h6>
                            <p className="mb-4 text-neutral-400 text-center lg:text-left">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
