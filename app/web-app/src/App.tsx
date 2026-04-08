import { NavLink } from 'react-router';
import './App.css';
import useKeycloak from './hooks/useKeycloak.hook';

function App() {
  const { keycloak, isAuthenticated } = useKeycloak();

  return (
    <>
      <section id="center">
        <div>
          <h1>Web app</h1>
          <div className="links">
            <NavLink to="/public" className="link">
              Public
            </NavLink>
            <NavLink to="/authenticated" className="link">
              Authenticated
            </NavLink>
            <NavLink to="/admin" className="link">
              Admin
            </NavLink>
            {isAuthenticated ? (
              <button className="link" onClick={() => keycloak?.logout()}>
                Logout
              </button>
            ) : (
              <>
                <button className="link" onClick={() => keycloak?.login()}>
                  Login
                </button>
                <button className="link" onClick={() => keycloak?.register()}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
