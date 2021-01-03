const YelpKey = "pB5mSJtFcuwu2Iz5NHVlZtPnJao3MKZvQbSWaWqxCt8doNHlD0xbUIWEeqMlr6UQP66_4ogOzYyXcSQaGF5_7pZYT8f-Y0lmldiSAEOb-tldPgGo6yPsLLeO-tnUX3Yx";
const clientIdYelp = "CbhekPTrMdMWzDyebOf0tg";

const search = (term, location, sortBy) => {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
		headers: {
			Authorization : `Bearer ${YelpKey}` }
		}).then(response => response.json()).then(responseJson => {
			console.log('response', responseJson.businesses)
			if(responseJson.businesses){
				return responseJson.businesses
			}
		})
}

export default search;

// const search = (term, location, sortBy) => {
// 	let searchResult = []
// 	fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
// 		headers: {
// 			Authorization : `Bearer ${YelpKey}` }
// 	}).then(response => response.json()).then(responseJson => {
// 		console.log('response', responseJson.businesses)
// 		if(responseJson.businesses){
// 			searchResult = responseJson.businesses.map(business => {
// 				return {
// 					id : business.id,
// 					imageSrc: business.image_url,
// 			        name: business.name,
// 			        address: business.location.address1,
// 			        city: business.city,
// 			        state: business.state,
// 			        zipCode: business.zip_code,
// 			        category: business.categories[0] ? business.categories[0].title : '',
// 			        rating: business.rating ? business.rating : 0 ,
// 			        reviewCount: business.review_count ? business.review_count : 0 ,
// 				}
// 			})
// 			console.log('searchResult',searchResult)
// 		}
// 	})
// 	return searchResult
// }
