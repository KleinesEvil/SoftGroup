import React from 'react'
import {render} from 'react-dom'
import data from './SmallItemsContent.js'
import SmallItem from './SmallItem.js'

function SmallItemsList({data_}){
	const SmallItemsElements = data_.map(element => 
			<div key = {element.id} className={element.id === '1' ? 'firstSmallItem':'secondSmallItem'}><SmallItem content = {element}/></div>
		)
	return(
			<div>
				{SmallItemsElements}
			</div>
		)
}

render(<SmallItemsList data_ = {data}/>, document.getElementById('SmallItems'))