
const Customizer = ({ roles, abilities }) => {
    return (
      <div>
        <h1>Protected Page</h1>
        <p>Roles: {roles}</p>
        <p>Abilities: {abilities ? abilities.join(', ') : 'No abilities'}</p>
      </div>
    );
  };
  
  export default Customizer;
