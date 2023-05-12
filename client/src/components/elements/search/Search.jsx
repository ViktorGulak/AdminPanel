import React from 'react'
import "./search.scss"

export default function Search({htmlPlaceholder}) {
 return (
    <div className="has-icon-left">
        <input className="form-input search-input" type="text" placeholder={htmlPlaceholder}/>
        <i className="form-icon icon icon-search"></i>
    </div>
  )
}
