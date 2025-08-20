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
    nombre: "Desde el llano",
    ubicacion: "Bella Italia, Rafaela",
    provincia: "Santa Fe",
    rubro: "Distribuidor",
    productos: [ "Asesoría técnica"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Insumos, asesoramiento y desarrollo",
    descripcionCompleta:
      " se especializa en la producción de frutas y hortalizas bajo el concepto de agricultura urbana. ",
    destacada: true,
    logo: "/desdeelllano-logo.png?height=200&width=200&text=Desde+el+llano",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Instalaciones",
      "/placeholder.svg?height=300&width=400&text=Productos",
      "/placeholder.svg?height=300&width=400&text=Equipo",
    ],
    contacto: {
      telefono: "+54 3492-389707",
      whatsapp: "--",
      email: "dschonfeld@desdeelllano.com",
      web: "https://www.instagram.com/desde_el_llano?igsh=MXRsazVjZzJic3R0eA==",
    },
    coordenadas: {
      lat: -31.2667845002985,
      lng:-61.436987699999996,
    },
    plan: "premium",
  },
  {
    id: "2",
    nombre: "Verde Agua",
    ubicacion: "Cuenca 1441, Quilmes ",
    provincia: "Buenos Aires",
    rubro: "Productor",
    productos: ["vegetales hidropónicos", "insumos hidropónicos"],
    tipoProduccion: "Hidroponía",
    certificaciones: [],
    descripcion: " empresa argentina que promueve la agricultura sustentable en entornos urbanos y rurales. Su enfoque principal es la producción y comercialización de productos para la hidroponía",
    descripcionCompleta:
      "es una empresa argentina líder en la producción de vegetales hidropónicos y en la provisión de insumos para este tipo de cultivo. ",
    destacada: false,
    logo: "/logoverdeagua.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Sistemas+NFT",
      "/placeholder.svg?height=300&width=400&text=Automatización",
      "/placeholder.svg?height=300&width=400&text=Laboratorio",
    ],
    contacto: {
      telefono: "+54 9 11 7367-4256",
      whatsapp: "--",
      email: "info@verdeagua.com.ar",
      web: "https://www.verdeagua.com.ar/"
    },
    coordenadas: {
      lat: -32.9267,
      lng: -68.8272,
    },
    plan: "destacado",
  },
  {
    id: "3",
    nombre: "Asociación Hidropónica Argentina",
    ubicacion: "Saavedra 3246, Santa Fe",
    provincia: "Santa Fe",
    rubro: "Asociación",
    productos: ["-"],
    tipoProduccion: "Hidroponía",
    certificaciones: [""],
    descripcion: "Un espacio de divulgación técnica, experiencia e innovación.",
    descripcionCompleta:
      "Un espacio de divulgación técnica, experiencia e innovación, para fortalecer y potenciar el sector hidropónico argentino.",
    destacada: true,
    logo: "/logo_asociacionhidroponica.png",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Cooperativa",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 9 362 528-9001",
      whatsapp: "",
      email: "info@asociacionhidroponica.com.ar",
      web: "https://asociacionhidroponica.com.ar/",
    },
    coordenadas: {
      lat: -27.4853,
      lng: -55.1209,
    },
    plan: "premium",
  },
  {
    id: "4",
    nombre: "EnBio",
    ubicacion: "Rafaela, Santa Fe",
    provincia: "Santa Fe",
    rubro: "Insumos",
    productos: ["Bioestimulantes", "Fertilizantes líquidos", "Extractos vegetales"],
    tipoProduccion: "Fertilizantes orgánicos",
    certificaciones: [],
    descripcion: "empresa argentina que promueve la agricultura sustentable en entornos urbanos y rurales.",
    descripcionCompleta:
      "Enbio es una empresa que se especializa en la producción de enmiendas orgánicas y bioestimulantes para la agricultura. Su objetivo es mejorar la salud y la fertilidad de los suelos, así como la nutrición de los cultivos, mediante productos de origen biológico.",
    destacada: false,
    logo: "/logoenbio",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Laboratorio",
      "/placeholder.svg?height=300&width=400&text=Productos",
      "/placeholder.svg?height=300&width=400&text=Aplicación",
    ],
    contacto: {
      telefono: "+54 03492 15304918",
      whatsapp: "",
      email: "dschonfeld@enbio.com.ar",
      web: "http://www.enbio.com.ar/",
    },
    coordenadas: {
      lat: -32.9442,
      lng: -60.6505,
    },
    plan: "free",
  },
  {
    id: "5",
    nombre: "Sustentagro",
    ubicacion: "San Carlos, Salta",
    provincia: "Salta",
    rubro: "",
    productos: [""],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Soluciones orgánicas",
    descripcionCompleta:
      "se dedica a la explotación agrícola-ganadera. Su objeto social abarca una amplia gama de actividades, incluyendo la siembra y cosecha, el acopio, la comercialización y exportación de cereales, granos, frutas, productos vitivinícolas y forestales.",
    destacada: false,
    logo: "/sustentagrosrllogo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 3868 42-1234",
      whatsapp: "+54 9 3868 56-7890",
      email: "info@verdementa.com.ar",
      web: "https://www.instagram.com/sustentagrosrl/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
  {
    id: "6",
    nombre: "GWALL",
    ubicacion: "alferez sobral 3588, Buenos Aires",
    provincia: "Buenos Aires",
    rubro: "Diseño y Jardin",
    productos: [ "Consultoría de ventas"],
    tipoProduccion: "",
    certificaciones: [],
    descripcion: "Diseño y Jardin",
    descripcionCompleta:
      " líder en el diseño, construcción e instalación de jardines verticales y terrazas verdes. ",
    destacada: true,
    logo: "/logogwall.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Plataforma",
      "/placeholder.svg?height=300&width=400&text=Equipo",
      "/placeholder.svg?height=300&width=400&text=Operaciones",
    ],
    contacto: {
      telefono: "+5491151185281",
      whatsapp: "",
      email: "comercial@gwall.com.ar",
      web: "https://gwall.com.ar/",
    },
    coordenadas: {
      lat: -31.4201,
      lng: -64.1888,
    },
    plan: "premium",
  },
  {
    id: "7",
    nombre: "AgroAzul Hidroponia",
    ubicacion: "Las Colonias",
    provincia: "Corrientes",
    rubro: "Insumos para Hidroponía",
    productos: ["Asesoramiento", "Consultoría de ventas"],
    tipoProduccion: "Hidroponía",
    certificaciones: [],
    descripcion: "proveedor integral de insumos y tecnología para hidroponía.",
    descripcionCompleta:
      " se dedica a la provisión de insumos y equipos para el sector agropecuario, con un enfoque particular en la hidroponía.",
    destacada: true,
    logo: "/logoagroazul.png",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Plataforma",
      "/placeholder.svg?height=300&width=400&text=Equipo",
      "/placeholder.svg?height=300&width=400&text=Operaciones",
    ],
    contacto: {
      telefono: "+5493765061693",
      whatsapp: "",
      email: "contacto@agroazul.com.ar",
      web: "https://agroazulshop.kuder.com.ar/",
    },
    coordenadas: {
      lat: -31.4201,
      lng: -64.1888,
    },
    plan: "premium",
  },
    {
    id: "8",
    nombre: "Suagro Srl",
    ubicacion: " Ruta provincial 1, km 85,5, Helvecia",
    provincia: "Santa Fe",
    rubro: "Semillas, asesoramiento",
    productos: ["asesoramiento", "semillas"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Soluciones orgánicas para potenciar tus cultivos",
    descripcionCompleta:
      "se dedica a la venta de productos y soluciones para la producción de cultivos hortícolas.",
    destacada: false,
    logo: "/logosuagro.svg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+5493405618510",
      whatsapp: "+5493405618510",
      email: "info@suagrosrl.com.ar",
      web: "https://suagrosrl.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
    {
    id: "9",
    nombre: "HIDROTAK",
    ubicacion: "",
    provincia: "",
    rubro: "",
    productos: ["huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Huerta e Insumos",
    descripcionCompleta:
      "venta de huertas urbanas y productos relacionados con la hidroponía, una técnica de cultivo sin tierra. Su objetivo es ayudar a las personas a cultivar sus propios alimentos de forma ecológica, sin el uso de pesticidas.",
    destacada: false,
    logo: "/logohidrotak.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "",
      whatsapp: "",
      email: "contactohidrotak@gmail.com",
      web: "https://www.instagram.com/hidro.tak/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "10",
    nombre: "Klasmann & Dynamics",
    ubicacion: "Vicente Lopez, Buenos Aires",
    provincia: "Buenos Aires",
    rubro: "Mayorista de Sustratos",
    productos: ["sustratos", "insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Huerta e Insumos",
    descripcionCompleta:
      "empresa que se especializa en la venta de sustratos y otros productos para el cultivo.",
    destacada: false,
    logo: "/logoagriservice.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "(+54 11) 4788 0330",
      whatsapp: "",
      email: "info@agriservice.com.ar",
      web: "https://www.agriservice.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "11",
    nombre: "Florensa Argentina",
    ubicacion: "Umberto Primo",
    provincia: "Cordoba",
    rubro: "Semillera",
    productos: ["huerta e insumos", "semillas"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Huerta, semillas e Insumos",
    descripcionCompleta:
      "dedicada a la producción, importación y exportación de semillas.",
    destacada: false,
    logo: "/logoflorensa.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: " +54 (351) 496-1500",
      whatsapp: "",
      email: " info@florensa.com.ar",
      web: "https://www.instagram.com/florensa.lineahogar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "12",
    nombre: "Greenbot",
    ubicacion: "Besares 4309, Saavedra",
    provincia: "Buenos Aires",
    rubro: "tecnología",
    productos: ["Inteligencia en Riego"],
    tipoProduccion: "tecnología",
    certificaciones: [""],
    descripcion: "dispositivos de riego inteligente",
    descripcionCompleta:
      "se especializa en la creación de dispositivos de riego inteligente basados en el Internet de las Cosas (IoT).",
    destacada: false,
    logo: "/logogreenbot.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "",
      whatsapp: "",
      email: "info@greenbot.com.ar",
      web: "http://greenbot.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "13",
    nombre: "SATIA S.R.L.",
    ubicacion: "Av. Álvarez Thomas 1386, CABA",
    provincia: "Buenos Aires",
    rubro: "Productor ",
    productos: ["Tecnologia ", "sustratos", "insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Sustratos e Insumos de alta calidad",
    descripcionCompleta:
      "empresa argentina que se especializa en la fabricación y venta de sustratos de alta calidad y otros insumos para el cultivo.",
    destacada: false,
    logo: "/logosatia.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "",
      whatsapp: "",
      email: " info@satiacultivos.com",
      web: "http://satiacultivos.com/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "14",
    nombre: "Garde, Giusti y Chuchuy S.A.",
    ubicacion: "Avenida Córdoba 6365",
    provincia: "Buenos Aires",
    rubro: "Semillera",
    productos: ["Semillas, huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Produccion y comercialización de semillas",
    descripcionCompleta:
      "reconocida empresa argentina en el sector agropecuario, dedicada a la producción, importación y comercialización de semillas.",
    destacada: false,
    logo: "/logoggch.svg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "(011) 4553-0631, (011) 4555-1818",
      whatsapp: "",
      email: "ventas@gardesemillas.com.ar",
      web: "https://www.ggchsemillas.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "15",
    nombre: "FFO Enmiendas",
    ubicacion: "San carlos Sud",
    provincia: "Santa Fe",
    rubro: "Fertilizantes",
    productos: ["Fertilizantes, huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "elaboración y comercialización de una enmienda biológica líquida",
    descripcionCompleta:
      " se especializa en la elaboración y comercialización de una enmienda biológica líquida que actúa como bioestimulante para plantas.",
    destacada: false,
    logo: "/ffologo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 03402-155-01755",
      whatsapp: "",
      email: "comunicacion@ffo-sa.com",
      web: "https://ffo-sa.com/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "16",
    nombre: "Rijk Zwaan Argentina",
    ubicacion: "Pico 1641 10B, CABA",
    provincia: "Buenos Aires",
    rubro: "Semillera",
    productos: ["semillas, huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Investigacion y desarrollo de semillas hortícolas",
    descripcionCompleta:
      " dedicada a la investigación,desarrollo y comercialización de semillas hortícolas.",
    destacada: false,
    logo: "RijkZwaanArgentinalogo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "",
      whatsapp: "",
      email: "info@rijkzwaan.com.ar",
      web: "https://www.rijkzwaan.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "17",
    nombre: "Ing. Carluccio",
    ubicacion: "",
    provincia: "Buenos Aires",
    rubro: "Ingenieria",
    productos: ["Asesoramiento, Soluciones tecnológicas"],
    tipoProduccion: "",
    certificaciones: [""],
    descripcion: "Optimizacion y control de cultivos",
    descripcionCompleta:
      "Optimizar los rendimientos de las siembras, mejorar la salud de los suelos y controlar plagas y malezas, utilizando tecnologías y prácticas sostenibles.",
    destacada: false,
    logo: "carlucciologo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 116-435-8328",
      whatsapp: "",
      email: "info@ingcarluccio.com.ar",
      web: "http://www.ingcarluccio.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "18",
    nombre: "XYPNA",
    ubicacion: "Rio Cuarto, Córdoba",
    provincia: "Cordoba",
    rubro: "",
    productos: ["Jardin, decoración, huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Decoración y Jardín",
    descripcionCompleta:
      "Transforma tu espacio con la naturaleza sin preocupaciones. Descubre nuestros jardines verticales - cuadros vivos de PVC con luz LED y riego mínimo. ",
    destacada: false,
    logo: "/xypnalogo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 358 4200588",
      whatsapp: "",
      email: "hola@xypna.com.ar",
      web: "https://xypna.mitiendanube.com/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "19",
    nombre: "Summit Agro Argentina",
    ubicacion: "Carlos Pellegrini 719, Piso 8, CABA",
    provincia: "Buenos Aires",
    rubro: "Fitosanitarios",
    productos: ["huerta e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "comercializacion y desarrollo de productos fitosanitarios",
    descripcionCompleta:
      "especializada en el desarrollo, producción y comercialización de productos fitosanitarios para el sector agrícola. ",
    destacada: false,
    logo: "summitagrologo.jpg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 9 0810-333-7866",
      whatsapp: "",
      email: "org@summit-agro.com",
      web: "https://summit-agro.com/ar/es/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
   {
    id: "20",
    nombre: "Bejo Argentina",
    ubicacion: "Cuba 3801, CABA",
    provincia: "Buenos Aires",
    rubro: "Semillera",
    productos: ["huerta, semillas e insumos"],
    tipoProduccion: "Orgánica",
    certificaciones: [""],
    descripcion: "Producción y comercialización de semillas de hortalizas",
    descripcionCompleta:
      "compañía de origen holandés especializada en la mejora genética, producción y comercialización de semillas de hortalizas. La filial en Argentina, Bejo Semillas Argentinas S.A., se enfoca en proveer a los productores locales variedades híbridas de alta calidad, con características mejoradas en términos de rendimiento, resistencia a enfermedades y sabor.",
    destacada: false,
    logo: "/Bejologo.svg",
    banner: "/bannerprovisorio.jpg",
    galeria: [
      "/placeholder.svg?height=300&width=400&text=Cultivos",
      "/placeholder.svg?height=300&width=400&text=Destilación",
      "/placeholder.svg?height=300&width=400&text=Productos",
    ],
    contacto: {
      telefono: "+54 911 21601986",
      whatsapp: "",
      email: "info@bejosemillas.com.ar",
      web: "https://www.bejosemillas.com.ar/",
    },
    coordenadas: {
      lat: -25.9,
      lng: -65.9333,
    },
    plan: "destacado",
  },
]
