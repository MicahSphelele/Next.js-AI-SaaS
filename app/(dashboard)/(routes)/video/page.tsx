"use client";

import Heading from "@/components/heading";

import { VideoIcon } from "lucide-react";

const VideoGenerationPage = () => {

    return (
        <div>
            <Heading
                title="Video Generation"
                description="Our most advanced video generation model."
                icon={VideoIcon}
                iconColor="text-orange-700"
                bgColor="bg-orange-700/10" />

                <div className="px-4 lg:px-4">

                </div>
        </div>
    );
}

export default VideoGenerationPage;