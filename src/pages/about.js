import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import GridHeader from "@/components/GridHeader";
import Footer from "@/components/Footer";
import AboutGrid from "@/components/AboutGrid";
import MobileAbout from "@/components/MobileAbout";

const about = () => {
	return (
		<>
			<Head>
				<title>Jonathan White | About</title>
			</Head>
			<Header />
			<GridHeader />
			<AboutGrid />
			<MobileAbout />
			<Footer />
		</>
	);
};

export default about;
