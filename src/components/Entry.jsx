import React from 'react'
import "./style24React.css";



function Entry(props) {
  return (
    <div className='term'>
      <dt>
        <span className='emoji' role="img" aria-label="Tense BIceps">
        {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
        <dd>
        {props.desc}
        </dd>
      
    </div>
  );
}

export default Entry;