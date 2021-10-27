import React from 'react'

const ListInsurance = ({title, content, url, preamble}) => {
    return (  

        <li className="list-group-item secoundry-color border rounded mb-3">
            <h4 className="card-title">{title ?? ''}</h4>
            <h5 className="h5">{preamble ?? ''}</h5>
            <p className="card-text">{content ?? ''}</p>
            <a href={url}target="_blank" className="btn rounded-button-xl bg-white font-weight-bold border-0 base-color btn-sm mb-2">Läs mer</a>
        </li>
  
    )
}

export default ListInsurance;