import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-20 shrink-0 border-t border-white/10 bg-[#1f1f22] text-white">
            <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-4">
                <div>
                    <Image src="/logo.png" alt="Saudi Welcome to Arabia" width={190} height={92} />
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">About</h4>
                    <Link href="#" className="block text-white/85 hover:text-white">About us</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">Features</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">News & Blogs</Link>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Contact</h4>
                    <Link href="#" className="block text-white/85 hover:text-white">Instagram</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">Twitter</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">Facebook</Link>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Support</h4>
                    <Link href="#" className="block text-white/85 hover:text-white">FAQs</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">Support Centre</Link>
                    <Link href="#" className="block text-white/85 hover:text-white">Feedback</Link>
                </div>
            </div>
        </footer>
    );
}
