import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div className='Home'>
            <h1 className='welcome'> Welcome! </h1>
            <div className='use-options'>
                <h3><Link to='./login'> Log In </Link> or <Link to='./create-account'> Create an Account </Link></h3>
            </div>
        </div>
    )
}
