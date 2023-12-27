"use client";

import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-side";

const Navbar = () => {

    return (
        <div className="flex items-center p-4">
            
            <MobileSidebar />

            <div className="flex w-full justify-end">

            <UserButton afterSignOutUrl="/"/>

            </div>
        </div>
    );
}

export default Navbar;