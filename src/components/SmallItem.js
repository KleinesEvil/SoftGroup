import React from 'react'

function SmallItem(props){
	const {content} = props
	return(
			<div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="thumbnail">
                        <img src={`images/${content.image}`} alt="..."/>
                        <div className="caption">
                            <h3>{content.heading.toUpperCase()}</h3>
                            <p className="contentText">{content.text}</p>
                            <p><a href={`#smallItem${content.id}`} className="btn btn-default" role="button">DETAILS</a></p>
                        </div>
                    </div>
                </div>
		)
}

export default SmallItem