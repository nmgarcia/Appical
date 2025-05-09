import emailjs from "@emailjs/browser"

interface EmailParams {
  from_name: string
  from_email: string
  message: string
  to_name?: string
  subject?: string
  phone?: string
  company?: string
  interests?: string
}

export const emailService = {
  /**
   * Envía un correo electrónico utilizando EmailJS
   */
  sendEmail: async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
    try {
      // Configuración de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

      if (!serviceId || !templateId || !publicKey) {
        console.error("Faltan credenciales de EmailJS")
        return {
          success: false,
          message: "Error de configuración del servicio de correo",
        }
      }

      // Preparar los parámetros para la plantilla
      const templateParams = {
        from_name: params.from_name,
        from_email: params.from_email,
        message: params.message,
        to_name: "Equipo Appical",
        to_email: "agroappical@gmail.com",
        subject: params.subject || "Nuevo mensaje desde Appical",
        phone: params.phone || "",
        company: params.company || "",
        interests: params.interests || "",
      }

      // Enviar el correo electrónico
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (response.status === 200) {
        return {
          success: true,
          message: "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
        }
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error)
      return {
        success: false,
        message: "No se pudo enviar el mensaje. Por favor, intenta de nuevo más tarde.",
      }
    }
  },

  /**
   * Envía un correo electrónico de interés específico (directorio, capacitaciones, licitaciones)
   */
  sendInterestEmail: async (
    nombre: string,
    email: string,
    telefono: string,
    origen: "capacitaciones" | "directorio" | "licitaciones",
    empresa?: string,
    mensaje?: string,
    capacitacionesTitulos?: string[],
  ): Promise<{ success: boolean; message: string }> => {
    // Construir el asunto según el origen
    let subject = ""
    let interestsText = ""

    switch (origen) {
      case "capacitaciones":
        subject = "Nuevo interés en capacitaciones"
        interestsText = "Interés en capacitaciones"
        break
      case "directorio":
        subject = "Nuevo interés en directorio de empresas"
        interestsText = "Interés en directorio de empresas"
        break
      case "licitaciones":
        subject = "Nuevo interés en licitaciones"
        interestsText = "Interés en licitaciones"
        break
    }

    

    // Construir el mensaje completo
    let fullMessage = `Nuevo interés en ${origen}.\n\n`
    if (mensaje) {
      fullMessage += `Mensaje: ${mensaje}\n\n`
    }
    // Añadir capacitaciones específicas si existen
    if (capacitacionesTitulos && capacitacionesTitulos.length > 0) {
        fullMessage += `\nCapacitaciones de interés: ${capacitacionesTitulos.join(", ")}\n`
      }
   
    return emailService.sendEmail({
      from_name: nombre,
      from_email: email,
      message: fullMessage,
      to_name: "Equipo Appical",
      subject,
      phone: telefono,
      company: empresa,
      interests: interestsText,
    })
  },
}
