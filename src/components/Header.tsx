// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo or Name */}
        <div className="text-4xl font-bold text-red-500">
          <Link href="/"> AK Cosmetic Brand</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About Us
          </Link>
          <Link href="/products" className="hover:text-red-500">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
