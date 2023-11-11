import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { UserAccountNav } from "@/components/user-account-nav";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 lg:px-16">
      <div className="flex items-center justify-between bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image alt="Uxie" src="/logo.png" width={50} height={40} />
            <span className="font-semibold">Uxie</span>
          </div>
        </Link>
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Button>
            <Link href="/login">Sign in</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
