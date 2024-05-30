import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-black text-xl font-bold">
            SupaBlog
          </Link>

          <Link href="/blog" className="text-black hover:text-white">
            Blog
          </Link>
        </nav>
        <div>
          {user !== null ? (
            <form action={signOut} className="flex gap-2">
              <p className="bg-white p-3">{user.email}</p>
              <button className="bg-black text-white rounded-md p-3">
                Sign Out
              </button>
            </form>
          ) : (
            <Link className="bg-re p-3" href="/login">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
