import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ activeNav, containerRef }) => {
    const [hamMenu, setHamMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    let lastScrollTop = 0;


    useEffect(() => {

        const container = containerRef.current;


        const isScrolling = (event) => {




            let currentScrollTop = event.target.scrollTop;

            // if currentScroll top is greater that last know scroll top postion set nav as visible else hidden
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
                console.log("scrolling down")
            } else if (currentScrollTop < lastScrollTop) {
                setIsVisible(true);
                console.log("scrolling up")
            }

            // update lastScrollTop to currentscrll top 
            lastScrollTop = currentScrollTop;

        }


        container.addEventListener('scroll', isScrolling);

        return () => {
            container.removeEventListener('scroll', isScrolling);
        }

    }, [lastScrollTop]); // rune everytime isvisbile changes 




    return (

        <>
            <AnimatePresence>
                <motion.div
                    key={isVisible}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={isVisible === true ? styles.navContainer : styles.navContainer_hidden}
                >

                    <nav >
                        <ul>
                            <div className={styles.nav_logo}>
                                <img src="Images/Logos/nav_logo.svg" alt="Logo" />
                            </div>
                            <div className={styles.nav_links}>
                                <li className={activeNav === 'Home' ? styles.active : ''}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={activeNav === 'About' ? styles.active : ''}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={activeNav === 'Product' ? styles.active : ''}>
                                    <Link to="/product">Product</Link>
                                </li>
                                <li className={activeNav === 'Benefits' ? styles.active : ''}>
                                    <Link to="/product">Benefits</Link>
                                </li>
                            </div>
                            <div className={styles.nav_contact}>
                                <a href="https://www.instagram.com/dianaray_vlogs/" target="_blank" rel="noreferrer" className={styles.portfolioBtn}>
                                    Portfolio
                                </a>
                                <a href="https://www.instagram.com/dianaray_vlogs/" target="_blank" rel="noreferrer" className={styles.iconBtn}>
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>
                            </div>
                        </ul>
                    </nav>


                </motion.div>
            </AnimatePresence>

            <div className={styles.hamburgerContainer}>
                <div className={styles.hamHeader}>
                    <div className={styles.nav_logo}>
                        <img src="Images/Logos/nav_logo.svg" alt="Logo" />
                    </div>
                    <img
                        src="Images/hamburger.svg"
                        alt="Menu"
                        className={styles.hamburgerIcon}
                        onClick={(e) => { e.preventDefault(); setHamMenu(true) }}
                    />
                </div>

                <AnimatePresence>
                    {hamMenu === true ? (
                        <motion.div
                            className={styles.hamMenuActive}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className={styles.close}>
                                <img src="Images/close.svg" alt="Close" className={styles.closeIcon} onClick={(e) => { e.preventDefault(); setHamMenu(false) }} />
                            </div>

                            <ul>
                                <li>
                                    <i class="ri-home-6-line"></i>
                                    <Link to="/" onClick={() => setHamMenu(false)}>Home</Link>
                                </li>
                                <li>
                                    <i class="ri-user-3-line"></i>
                                    <Link to="/about" onClick={() => setHamMenu(false)}>About</Link>
                                </li>
                                <li>
                                    <i class="ri-shopping-cart-2-line"></i>
                                    <Link to="/product" onClick={() => setHamMenu(false)} >Product</Link>
                                </li>
                                <li>
                                    <i class="ri-star-line"></i>
                                    <Link to="/product" onClick={() => setHamMenu(false)} >Benefits</Link>
                                </li>
                            </ul>

                            <div className={styles.media}>

                                <h1>
                                    Media
                                </h1>

                                <div className={styles.socials}>
                                    <a href="https://www.linkedin.com/in/dianazavzeatii/" target="_blank" rel="noreferrer">
                                        <i className="ri-linkedin-box-fill"></i>
                                    </a>
                                    <a href="https://www.instagram.com/dianaray_vlogs/" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://www.tiktok.com/@busyavocado" target="_blank" rel="noreferrer">
                                        <i className="ri-tiktok-line"></i>
                                    </a>
                                    <a href="https://www.facebook.com/hijabigram" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-circle-fill"></i>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © 2026 Diana Zavzeatii. All rights reserved. | www.creatorsblueprint.net
                                </p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

        </>

    );
};

export default Nav;
