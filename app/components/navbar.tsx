import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary z-50">
      <div className="max-w-8xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-32 md:w-72 md:h-32">
            <Image
              src="/assets/logo.png"
              alt="Souljier Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Icons */}
          {/* <div className="flex items-center gap-6">
            <button
              aria-label="Search"
              className="text-secondary transition-colors"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              aria-label="Shopping Cart"
              className="text-secondary transition-colors"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;