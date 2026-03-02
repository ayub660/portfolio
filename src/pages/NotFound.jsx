import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        // Console-e error log korche jate bujha jay kon path-e user error khachche
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="text-center space-y-5">
                <h1 className="text-8xl font-extrabold gradient-text">404</h1>
                <div className="space-y-2">
                    <p className="text-2xl font-semibold">Oops! Page not found</p>
                    <p className="text-muted-foreground">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>
                <div className="pt-4">
                    <a
                        href="/"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all shadow-lg glow-border inline-block"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;