import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative z-20 shrink-0 border-t border-white/10 bg-[#1f1f22] text-white">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 gap-10 md:grid-cols-4">
                <div>
                    <Image src="/logo.png" alt="Saudi Welcome to Arabia" width={190} height={92} />
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">About</h4>
                    <p className="text-white/85">About us</p>
                    <p className="text-white/85">Features</p>
                    <p className="text-white/85">News & Blogs</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Contact</h4>
                    <p className="text-white/85">Instagram</p>
                    <p className="text-white/85">Twitter</p>
                    <p className="text-white/85">Facebook</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Support</h4>
                    <p className="text-white/85">FAQs</p>
                    <p className="text-white/85">Support Centre</p>
                    <p className="text-white/85">Feedback</p>
                </div>
            </div>
        </footer>
    );
}
