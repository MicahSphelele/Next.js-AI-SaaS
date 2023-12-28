import Heading from "@/components/heading";

import { Code } from "lucide-react";

const CodeGenerationPage = () => {

    return (
        <div>
            <Heading
                title="Code Generation"
                description="Our most advanced code generation model."
                icon={Code}
                iconColor="text-green-700"
                bgColor="bg-green-700/10" />

                <div className="px-4 lg:px-4">

                </div>
        </div>
    )
}

export default CodeGenerationPage;