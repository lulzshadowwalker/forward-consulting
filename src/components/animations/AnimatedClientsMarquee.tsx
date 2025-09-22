"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Image1 from "@/assets/images/communications-and-information-technology-commission.png";
import Image2 from "@/assets/images/education-and-training-evaluation-commission.png";
import Image3 from "@/assets/images/general-authority-of-civil-aviation.png";
import Image4 from "@/assets/images/human-resources-and-social-development.png";
import Image5 from "@/assets/images/human-resources-development-fund.png";
import Image6 from "@/assets/images/king-abdullah-city-for-atomic-and-renewable-energy.png";
import Image7 from "@/assets/images/ministry-of-commerce.png";
import Image8 from "@/assets/images/ministry-of-culture.png";
import Image9 from "@/assets/images/ministry-of-economy-and-planning.png";
import Image10 from "@/assets/images/ministry-of-education.png";
import Image11 from "@/assets/images/ministry-of-hajj-and-umrah.png";
import Image12 from "@/assets/images/ministry-of-tourism.png";
import Image13 from "@/assets/images/royal-commission-for-alula.png";
import Image14 from "@/assets/images/saline-water-conversion-corporation.webp";
import Image15 from "@/assets/images/saudi-electricity-regulatory-authority.png";

interface AnimatedClientsMarqueeProps {
  title: string;
  subtitle: string;
}

export function AnimatedClientsMarquee({
  title,
  subtitle,
}: AnimatedClientsMarqueeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative mb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            variants={titleVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      <div
        dir="ltr"
        className="my-10 flex flex-col gap-6 md:gap-9  [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
      >
        {[
          clients.slice(0, Math.ceil(clients.length / 2)),
          clients.slice(Math.ceil(clients.length / 2)),
        ].map((arr, index) => (
          <Marquee
            autoFill
            speed={30}
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {arr.map((client, index) => (
              <div
                key={index}
                className="mx-4 h-16 w-32 md:h-20 md:w-48 flex-shrink-0 relative"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

const clients = [
  {
    src: Image1,
    alt: "Communications and Information Technology Commission",
  },
  {
    src: Image2,
    alt: "Education and Training Evaluation Commission",
  },
  {
    src: Image3,
    alt: "General Authority of Civil Aviation",
  },
  {
    src: Image4,
    alt: "Ministry of Human Resources and Social Development",
  },
  {
    src: Image5,
    alt: "Human Resources Development Fund",
  },
  {
    src: Image6,
    alt: "King Abdullah City for Atomic and Renewable Energy",
  },
  {
    src: Image7,
    alt: "Ministry of Commerce",
  },
  {
    src: Image8,
    alt: "Ministry of Culture",
  },
  {
    src: Image9,
    alt: "Ministry of Economy and Planning",
  },
  {
    src: Image10,
    alt: "Ministry of Education",
  },
  {
    src: Image11,
    alt: "Ministry of Hajj and Umrah",
  },
  {
    src: Image12,
    alt: "Ministry of Tourism",
  },
  {
    src: Image13,
    alt: "Royal Commission for AlUla",
  },
  {
    src: Image14,
    alt: "Saline Water Conversion Corporation",
  },
  {
    src: Image15,
    alt: "Saudi Electricity Regulatory Authority",
  },
];
