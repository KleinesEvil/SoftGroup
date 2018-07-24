import React from 'react'

function Thumbnail(props){
	const {content} = props
	return(
			<div className="thmb">
	         <a href={`#addPhoto${content.id}`}>
	             <img src={`images/${content.image}`} alt="..." />
	         </a>
	     </div>
		)
}

export default Thumbnail