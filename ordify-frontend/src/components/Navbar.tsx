import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";


export default function Navbar() {
const navigate = useNavigate();


const logout = () => {
localStorage.clear();
navigate("/");
};


return (
<nav className="navbar">
<div className="nav-brand">ORDIFY</div>
<button className="logout-btn" onClick={logout}>Logout</button>
</nav>
);
}