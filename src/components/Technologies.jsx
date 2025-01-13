import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiDocker } from "react-icons/si"; // New tech icon
import { SiPython } from "react-icons/si"; // New tech icon
import { motion, useScroll, useTransform } from "framer-motion";

const Technologies = () => {
    // Scroll tracking
    const { scrollYProgress } = useScroll();

    // Scroll animations for continuous slide to both sides
    const slideX = useTransform(scrollYProgress, [0, 1], [-600, 600]); // Adjusted for more items

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Existing Tech Icons */}
                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <TbBrandNextjs className="text-7xl text-gray-400" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <DiRedis className="text-7xl text-red-400" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <FaNodeJs className="text-7xl text-green-600" />
                </motion.div>

                {/* New Tech Icons */}
                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <SiDocker className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                    className="rounded-2xl border p-4 text-7xl text-cyan-400"
                    style={{ x: slideX }}
                >
                    <SiPython className="text-7xl text-yellow-400" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
