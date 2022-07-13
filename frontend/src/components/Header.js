import {Link, Route, Switch} from "react-router-dom";

function Header({userEmail, handleLogout}) {
  return (

<Switch>
    <header className="header">
        <Route>
          <Link to="/">
            <div className="header__logo" />
          </Link>
        </Route>

        <Route path="/sign-up">
          <Link to="/sign-in" className="header-auth__link">
            Войти
          </Link>
        </Route>

        <Route path="/sign-in">
          <Link to="/sign-up" className="header-auth__link">
            Регистрация
          </Link>
        </Route>

        <Route exact path="/">
          <div className="header-auth">
            <p className="header-auth__email">{userEmail}</p>
            <Link to="/sign-in" className="header-auth__link" onClick={handleLogout}>
              Выйти
            </Link>
          </div>
        </Route>
    </header>
</Switch>

  );
}

export default Header;
