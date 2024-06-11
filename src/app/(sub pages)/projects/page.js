import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";


export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

            <ProjectList projects={projectsData} />

            <div className="flex justify-center items-center fixed  top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}
