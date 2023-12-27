import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";

const LandingPage = () => {
  return (
  <div>
    <p>Landing Page (Unprotected)</p>
    <div>
      
        <Link href="/sign-in"> 
          <Button>
              Sign In
          </Button>
        </Link>

        <Link href="/sign-up"> 
          <Button>
              Sign Up
          </Button>
        </Link>
    </div>
  </div>
  )
}

export default LandingPage;