import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import GridHeader from '@/components/GridHeader'
import Footer from '@/components/Footer'
import AboutGrid from '@/components/AboutGrid'

const about = () => {
  return (
	<>
		<Head>
			<title>Jonathan White - Services</title>
		</Head>
		<Header />
		<GridHeader />
		<AboutGrid />
		<Footer />
	</>
  )
}

export default about