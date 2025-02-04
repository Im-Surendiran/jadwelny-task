'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "home",
    path:"/"
  },
  {
    name:"about",
    path:"#about"
  }
]
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link,index)=>{
        return(
          <Link href={link.path} key={index}
          className={`${link.path === pathname && 'border-b-2 border-black'} capitalize font-medium hover:border-b-2 border-black transition-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav