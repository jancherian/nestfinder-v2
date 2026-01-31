import { motion } from "framer-motion";

export function FloatingBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <FloatingShape
                color="bg-brand-500/30 dark:bg-brand-500/20"
                size="w-96 h-96"
                top="10%"
                left="-5%"
                delay={0}
            />
            <FloatingShape
                color="bg-accent-500/30 dark:bg-accent-500/20"
                size="w-80 h-80"
                bottom="10%"
                right="-5%"
                delay={2}
            />
            <FloatingShape
                color="bg-brand-500/30 dark:bg-brand-500/20"
                size="w-64 h-64"
                top="40%"
                left="30%"
                delay={4}
            />
        </div>
    );
}

function FloatingShape({ color, size, top, left, right, bottom, delay }) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl ${color} ${size}`}
            style={{ top, left, right, bottom }}
            animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
}
