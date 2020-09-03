import React from 'react'

export function BookImage(props) {
    return (
        <div className="image">
            <img src={props.url} />
        </div>
    )
}