import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// Google Analytics event trigger
const handleRealtimeClick = (media) => {
  if (window.gtag) {
    window.gtag("event", "bottom_" + media + "_click", {
      event_category: "engagement",
      event_label: "Botón de WhatsApp",
      value: 1,
    });
  }
};

// Simple fade animation for component entry
const fadeInAnimation = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SocialNetworksCard({
  name,
  url,
  isGithub,
  isInstagram,
  isWhatsapp,
  isEmail,
  shouldPulse = false, // 🔁 enable/disable pulsing animation
}) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  // Handles click logic and analytics
  const handleClick = () => {
    const options = {
      isGithub: "GitHub",
      isInstagram: "Instagram",
      isWhatsapp: "WhatsApp",
      isEmail: "Email",
    };
    const result = Object.entries(options).find(([key]) => eval(key))?.[1] || "";
    handleRealtimeClick(result);

    if (isEmail && url) {
      window.location.href = `mailto:${url}`;
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <motion.div
      className="bg-violet-900 relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer group min-h-32 min-w-48 flex flex-col items-center justify-center text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      onClick={handleClick}
      // 🔁 Pulsing animation when not hovered and shouldPulse is true
      animate={
        shouldPulse && !hovered
          ? {
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
          : { scale: 1 } // default scale
      }
      whileHover={{ scale: 1.05 }} // 🖱️ hover scale effect
    >
      <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>

      <div className="flex space-x-4 mt-4">
        {isGithub && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}
        {isInstagram && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}
        {isWhatsapp && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}
        {isEmail && url && (
          <a href={`mailto:${url}`}>
            <FaEnvelope size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
