'use client'
import Image from "next/image";
import Link from "next/link";
import { useCartUIStore } from "../store/cart-ui.store";
import CartComponent from "./cart-component";
import { IoIosSearch } from "react-icons/io";



const Navbar = () => {
  const setIsCartOpen = useCartUIStore((state) => state.openCart);
  return (
    <nav className="bg-primary z-50">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-32 md:w-72 md:h-64 px-4 md:px-8">
            <Image
              src="/assets/logo.png"
              alt="Souljier Logo"
             width={400}
             height={400}
              className="object-contain w-full h-full"
              priority
            />
          </Link>
          <div className="flex flex-row gap-2 bg-white p-1">
          <IoIosSearch width={48} height={48} className="w-6 h-6 text-secondary"/> 
          <CartComponent onclick={() => setIsCartOpen()} />
          </div>
         
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;