import useKeycloak from '../../hooks/useKeycloak.hook';

function Authenticated() {
  const { isAuthenticated, keycloak } = useKeycloak();
  const parsedToken = keycloak?.idTokenParsed;

  if (!parsedToken || !isAuthenticated) {
    return <div>Unknown user</div>;
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Authenticated only</h1>
          <p>Email: {parsedToken.email}</p>
          <p>
            Name: {parsedToken.given_name} {parsedToken.family_name}
          </p>
        </div>
      </section>
    </>
  );
}

export default Authenticated;
