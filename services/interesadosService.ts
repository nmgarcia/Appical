// Interfaz para los datos del formulario de interesados
export interface InteresadoFormData {
  nombre: string
  email: string
  telefono: string
  empresa?: string
  mensaje?: string
  origen: "capacitaciones" | "directorio" | "licitaciones"
  capacitacionesIds?: string[] // IDs de las capacitaciones seleccionadas
}

// Servicio para gestionar interesados
export const interesadosService = {
  // Registrar un nuevo interesado
  registrarInteresado: async (data: InteresadoFormData): Promise<{ success: boolean; message: string }> => {
    // Simulamos una llamada a API con un pequeño delay
    return new Promise((resolve) => {
      console.log("Datos del interesado enviados:", data)

      setTimeout(() => {
        // Simulamos una respuesta exitosa
        resolve({
          success: true,
          message: "Muchas gracias, te enviaremos más información a la brevedad.",
        })
      }, 1000)
    })
  },
}
