"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const MotionDiv: React.FC<MotionProps> = ({
  children,
  className,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
