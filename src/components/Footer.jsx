import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {

	function scrollToTop() {
		window.scrollTo(0, 0)
	};

  return (
	<div className="footer">
		<div className="footer__b2t" onClick={scrollToTop}>
			<ArrowUpwardIcon />
		</div>
		<div className="footer__contact">
			<h3>That&apos;s all for now.</h3>
			<h6>CONTACT ME</h6>
			<a href="mailto:contact@jonathancwhite.com"><p>contact@jonathancwhite.com</p></a>
		</div>
		<div className="footer__socials">
			<h6>FOLLOW ME</h6>

		</div>
	</div>
  )
}

export default Footer