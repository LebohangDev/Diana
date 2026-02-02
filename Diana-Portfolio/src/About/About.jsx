import { useState } from "react";
import { motion } from "framer-motion";
import { floatingVariant1, floatingVariant2, floatingVariant3, fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import styles from './About.module.css';

const About = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const productInfo = {
        title: "Food for Real Life",
        amount: 19,
        currency: "USD",
        successUrl: "https://busyavocado.com/?payment=success",
        cancelUrl: "https://busyavocado.com/?payment=cancel",
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
                    <p>Hi, I'm Diana Zavzeatii.</p>
                    <p>Busy Avocado started as a personal space where I shared moments from my life through food, and over time it became a reflection of how I like to eat and cook at home. Food has always been a big part of my everyday routine, not as a set of rules, but as something to enjoy, experiment with, and come back to often.</p>
                    <p>I'm drawn to meals that feel comforting, practical, and worth making again. Cooking, for me, is less about perfection and more about creating something that fits naturally into daily life. This book is simply a snapshot of that journey, shaped by years of cooking, tasting, and choosing the meals that stayed with me.</p>
                    <p>Busy Avocado is a space for people who enjoy food and want cooking to feel familiar rather than intimidating. If this book makes your time in the kitchen feel easier or more enjoyable, then it's done exactly what it was meant to do.</p>
                </motion.div>
                <motion.div className={styles.ebook} variants={staggerItem}>
                    <p className={styles.accentLine}>Get the Ebook</p>
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
                            Buy the Ebook
                        </button>
                    </div>
                </motion.div>
            </motion.div>
            <div className={styles.section2}>
                <div className={styles.imgContainer}>
                    <motion.img
                        src="Images/Diana/Diana_1.JPG"
                        alt=""
                        variants={floatingVariant1}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="Images/Diana/Diana_2.JPG"
                        alt=""
                        variants={floatingVariant2}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <motion.img
                        src="Images/Diana/Diana_3.jpg"
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
