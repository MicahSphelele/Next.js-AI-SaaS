"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {

    useEffect(() => {
        
        Crisp.configure("c34e9bbe-9832-4b75-ae3d-e0ea1f93a478");

    }, []);

    return null;
}