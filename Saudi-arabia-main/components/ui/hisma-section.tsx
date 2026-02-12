import Image from "next/image";
import Link from "next/link";

export default function HismaSection() {
    return (
        <section className="bg-black text-white pt-12 pb-12 md:pb-16">
            <div className="container mx-auto px-4">
                <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-sm">
                    <Image
                        src="/hisma-desert.jpg"
                        alt="Hisma desert in Saudi Arabia"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85" />

                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-10 flex items-end justify-between gap-6">
                        <div className="max-w-[640px]">
                            <p className="text-4xl md:text-6xl italic font-light tracking-wide font-serif">Hisma</p>
                            <h2 className="text-5xl md:text-7xl font-extrabold leading-none">Desert</h2>
                        </div>

                        <div className="hidden md:flex items-center gap-3 bg-black/55 backdrop-blur-sm rounded-full py-2 pl-2 pr-4">
                            <Image
                                src="/abdul.png"
                                alt="Traveler portrait"
                                width={44}
                                height={44}
                                className="rounded-full object-cover"
                            />
                            <div className="text-sm leading-tight">
                                <p className="font-semibold">Wazeem Al Mulk</p>
                                <p className="text-white/80">Traveler</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl pt-10 pb-12">
                    <p className="text-lg md:text-[32px] font-semibold leading-tight">The Hisma Desert in Saudi Arabia</p>
                    <p className="text-base md:text-2xl leading-relaxed text-white/90">
                        The Hisma Desert in Saudi Arabia is a realm of ethereal beauty that captivates the senses. Its vast expanse of golden sand dunes, sculpted by the winds of time, creates a mesmerizing landscape that stretches as far as the eye can see.
                    </p>
                </div>

                <Link
                    href="/destenations"
                    className="group relative block h-[220px] md:h-[360px] overflow-hidden rounded-sm border border-white/15"
                >
                    <Image
                        src="/explore-arabia.jpg"
                        alt="Explore Saudi Arabia"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-between">
                        <h3 className="text-4xl md:text-6xl font-bold leading-[1.02] max-w-[420px]">
                            Explore
                            <br />
                            Saudi Arabia
                        </h3>
                        <span className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-white flex items-center justify-center text-3xl md:text-4xl">
                            →
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
