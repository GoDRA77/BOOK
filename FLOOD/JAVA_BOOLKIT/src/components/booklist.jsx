import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BooksList() {
    const [books, setBooks] = useState([]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {books.map((book) => (
                <Card key={book.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Text>
                            Автор: {book.author} <br />
                            Страницы: {book.pages} <br />
                            Цена: {book.price} KGS
                        </Card.Text>
                        <Button variant="primary">Подробнее</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default BooksList;
