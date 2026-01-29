import { motion } from "framer-motion";
import { staggerContainer, staggerItem, buttonHover, buttonTap, scaleIn } from '../utils/animations';
import styles from './Home.module.css';

const Home = () => {

    return (
        <div id='Home' className={styles.homeContainer}>
            <motion.div
                className={styles.background_img}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <img src="Images/Hero/Hero_1.png" alt="" />
            </motion.div>
            <motion.div
                className={styles.homeWrapper}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.subHeading} variants={staggerItem}>
                    <p>Nourishing</p>
                    <p>Intentional</p>
                    <p>Real Life Healthy</p>
                </motion.div>
                <motion.div className={styles.name} variants={staggerItem}>
                    <h1>Diana Zavzeatii.</h1>
                    <p>Also Known as <span>BusyAvacado</span></p>
                </motion.div>
                <motion.div className={styles.socials} variants={staggerItem}>
                    <motion.a
                        href="https://www.linkedin.com/in/dianazavzeatii/"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i class="ri-linkedin-box-fill"></i>
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/dianaray_vlogs/"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i class="ri-instagram-fill"></i>
                    </motion.a>
                    <motion.a
                        href="https://www.tiktok.com/@busyavocado"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i class="ri-tiktok-line"></i>
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/hijabigram"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i class="ri-facebook-circle-fill"></i>
                    </motion.a>
                </motion.div>
                <motion.div className={styles.description} variants={staggerItem}>
                    <p>Im a <span>home cook</span> sharing simple, nourishing meals and everyday habits to support a <span>healthier lifestyle.</span> Ready to level up? Get my eBook and start building your healthiest routine, <span>one meal at a time.</span></p>
                </motion.div>
                <motion.div className={styles.cta} variants={staggerItem}>
                    <motion.a
                        href="#About"
                        className={styles.btnOutline}
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                    >
                        Learn More
                    </motion.a>
                    <motion.a
                        href="#Product"
                        className={styles.btnFilled}
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                    >
                        BUY PRODUCT
                    </motion.a>
                </motion.div>

                <motion.div
                    className={styles.scrollMore}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <i class="ri-arrow-down-circle-fill"></i>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Home;
