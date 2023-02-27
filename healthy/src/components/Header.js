import Nav from "./Nav"

export default function Header() {
    return (
        <div className='Header'>
            <div className='title'>
                <img src='./logo.png' className='title-logo'/>
                <h1> healthy </h1>
            </div>
            <Nav />
        </div>
    )
}