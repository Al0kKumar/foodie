import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/signin");
  }

  if (session.user.email === "admin@gmail.com") {
    redirect("/admin/home");
  }

  redirect("/dashboard");
}

