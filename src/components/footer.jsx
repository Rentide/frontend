import "../styles/footer.css"

const Footer = () => {
    return(
        <div className="footer">
                <footer className="footer-distributed">
                    <div className="footer-inside">
                        <div className="footer-center">
                            <div className="footer-center-wrapper">
                                <div><span>Contact</span>
                                    <ul>
                                        <li>Whatsapp</li>
                                        <li>Support 24</li>
                                    </ul>
                                </div>

                                <div><span>Support</span>
                                    <ul>
                                        <li>Support Centre</li>
                                        <li>24h service</li>
                                        <li>Quick Chat</li>
                                    </ul>
                                </div>

                                <div><span>Policy</span>
                                    <ul>
                                        <li>Return Policy</li>
                                        <li>Terms Of use</li>
                                        <li>Security</li>
                                        <li>Privacy</li>
                                        <li>Sitemap</li>
                                        <li>Faq</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="footer-right">
                            <p className="footer-company-about">
                                <span>About us</span> St. Xavier's College, Maitighar is a private, Jesuit, co-educational secondary and tertiary educational institution run by the Nepal Region of the Society of Jesus in Kathmandu, Nepal. It was founded
                                by the Jesuits in 1988 AD.
                            </p>
                            <div className="footer-icons">
                                <a href="#" data-toggle="tooltip" title="Facebook">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="#" data-toggle="tooltip" title="Twitter">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="#" data-toggle="tooltip" title="Linkedin">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#" data-toggle="tooltip" title="Github">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="footer-bottom">
                    <div>
                        <p className="footer-company-name">All Rights Reserved by Rentide &copy; 2022</p>
                    </div>

                </div>
            </div>
    )
}

export default Footer;