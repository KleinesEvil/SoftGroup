import React from 'react'
import {render} from 'react-dom'
import data from './LargerItemContent.js'

function LargerItem(props){
    const {content} = props
	return(
			<div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="thumbnail">
                        <img src={`images/${content.image}`} alt="..."/>
                        <div className="caption">
                            <h4>{content.heading.toUpperCase()}</h4>
                            <p className="contentText">{content.text}</p>
                            <p><a href={`#largerItem${content.id}`} className="btn btn-default" role="button">DETAILS</a></p>
                        </div>
                    </div>
                </div>
            </div>
		)
}

render(<LargerItem content={data} />, document.getElementById('LargerItem'))

export default LargerItem