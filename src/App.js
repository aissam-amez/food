import React, {useState} from 'react'
import './components/app/App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/searchBar/SearchBar'
import search from './util/Yelp'
//import business from './data/data'


function App() {

	const [resturent, setResturent] = useState([])

	const searchYelp = (term, location, sortBy) =>{
		//let resturents = resturent
		// if(location !== ''){
		// 	resturents = Object.values(resturents).filter( resto => resto.city === location  )
		// }
		// if(term !== ''){
		// 	resturents = Object.values(resturents).filter( resto => resto.name.indexOf(term) !== -1 )
		// }
		// if(sortBy === 'rating'){
		// 	resturents = Object.values(resturents).sort((c, d)=> c.rating < d.rating)
		// }else if(sortBy === 'reviewCount' ){
		// 	resturents = Object.values(resturents).sort((c, d)=> c.reviewCount < d.reviewCount)
		// }
		//console.log(sortBy)
		search(term, location, sortBy).then(businesses => {
			if(businesses){
				businesses = businesses.map(business => {
					return {
						id : business.id,
						imageSrc: business.image_url,
				        name: business.name,
				        address: business.location.address1,
				        city: business.city,
				        state: business.state,
				        zipCode: business.zip_code,
				        category: business.categories[0] ? business.categories[0].title : '',
				        rating: business.rating ? business.rating : 0 ,
				        reviewCount: business.review_count ? business.review_count : 0 ,
					}
				})
				setResturent(businesses)
			}
		 })
	}

  	return (
		<>
			<SearchBar searching={searchYelp} />
			<BusinessList businesses={resturent} />
		</>
	);
}

export default App;
