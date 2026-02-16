import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex md:flex-row justify-between items-center gap-6 font-primary">
             <div className="flex gap-4">
            <Link 
              href="https://www.instagram.com/souljierr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaInstagram className="w-6 h-6 text-secondary" />
            </Link>
            <Link 
              href="https://www.tiktok.com/@souljierr?lang=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaTiktok className="w-6 h-6 text-secondary" />
            </Link>
            <Link 
              href="https://x.com/souljierr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaTwitter className="w-6 h-6 text-secondary" />
            </Link>
          </div>
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
              <p className="md:text-sm text-xs font-medium">© 2026 SOULJIER</p>
            <Image
              src="/assets/LOGO26.png"
              width={40}
              height={40}
              alt="logo"
              className="object-contain h-10 w-10"
            />
          
          </div>

          {/* Social Links */}
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;