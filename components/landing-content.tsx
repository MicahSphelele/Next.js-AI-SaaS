"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Sphelele",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I've used!"
    },
    {
        name: "Cali",
        avatar: "C",
        title: "Product Owner",
        description: "This is the best application I've ever used in my life!"
    },
    {
        name: "Micah",
        avatar: "M",
        title: "Solutions Engineer",
        description: "This is the best application to use!"
    },
    {
        name: "Maggie",
        avatar: "M",
        title: "Backend Engineer",
        description: "This is the best application I would not want to stop using!"
    },
    {
        name: "Roger",
        avatar: "R",
        title: "Front-End Engineer",
        description: "This is the best application for all my front-end needs!"
    }
];

export const LandingContent = () => {

    return (

        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    testimonials.map((item) =>
                        <Card key={item.description} className="bg-[#192339] border-none text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <p className="text-lg">{item.name}</p>
                                        <p className="text-zinc-400 text-sm">{item.title}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0">
                                    {item.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    )
                }
            </div>
        </div>
    );
}