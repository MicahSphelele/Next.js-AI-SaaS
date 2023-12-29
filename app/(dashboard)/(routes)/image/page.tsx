"use client";

import Heading from "@/components/heading";

import { ImageIcon } from "lucide-react";

const ImageGenerationPage = () => {

    return (
        <div>
            <Heading
                title="Image Generation"
                description="Our most advanced image generation model."
                icon={ImageIcon}
                iconColor="text-pink-700"
                bgColor="bg-pink-700/10" />

                <div className="px-4 lg:px-4">

                </div>
        </div>
    );
}

export default ImageGenerationPage;