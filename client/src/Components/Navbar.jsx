import "./Navbar.css";
import scoopifyLogo from "../assets/scoopify logo.png";
import wishlistIcon from "../assets/wishlist-icon2.png";
import searchIcon from "../assets/Search-icon.png"
import walletIcon from "../assets/wallet-icon.png";
import profileIcon from "../assets/profile-icon.png";
function Navbar(){
    return(
        <nav className="navbar">

            <div className="navbar-logo">
                <img
                 src={scoopifyLogo}
                 alt="Scoopify Logo"
                 className="logo-icon"
               />
                <div>
                    <h2>Scoopify</h2>
                    <p>Discover Your Sweet Side</p>
                </div>

            </div>

            <ul className="nav-links">
                <li className="active">Home</li>
                <li>Menu</li>
                <li>Categories</li>
                <li>Offers</li>
                <li>About Us</li>

            </ul>

            <div className="navbar-right">
                <div className="search-box">
                    <img
                     src={searchIcon}
                     alt="Search"
                     className="search-icon"
                    />
                    <input
                     type="text"
                     placeholder="Search desserts, ice creams..."
                    
                    />

                </div>

                <div className="nav-icon">
                     <div className="nav-icon wishlist-nav">
                         <img
                           src={wishlistIcon}
                           alt="Wishlist"
                           className="wishlist-icon"
                        />

                     </div>

                </div>

                <div className="nav-icon wallet-nav">
                    <img
                      src={walletIcon}
                      alt="Wallet"
                      className="wallet-icon"
                    />

                  
                </div>

                <div className="profile-icon">
                   <img
                     src={profileIcon}
                     alt="Profile"
                     className="profile-img"
                    />
                </div>

                <button className="login-btn">
                    Login
                </button>

            </div>

        </nav>
    )
}
export default Navbar;