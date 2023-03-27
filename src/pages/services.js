import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head';
import Footer from '@/components/Footer';
import GridHeader from '@/components/GridHeader';
import ServicesGrid from '@/components/ServicesGrid';
import MobileServices from '@/components/MobileServices';

const services = () => {
  return (
	<>
		<Head>
			<title>Jonathan White - Services</title>
		</Head>
		<Header />
		<GridHeader />
		<ServicesGrid />
		<MobileServices />
		<Footer />
	</>
  )
}

export default services