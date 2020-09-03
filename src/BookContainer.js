import React from 'react'
import { books } from './books'
import { BookCard } from './BookCard'

export function BookContainer() {
    return (
        <div className="ui container">
            <h1 class="ui header">Featured eBooks</h1>
            <div className="ui four cards">
                {books.map(book => (
                   <BookCard book={book}/>
                ))}
            </div>
        </div>
    )
}