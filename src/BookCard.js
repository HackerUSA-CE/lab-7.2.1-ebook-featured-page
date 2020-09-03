import React from 'react'
import { BookImage } from './BookImage'

export function BookCard(props) {
    const book = props.book
    return (
        <div className="ui card">
            <BookImage url={book.imageURL} />
            <div class="content">
                <a class="header">{book.title}</a>
                <div class="meta">
                    <span class="date">Published {book.year}</span>
                </div>
                <div class="description">
                    {book.description}
                </div>
            </div>
        </div>
    )
}