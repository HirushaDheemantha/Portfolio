import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6 px-8">
            <div className="flex items-center">
                <img src={logo} alt="Kevin Rush Logo" className="mx-2 w-10"/>
            </div>
            <div className="flex items-center gap-4 text-white text-xl">
                <FaLinkedin />
                <FaGithub />
                <FaTwitter />
                <FaInstagram />
            </div>
        </nav>
    );
};

export default Navbar;
