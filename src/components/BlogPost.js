import React from 'react'

function BlogPost(props){
	const {content} = props
	return(
			<div className="blogPost">
            <div className="content">
                <h4>{content.title.toUpperCase()}</h4>
                <p>{content.text}</p>
                <p><a href={`#blogPost${content.id}`} className="btn btn-default" role="button">DETAILS</a></p>
            </div>
        </div>
		)
}

export default BlogPost