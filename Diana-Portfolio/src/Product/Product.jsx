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
            description: "Support your energy, digestion, and overall wellbeing with simple, nourishing habits you can maintain daily.",
            icon: "ri-lightbulb-flash-fill"
        },
        {
            description: "Build healthy routines around food and lifestyle that feel natural, realistic, and easy to stick to.",
            icon: "ri-calendar-check-line"
        },
        {
            description: "Feel confident making healthier food choices without stress, guilt, or overthinking.",
            icon: "ri-shield-flash-fill"
        },
        {
            description: "Create a balanced lifestyle where you enjoy food while taking care of your body long-term.",
            icon: "ri-scales-3-fill"
        },
        {
            description: "Reduce stress around food by letting go of confusion, pressure, and all-or-nothing thinking.",
            icon: "ri-windy-line"
        },
        {
            description: "Stay consistent with healthy habits even on busy days, social occasions, and real-life schedules.",
            icon: "ri-battery-2-charge-line"
        }
    ];

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
                <p>A realistic framework for eating well without overthinking it</p>
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
                        <h1>{productInfo.title}</h1>
                        <p>Healthy living doesn’t need to be complicated. I share simple, nourishing recipes and everyday habits that fit into real life. Everything starts in your own kitchen — with food that’s easy to make, enjoyable to eat, and supportive of your long-term wellbeing.</p>

                        <div className={styles.ProductContentBodyButton}>
                            <input
                                type="email"
                                className={styles.emailInput}
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button disabled={!isEmailValid} onClick={() => { handleZinnaPayment(); setEmail(''); }}>
                                GET STARTED NOW!
                            </button>
                        </div>

                        <div className={styles.ProductContentPrice}>
                            <div className={styles.price}>
                                <p>Price</p>
                                <p>${productInfo.amount}</p>
                            </div>

                            <div className={styles.why} onClick={scrollToBenefits}>
                                <p>Why buy this Ebook?</p>
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
                        <p>helps you feel better in your body, eat with confidence, and build healthy habits that actually fit into your life — without pressure, guilt, or extremes.</p>

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
