import React from 'react'

const GridHeader = ({gridTitle}) => {
  return (
	<div className="gridHeader">
		<div className="gridHeader__container">
			<div className="gridHeader__contact">
				<span>CONTACT ME</span>
				<span>contact@jonathancwhite.com</span>
			</div>
			<div className="gridHeader__title">
				{gridTitle}
			</div>
		</div>
	</div>
  )
}

export default GridHeader