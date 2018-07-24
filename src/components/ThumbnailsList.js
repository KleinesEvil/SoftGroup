import React from 'react'
import {render} from 'react-dom'
import data from './ThumbnailsContent.js'
import Thumbnail from './Thumbnail.js'

function ThumbnailsList({ data_ }) {
	const ThumbnailElement = data_.map(element=>
			<span key = {element.id} className= {`thmb${element.id}`}><Thumbnail content = {element}/></span>
		)
	return(
			<span>
				{ThumbnailElement}
			</span>
		)
}

render(<ThumbnailsList data_ = {data}/>, document.getElementById('Thumbnails'))