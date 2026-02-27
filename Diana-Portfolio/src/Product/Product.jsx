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
            description: "Simple, flexible recipes made with real ingredients for everyday cooking.",
            icon: "ri-restaurant-2-line"
        },
        {
            description: "A mix of wholesome mains, vegetable-forward dishes, quick bowls and salads, comforting basics, and light desserts for any kind of day.",
            icon: "ri-restaurant-line"
        },
        {
            description: "Approachable methods (baking, air frying, blending, pressure cooking, stovetop) with ingredient swaps to suit your kitchen and lifestyle.",
            icon: "ri-fire-line"
        },
        {
            description: "Support to enjoy cooking more, with meals that are familiar, balanced, and worth repeating.",
            icon: "ri-heart-3-line"
        },
        {
            description: "A natural shift from ordering in to cooking at home more often, building habits that fit into real life.",
            icon: "ri-home-heart-line"
        },
        {
            description: "A calmer way to cook and eat, focused on what works for you, even when life is busy, social, or unpredictable.",
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
            const res = await fetch('http://localhost:3000/api/create-checkout-session', {
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
                                onClick={() => { handleZinnaPayment(product[0]); setEmail(''); }}
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
                        <h2>What to expect?</h2>
                        <p>A collection of recipes and ideas designed to make everyday cooking simpler, calmer, and more enjoyable, without pressure, extremes, or complicated rules.</p>

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
