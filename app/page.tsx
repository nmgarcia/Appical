import { redirect } from "next/navigation";

/**
 * Home page component that redirects to the main landing page
 * This follows Next.js best practices for root page redirects
 */
export default function HomePage() {
  redirect("/home");
}
