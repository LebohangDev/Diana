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
                    <p>Simple</p>
                    <p>Real-life</p>
                    <p>Repeatable</p>
                </motion.div>
                <motion.div className={styles.name} variants={staggerItem}>
                    <h1>Busy Avocado Kitchen</h1>
                    <p>By <span>Diana Zavzeatii</span></p>
                </motion.div>
                <motion.div className={styles.socials} variants={staggerItem}>
                    <motion.a
                        href="https://www.instagram.com/busyavocado/"
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
                </motion.div>
                <motion.div className={styles.description} variants={staggerItem}>
                    <p>Back in 2016, I created Busy Avocado as a social media page where I share my life and the food I cook. Over the past ten years, I've shared many recipes, and this book is a collection of the ones I love the most: realistic, repeatable meals that are satisfying to eat and easy to fit into everyday life, perfect for busy people, beginners, and anyone who prefers a practical approach to cooking.</p>
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
                        Get the Ebook
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
