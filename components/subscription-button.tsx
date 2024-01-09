"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonPops {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonPops) => {

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {

        try {

            setIsLoading(true);

            const response = await axios.get("api/stripe");

            window.location.href = response.data.url;

        } catch (error) {

            toast.error("Something went wrong");
            console.log("BILLING_ERROR", error);
            
        } finally {

            setIsLoading(false);
        }
    }

    return (
        <Button
            disabled={isLoading}
            onClick={onClick}
            variant={isPro ? "default" : "premium"}>
            {
                isPro ? "Manage Subscription" : "Upgrade"
            }
            {
                !isPro && (
                    <Zap className="w-4 h-4 ml-2 fill-white" />
                )
            }
        </Button>
    )
};