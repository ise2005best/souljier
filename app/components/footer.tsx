import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const legals = [
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Terms of Service", href: "/terms-of-servicy" },
  ];

  return (
    <footer className="bg-white text-secondary">
      <div className="border-t-2 border-secondary/30 " />
      <div className="max-w-7xl mx-auto px-6 py-2">
        {/* Top row */}
        <div className="flex md:flex-row justify-between items-center gap-6 font-primary py-1">
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/souljierr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaInstagram className="md:w-6 md:h-6 h-4 w-4 text-secondary" />
            </Link>
            <Link
              href="https://www.tiktok.com/@souljierr?lang=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaTiktok className="md:w-6 md:h-6 h-4 w-4 text-secondary" />
            </Link>
            <Link
              href="https://x.com/souljierr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <FaTwitter className="md:w-6 md:h-6 h-4 w-4 text-secondary" />
            </Link>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-x-6 font-primary">
            {legals.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="md:text-xs text-[9px] text-secondary/70 hover:text-secondary transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 my-3" />
        <div className="flex items-center justify-between ">
        <a className="font-primary md:text-sm text-[9px] " href="mailto:customersupport@souljier.com">customersupport@souljier.com</a>
        <div className="flex items-center justify-end gap-3">
        <p className="md:text-sm text-[9px] font-medium font-primary">© 2026 SOULJIER</p>
          <Image
            src="/assets/LOGO26.png"
            width={40}
            height={40}
            alt="logo"
            className="object-contain md:h-10 md:w-10 h-6 w-6"
          />
        </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
