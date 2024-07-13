import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../stores/authContext';

export default function Navbar() {
  const { user, login } = useContext(AuthContext);
  console.log(user);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li onClick={login} className="btn">
          LogIn/SignUp
        </li>
        {/* Add other navbar items here */}
      </ul>
    </nav>
  );
}
