// components/Header.tsx

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
          <h1>TASK TRACKER</h1>
      </div>

      <div className="header__content">
          <div className="nav__category">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Api</a></li>
                    </ul>
                </nav>
          </div>
        <div className="header__login__button">
          <button className="registration">Регистрация</button>
          <button className="autorization">Войти</button>
        </div>
      </div>
    </header>
  );
}
