
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <img src="Images/Logos/footer_logo.svg" alt="Brand Logo" className={styles.brandLogo} />
                    <div className={styles.media}>
                        <p>Media</p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.linkedin.com/in/dianazavzeatii/" target="_blank" rel="noreferrer">
                                <i class="ri-linkedin-box-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/dianaray_vlogs/" target="_blank" rel="noreferrer">
                                <i class="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.tiktok.com/@busyavocado" target="_blank" rel="noreferrer">
                                <i class="ri-tiktok-line"></i>
                            </a>
                            <a href="https://www.facebook.com/hijabigram" target="_blank" rel="noreferrer">
                                <i class="ri-facebook-circle-fill"></i>
                            </a>

                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/product">Benefits</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© 2026 Diana Zavzeatii. All rights reserved. | www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;
