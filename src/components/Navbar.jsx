import logo from '../assets/logo.jpg';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-center py-10 px-8">
            <div className="flex items-center gap-4 text-white text-xl">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/hirusha-dheemantha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-500"
                >
                    <FaLinkedin />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/HirushaDheemantha" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-500"
                >
                    <FaGithub />
                </a>

                {/* Twitter */}
                <a
                    href="https://www.facebook.com/hirusha.dheemantha.9" // Replace with your Twitter profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-blue-400"
                >
                    <FaFacebook />
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/_hirusha_dheemantha_/" // Replace with your Instagram profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-pink-400"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
