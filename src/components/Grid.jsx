import React, { useState } from "react";
import kodiakAgency from "../assets/img/kodiakagency.png";
import creatorCarts from "../assets/img/creatorcarts.png";
import ballisticAgency from "../assets/img/ballisticagency.png";
import maxOrdGear from "../assets/img/maxordgear.png";
import mileHigh from "../assets/img/milehigh.png";
import lawrenceAmmo from "../assets/img/lawrenceammo.png";
import mtCommodoreAme from "../assets/img/mtcommodoreame.png";
import jefeQuality from "../assets/img/jefeq-sitebuild.png";
import yhm from "../assets/img/yankeehill.png";
import Image from "next/image";
import Link from "next/link";

const Grid = ({ gridStyle }) => {
	// if you see this, I'm sorry... it's like 2am and brain don't work
	const [isHovering, setHovering] = useState(false);
	const [isHoveringCC, setHoveringCC] = useState(false);
	const [isHoveringBA, setHoveringBA] = useState(false);
	const [isHoveringMO, setHoveringMO] = useState(false);
	const [isHoveringMH, setHoveringMH] = useState(false);
	const [isHoveringLA, setHoveringLA] = useState(false);
	const [isHoveringMC, setHoveringMC] = useState(false);
	const [isHoveringYHM, setHoveringYHM] = useState(false);
	const [isHoveringJQ, setHoveringJQ] = useState(false);

	const handleMouseEnter = () => {
		setHovering(true);
	};
	const handleMouseEnterCC = () => {
		setHoveringCC(true);
	};
	const handleMouseEnterBA = () => {
		setHoveringBA(true);
	};
	const handleMouseEnterMO = () => {
		setHoveringMO(true);
	};
	const handleMouseEnterMH = () => {
		setHoveringMH(true);
	};
	const handleMouseEnterLA = () => {
		setHoveringLA(true);
	};
	const handleMouseEnterMC = () => {
		setHoveringMC(true);
	};
	const handleMouseEnterYHM = () => {
		setHoveringYHM(true);
	};

	const handleMouseEnterJQ = () => {
		setHoveringJQ(true);
	};

	const handleMouseLeave = () => {
		setHovering(false);
	};
	const handleMouseLeaveCC = () => {
		setHoveringCC(false);
	};
	const handleMouseLeaveBA = () => {
		setHoveringBA(false);
	};
	const handleMouseLeaveMO = () => {
		setHoveringMO(false);
	};
	const handleMouseLeaveMH = () => {
		setHoveringMH(false);
	};
	const handleMouseLeaveLA = () => {
		setHoveringLA(false);
	};
	const handleMouseLeaveMC = () => {
		setHoveringMC(false);
	};
	const handleMouseLeaveYHM = () => {
		setHoveringYHM(false);
	};

	const handleMouseLeaveJQ = () => {
		setHoveringJQ(false);
	};

	return (
		<div className='grid' id='grid__outerContainer'>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringJQ
									? "col__title hovered"
									: "col__title"
							}>
							Jefe Quality - Jefe Cigars (IN PROGRESS)
						</div>
						<div
							className={
								isHoveringJQ
									? "col__title hovered"
									: "col__title"
							}>
							Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col filled'>
						<Link href='https://jefecigarco.com/' target='_blank'>
							<Image
								src={jefeQuality}
								alt='Jefe Quality Website Preview'
								onMouseEnter={handleMouseEnterJQ}
								onMouseLeave={handleMouseLeaveJQ}
							/>
						</Link>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHovering ? "col__title hovered" : "col__title"
							}>
							Kodiak Agency
						</div>
						<div
							className={
								isHovering ? "col__title hovered" : "col__title"
							}>
							Design & Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Link href='https://builtbykodiak.com' target='_blank'>
							<Image
								src={kodiakAgency}
								alt='Kodiak Agency Website Preview'
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
						</Link>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringBA
									? "col__title hovered"
									: "col__title"
							}>
							Ballistic Agency
						</div>
						<div
							className={
								isHoveringBA
									? "col__title hovered"
									: "col__title"
							}>
							Design
						</div>
					</div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Link
							href='https://ballisticagency.com'
							target='_blank'>
							<Image
								src={ballisticAgency}
								alt='Ballistic Agency Website Design'
								onMouseEnter={handleMouseEnterBA}
								onMouseLeave={handleMouseLeaveBA}
							/>
						</Link>
					</div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringMH
									? "col__title hovered"
									: "col__title"
							}>
							Mile High Shooting
						</div>
						<div
							className={
								isHoveringMH
									? "col__title hovered"
									: "col__title"
							}>
							Design & Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Link
							href='https://milehighshooting.com'
							target='_blank'>
							<Image
								src={mileHigh}
								alt='Mile High Website Design'
								onMouseEnter={handleMouseEnterMH}
								onMouseLeave={handleMouseLeaveMH}
							/>
						</Link>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringLA
									? "col__title hovered"
									: "col__title"
							}>
							Lawrence Ammo
						</div>
						<div
							className={
								isHoveringLA
									? "col__title hovered"
									: "col__title"
							}>
							Design & Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Image
							src={lawrenceAmmo}
							alt='Lawrence Ammo Website Design'
							onMouseEnter={handleMouseEnterLA}
							onMouseLeave={handleMouseLeaveLA}
						/>
					</div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringMO
									? "col__title hovered"
									: "col__title"
							}>
							Max Ord
						</div>
						<div
							className={
								isHoveringMO
									? "col__title hovered"
									: "col__title"
							}>
							Design & Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col filled'>
						<Link href='https://maxordgear.com' target='_blank'>
							<Image
								src={maxOrdGear}
								alt='Max Ord Gear Website'
								onMouseEnter={handleMouseEnterMO}
								onMouseLeave={handleMouseLeaveMO}
							/>
						</Link>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringCC
									? "col__title hovered"
									: "col__title"
							}>
							Creator Carts
						</div>
						<div
							className={
								isHoveringCC
									? "col__title hovered"
									: "col__title"
							}>
							Design
						</div>
					</div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Image
							src={creatorCarts}
							alt='Creator Carts Website'
							onMouseEnter={handleMouseEnterCC}
							onMouseLeave={handleMouseLeaveCC}
						/>
					</div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'>
						<div
							className={
								isHoveringYHM
									? "col__title hovered"
									: "col__title"
							}>
							YHM MFG.
						</div>
						<div
							className={
								isHoveringYHM
									? "col__title hovered"
									: "col__title"
							}>
							Design & Build
						</div>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__work'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col filled'>
						<Link href='https://yhm.net' target='_blank'>
							<Image
								className='img img__long'
								src={yhm}
								alt='Yankee Hill Machining Website'
								onMouseEnter={handleMouseEnterYHM}
								onMouseLeave={handleMouseLeaveYHM}
							/>
						</Link>
					</div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
			<div className='row row__title'>
				<div className='grid__row'>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
