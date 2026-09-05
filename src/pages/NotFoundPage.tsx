import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-primary px-4 text-center text-white">
      <div className="text-7xl font-extrabold tracking-tight text-accent sm:text-9xl">404</div>
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Page Not Found</h1>
      <p className="max-w-md text-white/60">
        The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>
      <Button asChild className="bg-accent text-white hover:bg-accent/90">
        <Link to="/">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
