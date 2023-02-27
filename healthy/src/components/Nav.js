import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/meals'> Meals </Link>
            <Link to='/workouts'> Workouts </Link>
            <Link to='/trackers'> Trackers </Link>
        </div>
    )
}