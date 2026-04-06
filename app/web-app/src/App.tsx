import { NavLink } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Web app</h1>
          <div className="links">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
            <NavLink to="/public" className="link">
              Public
            </NavLink>
            <NavLink to="/authenticated" className="link">
              Authenticated
            </NavLink>
            <NavLink to="/admin" className="link">
              Admin
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
