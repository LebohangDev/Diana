import { motion } from "framer-motion";
import styles from './About.module.css';

const About = () => {
    return (
        <div id='About' className={styles.aboutContainer}>
            <div className={styles.section1}>
                <div className={styles.header}>
                    <h1>About Me</h1>
                    <hr />
                </div>
                <div className={styles.description}>
                    <p>I’m a home cook who believes healthy living starts in your kitchen. I share simple, nourishing meals and easy routines that make healthy eating feel doable, not stressful. </p>
                    <p>With my recipes and guides, I help you feel more confident cooking, enjoy your food, and build a healthy lifestyle you can stick to.</p>
                </div>
                <div className={styles.ebook}>
                    <p className={styles.accentLine}>Get My eBook and change your life Today!</p>
                    <img src="Images/Ebook/Ebook_1.png" alt="Ebook Cover" className={styles.ebookCover} />
                    <div className={styles.emailField}>
                        <input type="email" placeholder="Enter your email address" />
                        <button>BUY PRODUCT</button>
                    </div>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.imgContainer}>
                    <img src="Images/Diana/Diana_1.png" alt="" />
                    <img src="Images/Diana/Diana_2.png" alt="" />
                    <img src="Images/Diana/Diana_3.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default About;
