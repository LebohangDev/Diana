import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import styles from './Product.module.css';

const Product = () => {

    const benefitsRef = useRef(null);

    const scrollToBenefits = () => {
        if (benefitsRef.current) {
            benefitsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const benefitsItems = [
        {
            description: "Enjoy cooking more by keeping meals simple, familiar, and worth repeating.",
            icon: "ri-restaurant-2-line"
        },
        {
            description: "Build easy routines around food that fit into real schedules and busy days.",
            icon: "ri-calendar-check-line"
        },
        {
            description: "Feel more confident in the kitchen without stressing over 'doing it right.'",
            icon: "ri-shield-star-line"
        },
        {
            description: "Shift naturally from ordering in to cooking at home more often.",
            icon: "ri-home-heart-line"
        },
        {
            description: "Take the pressure off food by focusing on what works for you, not strict rules.",
            icon: "ri-heart-3-line"
        },
        {
            description: "Stay consistent with home cooking even when life is busy, social, or unpredictable.",
            icon: "ri-time-line"
        }
    ];

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const product = [
        {
            type: "ebook",
            title: "Food for Real Life",
            description: "Busy Avocado is about enjoying good food without overcomplicating it.",
            price: 19,
            currency: "usd",
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

    return (
        <div id="Product" className={styles.ProductContainer}>

            {/* HEADER */}
            <motion.div
                className={styles.ProductHeader}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1>Busy Avocado Kitchen</h1>
                <p>A realistic way to eat well without overthinking it.</p>
            </motion.div>

            {/* MAIN PRODUCT CONTENT */}
            <div className={styles.ProductContent}>

                {/* LEFT TEXT */}
                <motion.div
                    className={styles.ProductContentContainer}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className={styles.ProductContentHeader}>
                        <h1>Ebook</h1>
                    </div>

                    <div className={styles.ProductContentBody}>
                        <h1>{product[0].title}</h1>
                        <p>Busy Avocado is about enjoying good food without overcomplicating it. Here you'll find everyday recipes and simple kitchen ideas designed to fit into real routines: meals that feel good to cook, good to eat, and easy to come back to.</p>

                        <div className={styles.ProductContentBodyButton}>
                            <p className={email && !isEmailValid ? styles.invalidEmail : styles.validEmail}>
                                {email && !isEmailValid ? '*Enter a valid email' : ""}
                            </p>
                            <input
                                type="email"
                                className={styles.emailInput}
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button
                                disabled={!isEmailValid}
                                onClick={() => { handleCheckout(product); setEmail(''); }}
                                className={!isEmailValid ? styles.disabled : ''}
                            >
                                Buy the Ebook
                            </button>
                            <p className={styles.note}>
                                The ebook will be sent to your email. Please check your spam folder if you don't receive it.
                            </p>
                        </div>

                        <div className={styles.ProductContentPrice}>
                            <div className={styles.price}>
                                <p>Price</p>
                                <p>USD {product[0].price}</p>
                            </div>

                            <div className={styles.why} onClick={scrollToBenefits}>
                                <p>Why get this Ebook?</p>
                                <i className="ri-arrow-down-circle-line"></i>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className={styles.ProductContentEbook}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img src="Images/Ebook/Ebook_2.png" alt="Ebook" />
                </motion.div>
            </div>

            {/* BENEFITS SECTION */}
            <div id="Benefits" ref={benefitsRef} className={styles.benefitsContainer}>
                <div className={styles.benefitsWrapper}>
                    {/* Left Side: Learn More */}
                    <div className={styles.benefitsLeft}>
                        <h2>Benefits</h2>
                        <p>Helps you enjoy cooking more, shift from ordering in to cooking at home, and build habits that fit naturally into your everyday life without pressure, guilt, or extremes.</p>

                        <a href="#Product">
                            <button className={styles.orderBtn}>Order ebook<i class="ri-shopping-bag-3-line"></i></button>

                        </a>

                        <div className={styles.bookStack}>
                            <img src="Images/Ebook/Ebook_3.png" alt="Ebook Stack" />
                        </div>
                    </div>

                    {/* Right Side: Grid */}
                    <div className={styles.benefitsGrid}>
                        {benefitsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefitItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.iconBox}>
                                    <i className={item.icon}></i>
                                </div>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;
