import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
    return (
        <footer className="bg-light text-dark pt-4 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5>About Foody</h5>
                        <p>Foody is your go-to place for discovering the best food around you. Enjoy a variety of cuisines from the comfort of your home.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Cart</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Terms of Service</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>Contact Us</h5>
                        <address>
                            64/302 Sangam Complex<br />
                            Ghatkopar, Mumbai 400086<br />
                            Email: sarvesh2k2@gmail.com<br />
                            Phone: 8425863739
                        </address>
                        <div className="social-icons">
                            <a href="#" className="text-dark me-2"><FaFacebook /></a>
                            <a href="#" className="text-dark me-2"><FaTwitter /></a>
                            <a href="#" className="text-dark"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-4">
                        <p className="mb-0">&copy; 2024 Foody. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
