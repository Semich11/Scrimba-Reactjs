import "./header.css";
export function Header() {
  return (
    <header className="header">
      <div className="header__content-holder">
        <img className="header__image" src="/globe.png" alt="World" />
        <span className="header__span">my travel journal.</span>
      </div>
    </header>
  );
}
