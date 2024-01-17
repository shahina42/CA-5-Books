import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Books() {

    const [Api, setApi] = useState([]);
    const [Search, setSearch] = useState(['']);


    useEffect(() => {
        axios.get('https://reactnd-books-api.udacity.com/books', {
            headers: { 'Authorization': 'whatever-you-want' }
        })
            .then((response) => {
                const data = response.data.books;
                console.log(response)
                setApi(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            });
    }, [])

    const searchItem = Api.filter((book) => book.title.toLowerCase().includes(String(Search).toLowerCase()))

    return (
        <div className="books">

            <div className="nav">
                <img className='logo' src="https://kalvium.com/wp-content/uploads//2023/04/Kalvium-Logo-SVG.svg" alt="" />
                <input className="searchBar" value={Search} type="text" placeholder='Search Books' onChange={(e) => setSearch(e.target.value)} />
                <Link to="/Form"><button className='Regs'>Register</button></Link>

            </div>

            <div className="main">
                {searchItem.map(book => (
                    <div className="book" key={book.id}>
                        <img src={book.imageLinks.thumbnail} alt={book.title} />
                        <h4>{book.title}</h4>
                        <p>{book.averageRating || "Not Rated"} <img className='star' src="https://static.vecteezy.com/system/resources/previews/000/441/557/original/vector-star-icon.jpg" alt="" /> </p>
                        <p>Free</p>


                    </div>))}

            </div>


        </div>
    )
}

export default Books