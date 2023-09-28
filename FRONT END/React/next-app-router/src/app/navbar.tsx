import Link from 'next/link'
export function Navbar() {
    return (
        <nav className="flex bg-gray-950 py-4">
            <h1 className=" ml-4 text-white">Navbar</h1>
            <ul className="flex text-blue-400">
                <Link href="/">
                <li  className="ml-4 cursor-pointer">Home</li>
                </Link>
                <Link href="/about">
                <li className="ml-4 cursor-pointer">About</li>
                </Link>
                <Link href="about/profile">
                <li className="ml-4 cursor-pointer">Profile</li>
                </Link>
            </ul>
        </nav>
    )
}