import './header.css'

export function Header() {
    return(
        <header className='header'>
          <img src="/react-logo.png" alt="react-logo" className='head-image' />
          <nav>
            <ul className="nav-list">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
}