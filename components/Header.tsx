import Link from "next/link";
import React from 'react'
//import NavItems from "./NavItems";

const Header = () => {
  return (
    <header>
        <div className='container flex items-center justify-center'>
                <Link href="/">
                </Link>
            <nav >
                {/* <NavItems></NavItems> */}
            </nav>
        </div>
    </header>
  )
}

export default Header