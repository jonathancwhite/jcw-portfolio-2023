import React from 'react'
import Image from 'next/image'
import KodiakAgency from '../assets/img/kodiakagency.png'
import BallisticAgency from '../assets/img/ballisticagency.png'
import maxOrdGear from '../assets/img/maxordgear.png';
import mileHigh from '../assets/img/milehigh.png';
import lawrenceAmmo from '../assets/img/lawrenceammo.png';
import Link from 'next/link'

const MobileProjects = () => {



  return (
	<div className="mobileProjects">
		<h5>Recent Projects</h5>
		<div className="mobileProjects__item">
			<div className="mobileProjects__item--card">
				<Image src={KodiakAgency} alt="Kodiak Agency Project" width={200} height={300}/>
				<div className="cardDetails">
					<h4>Kodiak Agency</h4>
					<Link href="https://builtbykodiak.com" target="_blank" className="btn btn--primary">View Website</Link>
				</div>
			</div>
		</div>
		<div className="mobileProjects__item">
			<div className="mobileProjects__item--card">
				<Image src={BallisticAgency} alt="Ballistic Agency Project" width={200} height={300}/>
				<div className="cardDetails">
					<h4>Ballistic Agency</h4>
					<Link href="https://ballisticagency.com" target="_blank" className="btn btn--primary">View Website</Link>
				</div>
			</div>
		</div>
		<div className="mobileProjects__item">
			<div className="mobileProjects__item--card">
				<Image src={mileHigh} alt="Mile High Shooting Project" width={200} height={300}/>
				<div className="cardDetails">
					<h4>Mile High Shooting</h4>
					<Link href="https://milehighshooting.com" target="_blank" className="btn btn--primary">View Website</Link>
				</div>
			</div>
		</div>
		<div className="mobileProjects__item">
			<div className="mobileProjects__item--card">
				<Image src={lawrenceAmmo} alt="Lawrence Ammunition Project" width={200} height={300}/>
				<div className="cardDetails">
					<h4>Lawrence Ammo</h4>
					<Link href="https://lawrence-ammunition.com" target="_blank" className="btn btn--primary">View Website</Link>
				</div>
			</div>
		</div>
		<div className="mobileProjects__item">
			<div className="mobileProjects__item--card">
				<Image src={maxOrdGear} alt="MaxOrd Gear Project" width={200} height={300}/>
				<div className="cardDetails">
					<h4>MaxOrd Gear</h4>
					<Link href="https://maxordgear.com" target="_blank" className="btn btn--primary">View Website</Link>
				</div>
			</div>
		</div>

		<div className="contact">
			<h5>Want to see more?</h5>
			<p className='orange'>All projects available upon request.</p>
		</div>
	</div>
  )
}

export default MobileProjects