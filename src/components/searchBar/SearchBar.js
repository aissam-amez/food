import React, {useState} from 'react'
import './SearchBar.css' 

const sortByOptions = {
    'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}


const SearchBar = (props) => {
	const {searching} = props

	const [term, setTerm] = useState('')
	const [location, setLocation] = useState('')
	const [sortBy, setSortBy] = useState('best_match')

	const getSelected = (e) => {
		const selected = e.target.value 
		const changeSort = selected === 1 ? 'best_match' : (selected === 2 ? 'rating' : 'review_count')
		setSortBy( changeSort )
	}
	const getSearchedValue = (e) =>{
		const searchFor = e.target.value
		setTerm( searchFor )
	}

	const getSearching = (e) => {
		searching(term, location, sortBy)
		e.preventDefault()
	}

	const getLocation = (e) =>{
		const place = e.target.value
		setLocation( place )
	}

	return(
		<div className="SearchBar">
			<div className="SearchBar-sort-options">
				<ul>
					{ 
						Object.keys(sortByOptions).map( sortByOption=>{
							let sortByOptionValue = sortByOptions[sortByOption] === 'best_match' ? 1 : (sortByOptions[sortByOption] === 'rating' ? 2 : 3)
							// quick fix, somehow keys not working (get undifind)
							const active = sortBy === sortByOptions[sortByOption] ? 'active' : ''
							return (
								<li className={active} onClick={getSelected} value={sortByOptionValue}>{sortByOption}</li>
							) 
						})
					} 
				</ul>
			</div>
			<div className="SearchBar-fields">
				<input placeholder="Search Businesses" value={term} onChange={getSearchedValue} />
				<input placeholder="Where?" value={location} onChange={getLocation} />
			</div>
			<div className="SearchBar-submit">
				<a onClick={getSearching} >Let's Go</a>
			</div>
		</div>
	)
}

export default SearchBar