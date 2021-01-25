import logo from '../images/woodstock.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container-fluid">
            <a className="navbar-brand" href="#top"><img src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#furtnitures">Furnitures</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
export default NavBar;