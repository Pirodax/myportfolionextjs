"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    name_en?: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const { language, setLanguage } = useLanguage();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => {
              e.preventDefault();
              const targetId = navItem.link.replace("#", "");
              const target = document.getElementById(targetId);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">
              {language === "en" && navItem.name_en ? navItem.name_en : navItem.name}
            </span>
          </a>
        ))}

        {/* Toggle langue */}
        <button
          onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
          className="ml-4 text-sm font-semibold border border-white/[0.2] rounded-full px-3 py-1 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
          aria-label="Toggle language"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
