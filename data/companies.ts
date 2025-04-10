export interface Company {
  id: string
  nombre: string
  ubicacion: string
  provincia: string
  rubro: string
  productos: string[]
  tipoProduccion: string
  certificaciones: string[]
  descripcion: string
  descripcionCompleta?: string
  destacada: boolean
  logo: string
  banner?: string
  galeria?: string[]
  contacto?: {
    telefono?: string
    whatsapp?: string
    email?: string
    web?: string
  }
  coordenadas?: {
    lat: number
    lng: number
  }
  plan?: "free" | "destacado" | "premium"
}

export const provincias = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
]

export const rubros = ["Distribuidor", "Productor", "Exportador", "Tecnología", "Insumos", "Comercio"]

export const tiposProduccion = ["Convencional", "Orgánica", "Hidroponía", "Agroecológica"]

export const certificaciones = ["BPA", "Orgánico SENASA", "FairTrade"]

export const tiposProducto = [
  "Fertilizantes",
  "Semillas",
  "Sistemas hidropónicos",
  "Compost",
  "Bioinsumos",
  "Hierbas aromáticas",
  "Frutas",
  "Hortalizas",
  "Tecnología agrícola",
  "Maquinaria",
]

export const companiesMock: Company[] = [
  {
    id: "1",
    nombre: "AgroVerde SRL",
    ubicacion: "Cañuelas, Buenos Aires",
    provincia: "Buenos Aires",
    rubro: "Distribuidor",
    productos: ["Fertilizantes orgánicos", "Compost", "Asesoría técnica"],
    tipoProduccion: "Orgánica",
    certificaciones: ["BPA", "Orgánico SENASA"],
    descripcion: "Insumos orgánicos para horticultura intensiva. Distribución nacional.",
    descripcionCompleta:
      "AgroVerde SRL es una empresa líder en la distribución de insumos orgánicos para la horticultura intensiva. Con más de 15 años de experiencia en el mercado, nos especializamos en la producción y distribución de fertilizantes orgánicos, compost y brindamos asesoría técnica personalizada. Nuestros productos están certificados por SENASA y cumplimos con las Buenas Prácticas Agrícolas (BPA). Trabajamos con productores de todo el país, ofreciendo soluciones sustentables para mejorar la calidad y rendimiento de los cultivos.",
    destacada: true,
    logo: "/placeholder.svg?height=200&width=200&text=AgroVerde",
    banner: "/placeholder.svg?height=400&width=1200&text=AgroVerde+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Instalaciones",
      "/placeholder.svg?height=300&width=400&text=Productos",
      "/placeholder.svg?height=300&width=400&text=Equipo",
    ],
    contacto: {
      telefono: "+54 11 4567-8901",
      whatsapp: "+54 9 11 2345-6789",
      email: "contacto@agroverde.com.ar",
      web: "www.agroverde.com.ar",
    },
    coordenadas: {
      lat: -35.0511,
      lng: -58.7547,
    },
    plan: "premium",
  },
  {
    id: "2",
    nombre: "HydroGrow Tech",
    ubicacion: "Godoy Cruz, Mendoza",
    provincia: "Mendoza",
    rubro: "Tecnología",
    productos: ["Sistemas NFT", "Automatización de riego", "Sensores de humedad"],
    tipoProduccion: "Hidroponía",
    certificaciones: [],
    descripcion: "Desarrollamos soluciones inteligentes para cultivo sin suelo.",
    descripcionCompleta:
      "HydroGrow Tech es una empresa innovadora especializada en el desarrollo de tecnología para cultivos hidropónicos. Nuestro equipo de ingenieros y agrónomos trabaja constantemente en la creación de soluciones que optimizan el uso de recursos y maximizan la producción. Ofrecemos sistemas NFT completos, soluciones de automatización de riego y sensores de humedad de alta precisión. Nuestro objetivo es hacer la hidroponía más accesible y eficiente para productores de todos los tamaños.",
    destacada: false,
    logo: "/placeholder.svg?height=200&width=200&text=HydroGrow",
    banner: "/placeholder.svg?height=400&width=1200&text=HydroGrow+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Sistemas+NFT",
      "/placeholder.svg?height=300&width=400&text=Automatización",
      "/placeholder.svg?height=300&width=400&text=Laboratorio",
    ],
    contacto: {
      telefono: "+54 261 423-4567",
      whatsapp: "+54 9 261 789-0123",
      email: "info@hydrogrow.tech",
      web: "www.hydrogrow.tech",
    },
    coordenadas: {
      lat: -32.9267,
      lng: -68.8272,
    },
    plan: "destacado",
  },
  {
    id: "3",
    nombre: "Campo Justo Coop.",
    ubicacion: "Oberá, Misiones",
    provincia: "Misiones",
    rubro: "Productor",
    productos: ["Yerba mate agroecológica", "Frutas tropicales"],
    tipoProduccion: "Agroecológica",
    certificaciones: ["FairTrade"],
    descripcion: "Cooperativa agroecológica con enfoque en comercio justo y regenerativo.",
    descripcionCompleta:
      "Campo Justo es una cooperativa de productores agroecológicos de la provincia de Misiones. Nos dedicamos principalmente al cultivo de yerba mate y frutas tropicales bajo principios agroecológicos. Nuestra cooperativa está formada por más de 50 familias productoras que trabajan bajo los estándares de comercio justo (FairTrade). Promovemos prácticas agrícolas que respetan el medio ambiente y generan un impacto social positivo en nuestra comunidad. Nuestros productos se distribuyen tanto en el mercado nacional como internacional.",
    destacada: true,
    logo: "/placeholder.svg?height=200&width=200&text=Campo+Justo",
    banner: "/placeholder.svg?height=400&width=1200&text=Campo+Justo+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Cooperativa",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 3755 42-1234",
      whatsapp: "+54 9 3755 67-8901",
      email: "contacto@campojusto.coop",
      web: "www.campojusto.coop",
    },
    coordenadas: {
      lat: -27.4853,
      lng: -55.1209,
    },
    plan: "premium",
  },
  {
    id: "4",
    nombre: "Biolife Argentina",
    ubicacion: "Rosario, Santa Fe",
    provincia: "Santa Fe",
    rubro: "Insumos",
    productos: ["Bioestimulantes", "Fertilizantes líquidos", "Extractos vegetales"],
    tipoProduccion: "Convencional",
    certificaciones: [],
    descripcion: "Líder en insumos biológicos para cultivos extensivos.",
    descripcionCompleta:
      "Biolife Argentina es una empresa dedicada a la producción de insumos biológicos para la agricultura. Nos especializamos en bioestimulantes, fertilizantes líquidos y extractos vegetales que mejoran el rendimiento de los cultivos de manera sustentable. Nuestro equipo de investigación trabaja constantemente en el desarrollo de nuevas formulaciones adaptadas a las necesidades específicas de los productores argentinos. Aunque trabajamos principalmente con agricultura convencional, nuestros productos son compatibles con sistemas de producción orgánica y agroecológica.",
    destacada: false,
    logo: "/placeholder.svg?height=200&width=200&text=Biolife",
    banner: "/placeholder.svg?height=400&width=1200&text=Biolife+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Laboratorio",
      "/placeholder.svg?height=300&width=400&text=Productos",
      "/placeholder.svg?height=300&width=400&text=Aplicación",
    ],
    contacto: {
      telefono: "+54 341 456-7890",
      whatsapp: "+54 9 341 234-5678",
      email: "ventas@biolife.com.ar",
      web: "www.biolife.com.ar",
    },
    coordenadas: {
      lat: -32.9442,
      lng: -60.6505,
    },
    plan: "free",
  },
  {
    id: "5",
    nombre: "VerdeMenta",
    ubicacion: "San Carlos, Salta",
    provincia: "Salta",
    rubro: "Productor",
    productos: ["Hierbas aromáticas", "Aceites esenciales"],
    tipoProduccion: "Orgánica",
    certificaciones: ["BPA"],
    descripcion: "Producción sustentable de aromáticas en el NOA argentino.",
    descripcionCompleta:
      "VerdeMenta es un emprendimiento familiar dedicado a la producción orgánica de hierbas aromáticas y aceites esenciales en los valles salteños. Cultivamos más de 15 variedades de hierbas aromáticas siguiendo prácticas de agricultura orgánica y cumpliendo con las Buenas Prácticas Agrícolas (BPA). Nuestros aceites esenciales son extraídos mediante destilación por arrastre de vapor, preservando todas las propiedades de las plantas. Trabajamos en armonía con el ecosistema local, promoviendo la biodiversidad y el uso responsable de los recursos naturales.",
    destacada: false,
    logo: "/placeholder.svg?height=200&width=200&text=VerdeMenta",
    banner: "/placeholder.svg?height=400&width=1200&text=VerdeMenta+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 3868 42-1234",
      whatsapp: "+54 9 3868 56-7890",
      email: "info@verdementa.com.ar",
      web: "www.verdementa.com.ar",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
  {
    id: "6",
    nombre: "AgroNexo",
    ubicacion: "Córdoba Capital",
    provincia: "Córdoba",
    rubro: "Comercio",
    productos: ["Intermediación", "E-commerce agro", "Consultoría de ventas"],
    tipoProduccion: "Convencional",
    certificaciones: [],
    descripcion: "Marketplace agroalimentario con foco en trazabilidad y tecnología.",
    descripcionCompleta:
      "AgroNexo es una plataforma digital que conecta a productores, distribuidores y compradores del sector agroalimentario. Ofrecemos servicios de intermediación comercial, una plataforma de e-commerce especializada en productos agrícolas y consultoría en estrategias de venta. Nuestra tecnología permite garantizar la trazabilidad de los productos desde el campo hasta el consumidor final. Trabajamos con todo tipo de productores, desde pequeños emprendimientos familiares hasta grandes empresas del sector, facilitando el comercio justo y transparente.",
    destacada: true,
    logo: "/placeholder.svg?height=200&width=200&text=AgroNexo",
    banner: "/placeholder.svg?height=400&width=1200&text=AgroNexo+Banner",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Plataforma",
      "/placeholder.svg?height=300&width=400&text=Equipo",
      "/placeholder.svg?height=300&width=400&text=Operaciones",
    ],
    contacto: {
      telefono: "+54 351 423-4567",
      whatsapp: "+54 9 351 789-0123",
      email: "contacto@agronexo.com",
      web: "www.agronexo.com",
    },
    coordenadas: {
      lat: -31.4201,
      lng: -64.1888,
    },
    plan: "premium",
  },
]
