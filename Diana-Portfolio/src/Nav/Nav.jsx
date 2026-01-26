import { useEffect, useState, useRef } from 'react';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ activeNav, setActiveNav, containerRef }) => {
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
                                    <a href="#Home" onClick={() => setActiveNav('Home')}>Home</a>
                                </li>
                                <li className={activeNav === 'About' ? styles.active : ''}>
                                    <a href="#About" onClick={() => setActiveNav('About')}>About</a>
                                </li>
                                <li className={activeNav === 'Product' ? styles.active : ''}>
                                    <a href="#Product" onClick={() => setActiveNav('Product')} >Product</a>
                                </li>
                                <li className={activeNav === 'Benefits' ? styles.active : ''}>
                                    <a href="#Benefits" onClick={() => setActiveNav('Benefits')} >Benefits</a>
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
                                    <a href="#Home" onClick={() => { setActiveNav('Home'); setHamMenu(false); }}>Home</a>
                                </li>
                                <li>
                                    <i class="ri-user-3-line"></i>
                                    <a href="#About" onClick={() => { setActiveNav('About'); setHamMenu(false); }}>About</a>
                                </li>
                                <li>
                                    <i class="ri-shopping-cart-2-line"></i>
                                    <a href="#Product" onClick={() => { setActiveNav('Product'); setHamMenu(false); }} >Product</a>
                                </li>
                                <li>
                                    <i class="ri-star-line"></i>
                                    <a href="#Benefits" onClick={() => { setActiveNav('Benefits'); setHamMenu(false); }} >Benefits</a>
                                </li>
                            </ul>

                            <div className={styles.media}>

                                <h1>
                                    Media
                                </h1>

                                <div className={styles.socials}>
                                    <a href="https://www.instagram.com/dianaray_vlogs/" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                    <a href="https://www.facebook.com/hijabigram" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@Dianaray_vlogs" target="_blank" rel="noreferrer">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © 2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com
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
