import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className='Nav'>
            <Link to='/' className='section-link'> Home </Link>
            <Link to='/meals' className='section-link'> Meals </Link>
            <Link to='/workouts' className='section-link'> Workouts </Link>
            <Link to='/trackers' className='section-link'> Trackers </Link>
        </div>
    )
}