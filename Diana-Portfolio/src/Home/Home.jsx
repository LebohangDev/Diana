import { motion } from "framer-motion";
import styles from './Home.module.css';

const Home = () => {

    return (
        <div id='Home' className={styles.homeContainer}>
            <div className={styles.background_img}>
                <img src="Images/Hero/Hero_1.png" alt="" />
            </div>
            <div className={styles.homeWrapper}>
                <div className={styles.subHeading}>
                    <p>Nourishing</p>
                    <p>Intentional</p>
                    <p>Real Life Healthy</p>

                </div>
                <div className={styles.name}>
                    <h1>Diana Zavzeatii.</h1>
                    <p>Also Known as <span>BusyAvacado</span></p>
                </div>
                <div className={styles.socials}>
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
                <div className={styles.description}>
                    <p>Im a <span>home cook</span> sharing simple, nourishing meals and everyday habits to support a <span>healthier lifestyle.</span> Ready to level up? Get my eBook and start building your healthiest routine, <span>one meal at a time.</span></p>
                </div>
                <div className={styles.cta}>
                    <a href="#About" className={styles.btnOutline}>Learn More</a>
                    <a href="#Product" className={styles.btnFilled}>BUY PRODUCT</a>
                </div>

                <div className={styles.scrollMore}>
                    <i class="ri-arrow-down-circle-fill"></i>
                </div>
            </div>

        </div>
    );
};

export default Home;
