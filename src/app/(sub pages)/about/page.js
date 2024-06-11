import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />



            <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
                <RenderModel>
                    <HatModel />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-2/3 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4">
                    <h1 className="font-bold text:4xl xs:text-4xl sm:text-5xl  lg:text-7xl text-accent whitespace-nowrap">🎨 The Artistry Glimpse 🎨</h1>
                    <p className="font-light text-foreground text-lg">Welcome to The Artistry Glimpse : where art meets inspiration, and creativity knows no bounds.</p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}
