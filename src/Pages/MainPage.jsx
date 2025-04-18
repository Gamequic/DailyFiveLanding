import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ListOrdered, Share2, Globe } from 'lucide-react';

// proyect imports
import LoadingScreen from "./../components/LoadingScreen";
import SocialNetworksCard from './../components/SocialNetworkCard'
import FormularioTop5 from "./../components/form";

const fadeInAnimation = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function MainPage() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simula carga
  }, []);

  const sections = {
    home: useRef(null),
    aboutIt: useRef(null),
    aboutMe: useRef(null)
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">

    <LoadingScreen isLoading={loading} />

    <section
      ref={sections.home}
      className="content-section flex flex-col h-[33vh] bg-teal-200 relative"
    >
      {/* Imagen que se mantiene en su lugar en pantallas grandes */}
      <div className="
          w-screen h-[33vh]
        "
      >
        <img 
          className="background-video w-screen h-[33vh] object-cover"
          src="/assets/background2.png"
        />
      </div>

      {/* Texto sobre la imagen en móviles/tablets */}
      <div className="
          w-1/2 text-gray-800 flex flex-col items-center justify-center 
          p-6 space-y-4
          absolute inset-0 bg-black/60 text-white
          w-screen h-[33vh]
        "
      >
        <motion.h1
          className="text-center text-4xl font-bold lg:text-8xl"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          DailyFive
        </motion.h1>
      </div>
      
      <motion.h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-orange-400 mt-8"
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        ¿Cuál es tu Top 5 de hoy?
      </motion.h1>
      <motion.p
        className="text-center text-md font-bold text-teal-900 m-4"
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        Responde temas diarios, crea tu ranking y compártelo con tus amigos.
      </motion.p>
      <motion.h2
        className="text-center text-2xl font-bold text-orange-400 m-4"
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        ¿Cómo funciona?
      </motion.h2>
      <motion.div
        className="text-md font-bold justify-center text-teal-900 m-4 space-y-3"
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <div className="flex items-start justify-start gap-2 text-left">
          <ListOrdered className="w-5 h-5 text-teal-700" />
          <span className="text-sm">Recibí un tema diario (ej: "Comidas") y elegí tu Top 5 de opciones (ej: "Pizza, Sushi, Tacos...").</span>
        </div>
        <div className="flex items-start justify-start gap-2 text-left">
          <Share2 className="w-5 h-5 text-teal-700" />
          <span className="text-sm">Publicalo y compartilo con tus amigos.</span>
        </div>
        <div className="flex items-start justify-start gap-2 text-left">
          <Globe className="w-5 h-5 text-teal-700" />
          <span className="text-sm">Mirá lo que pusieron tus amigos y votá por los mejores.</span>
        </div>
      </motion.div>
      <button 
        className="bg-orange-500 hover:bg-orange-600 mx-4 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
        onClick={() => scrollToSection(sections.aboutIt)}
      >
        Quiero unirme
      </button>
    </section>

    <section
      ref={sections.aboutIt}
      className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-teal-200"
    >
      <div className="w-full lg:w-1/2 text-orange-400 flex flex-col items-center justify-center space-y-4">
        <motion.h1
          className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          Únete al proyecto
        </motion.h1>
      </div>

      <div className="w-full lg:w-1/2 text-slate-900 flex items-center justify-center p-6 text-base md:text-2xl">
        <FormularioTop5 />
      </div>
    </section>

    <section
      ref={sections.aboutMe}
      className="content-section items-center justify-center flex flex-col h-screen bg-teal-200"
    >

      <motion.h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700"
        style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        ¡No te pierdas las novedades de la aplicación!
      </motion.h1>

      <div className="relative w-full flex justify-center">
      <div
        className="overflow-x-auto p-4 scrollbar-hide flex sm:justify-start lg:justify-center"
        ref={(el) => {
          if (el) el.scrollLeft = 0; // 📌 Asegura que el scroll empiece desde la izquierda
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-max sm:mx-0 lg:mx-auto">
          <SocialNetworksCard
            name="calleros.dev"
            url="https://www.instagram.com/calleros.dev/"
            isInstagram
            shouldPulse
          />

          <SocialNetworksCard
            name="demian@calleros.dev"
            url="demian@calleros.dev"
            isEmail
          />

          <SocialNetworksCard
            name="Demian Calleros"
            url="https://wa.me/526567779087"
            isWhatsapp
          />
        </div>
      </div>
    </div>
    </section>
    </div>
  );
}