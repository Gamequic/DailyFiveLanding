import { useState } from "react";

export default function FormularioTop5() {
  const [enviado, setEnviado] = useState(false);

  // Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // ⛔ Evita que la página se recargue

    const form = e.target;
    const data = new FormData(form); // 📦 Captura los datos del form

    try {
      // 🚀 Hacemos el POST al webhook de Make
      await fetch("https://hook.us2.make.com/wfg5141vj1umrqx6f5ghsm2v2bf17vm3", {
        method: "POST",
        body: data, // ✅ Enviamos FormData directamente
      });

      setEnviado(true);     // ✅ Mostramos mensaje de éxito
      form.reset();         // 🧽 Limpiamos el formulario
    } catch (error) {
      console.error("❌ Error al enviar el formulario:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-2"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          ¿Usarías una app como esta?
        </label>
        <select
          name="interes"
          defaultValue=""
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="Sí, Me encanta la idea">Sí, Me encanta la idea</option>
          <option value="Tal vez, si es divertida">Tal vez, si es divertida</option>
          <option value="No, no es lo mío">No, no es lo mío</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          ¿Qué tipo de temas te gustaría ver?
        </label>
        <input
          type="text"
          name="temas_sugeridos"
          placeholder="Ej: series, comidas, viajes..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          ¿Querés que te avise cuando esté lista?
        </label>
        <input
          type="email"
          name="email"
          placeholder="Tu correo (opcional)"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          ¿Te gustaría tener acceso anticipado?
        </label>
        <select
          name="acceso_anticipado"
          defaultValue=""
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="Sí, quiero probarla antes que nadie">Sí, quiero probarla antes que nadie</option>
          <option value="No, prefiero esperar el lanzamiento">No, prefiero esperar el lanzamiento</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-300"
      >
        Enviar
      </button>

      {/* Mensaje después del envío */}
      {enviado && (
        <p className="text-green-600 font-medium mt-2">
          ¡Gracias por tu respuesta! 🎉
        </p>
      )}
    </form>
  );
}
