"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ContactInfo {
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
  color: string;
}

interface AnimatedContactInfoProps {
  title: string;
  subtitle: string;
  contacts: ContactInfo[];
  className?: string;
}

export function AnimatedContactInfo({
  title,
  subtitle,
  contacts,
  className = "",
}: AnimatedContactInfoProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="mb-8" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
      </motion.div>

      <motion.div className="space-y-6" variants={containerVariants}>
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="group hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
              <CardContent className="px-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200`}
                    whileHover={{ rotate: 5 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      {contact.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        href={contact.href}
                        className={`${
                          contact.color.includes("blue")
                            ? "text-blue-600 dark:text-blue-400"
                            : contact.color.includes("green")
                              ? "text-green-600 dark:text-green-400"
                              : "text-purple-600 dark:text-purple-400"
                        } hover:underline transition-all duration-200`}
                      >
                        {contact.value}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
