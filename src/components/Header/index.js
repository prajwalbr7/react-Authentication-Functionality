// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="ul-style">
    <li className="">
      <Link to="/">Home</Link>
    </li>
    <li className="">
      <Link to="/about">About</Link>
    </li>
  </ul>
)
export default Header
