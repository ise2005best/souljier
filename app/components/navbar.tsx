import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary z-50">
      <div className="max-w-8xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-32 md:w-72 md:h-64">
            <Image
              src="/assets/logo.png"
              alt="Souljier Logo"
             width={400}
             height={400}
              className="object-contain w-full h-full"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;