import Hero from "@/components/Hero";
import Link from "next/link";



export default function Home() {
  return (
    <div> 
      <h2 className="text-4xl font-semibold text-center">Welcome to Our Cosmetic Store</h2>
      <p className="mt-4 text-lg text-center text-[maroon]" >Explore a wide range of high-quality beauty products designed for every skin type.</p>
    <Hero/>
    {/* Link to About Us Page */}
    <Link href="/about">
      </Link>

        {/* Link to Products Page */}
        <Link href="/products">
        </Link>
    
    </div>
  );
}
