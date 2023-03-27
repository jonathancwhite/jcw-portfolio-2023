import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
	<div className="header">
		<div className="header__container">
			<div className="logo-wrapper">
				<Link href="/"><h2>jw.</h2></Link>
			</div>
			<div className="navmenu-wrapper">
				<ul>
					<li><Link href="/" className={router.pathname == "/" ? "active" : ""}>Projects</Link></li>
					<li><Link href="/services" className={router.pathname == "/services" ? "active" : ""}>Services</Link></li>
					<li><Link href="/about" className={router.pathname == "/about" ? "active" : ""}>About Me</Link></li>
				</ul>
			</div>
			<div className="extramenu-wrapper">

			</div>
		</div>
	</div>
  )
}

export default Header