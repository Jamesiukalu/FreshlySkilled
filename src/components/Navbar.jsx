import { NavLink } from 'react-router-dom';
import logo from '../assets/img/Tech brand5.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <NavLink to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                {/* <h1 className="m-0 text-primary">Techtalize</h1> */}
                <img 
                src={logo} 
                alt="Techtalize Logo" 
                className="img-fluid" 
                style={{ maxHeight: '40px' }} 
            />
            </NavLink>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">About</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <NavLink to="/ourTeam" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Our Team</NavLink>
                            <NavLink to="/careers" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Careers</NavLink>
                            <NavLink to="/alumniSection" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Alumni Corner</NavLink>
                            <NavLink to="/strategy" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Our Strategy</NavLink>
                            <NavLink to="/inclusion" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Equity, Diversity & Inclusion</NavLink>
                            <NavLink to="/accessibility" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Accessibility</NavLink>
                        </div>
                    </div>
                    <NavLink to="/job-list" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Apply</NavLink>
                    <NavLink to="/testimonialPage" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Testimonial</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">What&apos;s New</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <NavLink to="/job-categories" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Our Programs</NavLink>
                            <NavLink to="/partners" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Our Partners</NavLink>
                            <NavLink to="/pricing" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Pricing</NavLink>
                            <NavLink to="/faq" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>FAQ</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                </div>
                <NavLink to="/signup" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
                    Create Account<i className="fa fa-arrow-right ms-3"></i>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
