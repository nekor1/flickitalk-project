import categoryIcon from "../assets/images/prof-btn.svg";
import categoryLogo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";


function Header() {
    return(
        <header class="header">
            <div class="container imag_head">
                <Link to="/post" class="btn-category">
                    <img src={categoryIcon} alt="Menu button" />
                </Link>
                <Link to="/profil" class="logo-category">
                    <img src={categoryLogo} alt="Logotip" />
                </Link>
            </div>
        </header>
    );
}

export default Header;