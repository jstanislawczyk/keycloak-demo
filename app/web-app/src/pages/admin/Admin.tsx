import useKeycloak from '../../hooks/useKeycloak.hook';

function Admin() {
  const { keycloak } = useKeycloak();

  if (!keycloak?.hasResourceRole('READ_USER')) {
    return 'Admin restricted';
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Admin only</h1>
        </div>
      </section>
    </>
  );
}

export default Admin;
