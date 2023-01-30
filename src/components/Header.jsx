import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
	<div className="header">
		<div className="header__container">
			<div className="logo-wrapper">
				<h2>jw.</h2>
			</div>
			<div className="navmenu-wrapper">
				<ul>
					<li><Link href="/" className='active'>Projects</Link></li>
					<li><Link href="/services">Services</Link></li>
					<li><Link href="/about">About Me</Link></li>
				</ul>
			</div>
			<div className="extramenu-wrapper">

			</div>
		</div>
	</div>
  )
}

export default Header