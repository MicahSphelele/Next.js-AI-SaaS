"use client";

import Heading from "@/components/heading";

import { Music } from "lucide-react";

const MusicGenerationPage = () => {

    return (
        <div>
            <Heading
                title="Music Generation"
                description="Our most advanced music generation model."
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10" />

                <div className="px-4 lg:px-4">

                </div>
        </div>
    )
}

export default MusicGenerationPage;