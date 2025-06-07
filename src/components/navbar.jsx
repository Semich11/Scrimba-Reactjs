import "./navbar.css"
export function Navbar() {
  return (
    <header className="nav-header">
      <nav className="nav-element">
        <img src="/react-logo.png" alt="react-logo" className="nav-image"/>
        <span className="head-text">ReactFacts</span>
      </nav>
    </header>
  );
}
