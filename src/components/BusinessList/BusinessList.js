import React from 'react'
import './BusinessList.css'
import Business from '../business/business'

const BusinessList = (props) => {
	const { businesses } = props
	//console.log(businesses)
	return (
		<div className="BusinessList">
			{businesses.map(business => <Business key={business.id} business={business} /> ) }
		</div>
	)
}

export default BusinessList