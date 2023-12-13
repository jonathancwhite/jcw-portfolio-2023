import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GridHeader from "@/components/GridHeader";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import MobileProjects from "@/components/MobileProjects";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jonathan White | Full Stack Engineer</title>
				<meta
					name='description'
					content='Jonathan White - Full Stack/Software Engineer based in Auburn, AL'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Hero />
			<GridHeader showContact={true} />
			<Grid />
			<MobileProjects />
			<Footer />
		</>
	);
}
