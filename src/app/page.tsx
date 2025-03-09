import { ModeToggle } from "@/components/mode-toggle";
import SignIn from "@/components/sign-in";
import TokenDisplay from "@/components/token-display";
import { auth } from "@/lib/auth";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  const cookieToken =
    cookieStore.get("authjs.session-token")?.value || "No token found";

  const session = await auth();
  const sessionToken = session?.user.jwt || "No session token";

  return (
    <div>
      <main>
        <SignIn />
        <TokenDisplay cookieToken={cookieToken} sessionToken={sessionToken} />
      </main>
    </div>
  );
}
