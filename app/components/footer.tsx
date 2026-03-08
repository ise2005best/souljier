import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const legals = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Terms of Sale", href: "/terms-of-sale" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <footer className="bg-white text-secondary">
      <div className="border-t-2 border-secondary/30 " />
      <div className="max-w-7xl mx-auto px-6 py-2">
        {/* Top row */}
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
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 my-3" />

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 pb-3 font-primary">
          {legals.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs text-secondary/70 hover:text-secondary transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;