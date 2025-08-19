import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Luisa El Amouri
        </Link>
      </div>
    </div>
  )
}

export default Navbar;