import Link from "next/link"
import { auth } from "../utils/firebase" //import the following 2 for using user
import { useAuthState } from "react-firebase-hooks/auth"

const Nav = () => {
  const [user, loading] = useAuthState(auth)

  console.log(user)

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-2xl font-medium">txtos</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-bold ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded text-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  )
}
export default Nav
