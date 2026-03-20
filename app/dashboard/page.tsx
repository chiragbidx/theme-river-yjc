import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Redirect default /dashboard to overview page
  redirect("/dashboard/overview");
  return null;
}