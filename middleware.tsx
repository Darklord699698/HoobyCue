import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Optional: Specify additional Clerk options here, if needed
});

export const config = {
  matcher: [
    // Protect all routes except public files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always apply middleware for API and TRPC routes
    "/(api|trpc)(.*)",
    // Add additional matchers for specific routes or patterns if needed
  ],
};
