import { Link } from "react-router-dom"

export default function SearchErrorPage() {
    return (
        <div>
            <Link to='/meals' className='back-to-meals'> Back </Link>
            <h1>Search Invalid: Please enter a valid search.</h1>
        </div>
    )
}