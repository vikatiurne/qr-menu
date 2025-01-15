import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <div>
      <p>Logo</p>
      <div>
        <p>language 1</p>
        <p>language 2</p>
      </div>
      <Link to="login">
        <button>Sing in</button>
      </Link>
    </div>
  );
};
export default Header;
