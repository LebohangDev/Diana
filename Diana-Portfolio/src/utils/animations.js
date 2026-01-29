// Framer Motion Animation Variants

// ========================================
// FADE ANIMATIONS
// ========================================

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// ========================================
// SCALE ANIMATIONS
// ========================================

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// ========================================
// STAGGER ANIMATIONS
// ========================================

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// ========================================
// INFINITE HOVER EFFECTS (for About images)
// ========================================

// Gentle floating animation - out of sync for each image
export const floatingVariant1 = {
    animate: {
        y: [-8, 8, -8],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const floatingVariant2 = {
    animate: {
        y: [8, -8, 8],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
        }
    }
};

export const floatingVariant3 = {
    animate: {
        y: [-6, 6, -6],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
        }
    }
};

// ========================================
// BUTTON HOVER ANIMATIONS
// ========================================

export const buttonHover = {
    scale: 1.02,
    transition: { duration: 0.2 }
};

export const buttonTap = {
    scale: 0.98
};

// ========================================
// IMAGE HOVER ANIMATIONS
// ========================================

export const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
};

// ========================================
// SLIDE ANIMATIONS
// ========================================

export const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================

export const scrollFadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const scrollScale = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" }
};

// ========================================
// NAV BAR ANIMATIONS
// ========================================

export const navbarSlide = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
        y: -100,
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

// ========================================
// LOGO ANIMATIONS
// ========================================

export const logoFloat = {
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
