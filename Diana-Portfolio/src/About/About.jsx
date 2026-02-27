import { useState } from "react";
import { motion } from "framer-motion";
import { floatingVariant1, floatingVariant2, floatingVariant3, fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import styles from './About.module.css';

const About = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const product = [
        {
            type: "ebook",
            title: "Food for Real Life",
            description: "Busy Avocado is about enjoying good food without overcomplicating it.",
            price: 19,
            currency: "USD",
            image: "https://busyavocado.com/Images/Ebook/Ebook_1.png",
            email: email,
            successUrl: "https://busyavocado.com/?payment=success",
            cancelUrl: "https://busyavocado.com/?payment=cancel",
        }
    ];

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };

    /*

    async function handleCheckout(productPayload) {
        try {
            const res = await fetch('https://dianabackend.onrender.com/api/create-checkout-session', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productPayload),
            });

            const data = await res.json();
            window.location.href = data.url;

        } catch (e) {
            console.error("Payment session failed:", e);
        }
    }
    */

    // pass the selected plan from user
    async function handleZinnaPayment(productPayload) {
        try {

            const planPayload = {
                amount: productPayload.price,
                email: email,
                currency: productPayload.currency,
                successUrl: productPayload.successUrl,
                cancelUrl: productPayload.cancelUrl,

            }

            const res = await fetch('https://dianabackend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(planPayload),

            });
            console.log(planPayload);

            const data = await res.json()
            window.location.href = data.redirect_url;

            console.log("redirect url:", data.redirect_url)



        } catch (e) {
            console.error("failed to send request to create payment session for user:", e)



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
                            onClick={() => { handleZinnaPayment(product[0]); setEmail(''); }}
                            className={!isEmailValid ? styles.disabled : ''}
                        >
                            Buy the Ebook
                        </button>
                        <p className={styles.note}>
                            The ebook will be sent to your email. Please check your spam folder if you don't receive it.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <div className={styles.section2}>
                <div className={styles.imgContainer}>
                    <motion.img
                        src="Images/Diana/Diana_1.jpg"
                        alt=""
                        variants={floatingVariant1}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="Images/Diana/Diana_2.jpg"
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
