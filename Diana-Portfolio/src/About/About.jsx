import { useState } from "react";
import { motion } from "framer-motion";
import { floatingVariant1, floatingVariant2, floatingVariant3, fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import styles from './About.module.css';

const About = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const productInfo = {
        title: "From Everyday Meals to a Healthier Lifestyle",
        amount: 10,
        currency: "USD",
        successUrl: "https://lebohangdev.github.io/Diana-Portfolio/?payment=success",
        cancelUrl: "https://lebohangdev.github.io/Diana-Portfolio/?payment=cancel",
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };

    async function handleZinnaPayment() {
        try {
            const productPayload = {
                amount: productInfo.amount,
                currency: productInfo.currency,
                title: productInfo.title,
                email: email,
                successUrl: productInfo.successUrl,
                cancelUrl: productInfo.cancelUrl,
            };

            const res = await fetch('https://asim-portfolio-backend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productPayload),
            });

            const data = await res.json();
            window.location.href = data.redirect_url;

        } catch (e) {
            console.error("Payment session failed:", e);
        }
    }

    return (
        <div id='About' className={styles.aboutContainer}>
            <motion.div
                className={styles.section1}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className={styles.header} variants={staggerItem}>
                    <h1>About Me</h1>
                    <hr />
                </motion.div>
                <motion.div className={styles.description} variants={staggerItem}>
                    <p>I'm a home cook who believes healthy living starts in your kitchen. I share simple, nourishing meals and easy routines that make healthy eating feel doable, not stressful. </p>
                    <p>With my recipes and guides, I help you feel more confident cooking, enjoy your food, and build a healthy lifestyle you can stick to.</p>
                </motion.div>
                <motion.div className={styles.ebook} variants={staggerItem}>
                    <p className={styles.accentLine}>Get My eBook and change your life Today!</p>
                    <img src="Images/Ebook/Ebook_1.png" alt="Ebook Cover" className={styles.ebookCover} />
                    <div className={styles.emailField}>
                        <p className={email && !isEmailValid ? styles.invalidEmail : styles.validEmail}>
                            {email && !isEmailValid ? '*Enter a valid email' : ""}
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button
                            disabled={!isEmailValid}
                            onClick={() => { handleZinnaPayment(); setEmail(''); }}
                            className={!isEmailValid ? styles.disabled : ''}
                        >
                            BUY PRODUCT
                        </button>
                    </div>
                </motion.div>
            </motion.div>
            <div className={styles.section2}>
                <div className={styles.imgContainer}>
                    <motion.img
                        src="Images/Diana/Diana_1.png"
                        alt=""
                        variants={floatingVariant1}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="Images/Diana/Diana_2.png"
                        alt=""
                        variants={floatingVariant2}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <motion.img
                        src="Images/Diana/Diana_3.png"
                        alt=""
                        variants={floatingVariant3}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />
                </div>

            </div>

        </div>
    );
};

export default About;
