import React from 'react'
import {render} from 'react-dom'
import data from './BlogPostsContent.js'
import BlogPost from './BlogPost.js'

function BlogPostsList({ data_ }){
	const BlogPostElement = data_.map(element=>
		<div key = {element.id} id={element.id === '2' ? 'second': ''}><BlogPost content = {element}/></div>
		)
	return(
			<div>
				{BlogPostElement}
			</div>
		)
}

render(<BlogPostsList data_ = {data}/>, document.getElementById('BlogPosts'))