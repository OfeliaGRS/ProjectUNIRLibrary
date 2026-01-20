import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="nav__menu">
        <NavLink className="nav__link" to="/">Inicio</NavLink>
        <NavLink className="nav__link" to="/catalog">Catálogo</NavLink>
        <NavLink className="nav__link" to="/rentals">Mis Alquileres</NavLink>
      </nav>
    </header>
  );
}
