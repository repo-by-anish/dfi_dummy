import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_content">
                    <div className="fc_left">
                        <div className="fc_content">
                            <h2 className="fc_title">Address-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>XT Exports</p>
                                    <p>123 Main Street</p>
                                    <p>Cityville</p>
                                    <p>Stateville, ST</p>
                                    <p>12345</p>
                                    <p>United States</p>
                                </div>
                                <div className="contact-number">
                                    <p>+91-000000 0000</p>
                                </div>
                            </div>
                        </div>
                        <div className="fc_content">
                            <h2 className="fc_title">Quick Links-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>About Us</p>
                                    <p>Blogs</p>
                                    <p>FAQ</p>
                                    <p>Our Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fc_right">
                        <div className="fc_content">
                            <h2 className="fc_title">Quick Links-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>About Us</p>
                                    <p>Blogs</p>
                                    <p>FAQ</p>
                                    <p>Our Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_content">
                    <div className="fc_content">
                        <h2 className="fc_title">Contact Us-</h2>
                        <form className="footer_form" action="">
                            <input type="text" placeholder="Enter your name" required />
                            <input type="email" placeholder="Enter your email" required />
                            <input type="number" placeholder="Enter your number" required />
                            <textarea name="" id="" cols={30} rows={10}></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="footer_copyright">© 2024 Diamond Fruits International. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
