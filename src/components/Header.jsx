import Link from 'next/link'
import React, {useState} from 'react'
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOpen } from '@mui/icons-material';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	function openMenu() {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true);
	}

	function closeMenu() {
		setMenuOpen(false);
	}
  const router = useRouter();
  return (
	<>
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
				<div className="mobileNav">
					{
						menuOpen ? <MenuOpen onClick={openMenu}/> : <MenuIcon onClick={openMenu} />
					}
				</div>
			</div>
		</div>
		<div className={menuOpen ? 'mobileNav__menu mobile-open' : 'mobileNav__menu'}>
			<div className="mobileNav__menu--items">
				<Link href="/" className={router.pathname == "/" ? "active centered" : "centered"}><a onClick={closeMenu}>Projects</a></Link>
				<Link href="/services" className={router.pathname == "/services" ? "active centered" : "centered"}><a onClick={closeMenu}>Services</a></Link>
				<Link href="/about" className={router.pathname == "/about" ? "active centered" : "centered"}><a onClick={closeMenu}>About</a></Link>
			</div>
		</div>
	</>

  )
}

export default Header