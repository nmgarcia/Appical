export interface Licitacion {
    id: string
    titulo: string
    descripcion: string
    fechaPublicacion: string
    fechaCierre: string
    estado: "abierta" | "cerrada" | "adjudicada"
    categoria: string
    ubicacion: string
    productorId: string
    productorNombre: string
    cantidadOfertas: number
    presupuestoEstimado?: string
    requisitos?: string[]
    detalles?: string
  }
  
  export const categorias = [
    "Insumos Agrícolas",
    "Maquinaria",
    "Servicios de Transporte",
    "Servicios de Cosecha",
    "Almacenamiento",
    "Servicios Técnicos",
    "Productos Agrícolas",
    "Ganado",
  ]
  
  export const licitacionesMock: Licitacion[] = [
    {
      id: "1",
      titulo: "Compra de fertilizantes orgánicos para 50 hectáreas",
      descripcion: "Necesito fertilizantes orgánicos certificados para cultivo de soja en 50 hectáreas.",
      fechaPublicacion: "2025-05-10",
      fechaCierre: "2025-05-25",
      estado: "abierta",
      categoria: "Insumos Agrícolas",
      ubicacion: "Córdoba, Argentina",
      productorId: "prod-001",
      productorNombre: "Finca Orgánica El Amanecer",
      cantidadOfertas: 3,
      presupuestoEstimado: "$500.000 - $700.000",
      requisitos: [
        "Certificación orgánica SENASA",
        "Entrega en campo",
        "Plazo máximo de entrega: 15 días después de adjudicación",
      ],
      detalles:
        "Buscamos fertilizantes orgánicos de alta calidad para nuestro cultivo de soja. Necesitamos que el proveedor pueda garantizar la entrega en nuestro campo ubicado en la zona sur de Córdoba. El fertilizante debe tener certificación orgánica SENASA y ser adecuado para cultivo de soja. Preferimos proveedores con experiencia en agricultura orgánica.",
    },
    {
      id: "2",
      titulo: "Servicio de cosecha para 100 hectáreas de maíz",
      descripcion: "Busco servicio de cosecha para 100 hectáreas de maíz en la provincia de Buenos Aires.",
      fechaPublicacion: "2025-05-08",
      fechaCierre: "2025-05-20",
      estado: "abierta",
      categoria: "Servicios de Cosecha",
      ubicacion: "Pergamino, Buenos Aires",
      productorId: "prod-002",
      productorNombre: "Establecimiento Los Girasoles",
      cantidadOfertas: 5,
      presupuestoEstimado: "$800.000 - $1.200.000",
      requisitos: [
        "Maquinaria moderna con monitor de rendimiento",
        "Disponibilidad para la primera quincena de junio",
        "Experiencia comprobable en cosecha de maíz",
      ],
      detalles:
        "Necesitamos servicio de cosecha para nuestro campo de maíz de 100 hectáreas. La cosecha debe realizarse en la primera quincena de junio. Requerimos maquinaria moderna con monitor de rendimiento para poder obtener datos precisos. El campo está ubicado a 15 km de la ciudad de Pergamino, con buen acceso y caminos en buen estado.",
    },
    {
      id: "3",
      titulo: "Compra de 20 toneladas de semilla de trigo",
      descripcion: "Necesito adquirir 20 toneladas de semilla de trigo certificada para siembra.",
      fechaPublicacion: "2025-05-05",
      fechaCierre: "2025-05-18",
      estado: "abierta",
      categoria: "Insumos Agrícolas",
      ubicacion: "Rosario, Santa Fe",
      productorId: "prod-003",
      productorNombre: "Agrícola Santa Rosa",
      cantidadOfertas: 7,
      presupuestoEstimado: "$1.500.000 - $1.800.000",
      requisitos: [
        "Semilla certificada",
        "Variedad resistente a roya",
        "Poder germinativo superior al 90%",
        "Entrega antes del 10 de junio",
      ],
      detalles:
        "Buscamos proveedores de semilla de trigo certificada para nuestra próxima siembra. Necesitamos variedades resistentes a roya y con alto poder germinativo. La entrega debe realizarse en nuestro establecimiento ubicado en las afueras de Rosario antes del 10 de junio. Preferimos proveedores que puedan ofrecer asesoramiento técnico sobre la variedad.",
    },
    {
      id: "4",
      titulo: "Alquiler de tractor con implementos por 3 meses",
      descripcion: "Busco alquilar tractor con implementos para labores agrícolas durante 3 meses.",
      fechaPublicacion: "2025-05-12",
      fechaCierre: "2025-05-22",
      estado: "abierta",
      categoria: "Maquinaria",
      ubicacion: "Junín, Buenos Aires",
      productorId: "prod-004",
      productorNombre: "Campos del Sur",
      cantidadOfertas: 2,
      presupuestoEstimado: "$600.000 - $900.000",
      requisitos: [
        "Tractor de más de 100 HP",
        "Implementos: arado, sembradora y pulverizadora",
        "Buen estado de mantenimiento",
        "Disponibilidad inmediata",
      ],
      detalles:
        "Necesitamos alquilar un tractor con implementos para realizar labores agrícolas en nuestro campo. El período de alquiler sería de 3 meses, comenzando a principios de junio. Requerimos un tractor de más de 100 HP en buen estado, con arado, sembradora y pulverizadora. El proveedor debe encargarse del mantenimiento durante el período de alquiler.",
    },
    {
      id: "5",
      titulo: "Servicio de transporte para 500 toneladas de soja",
      descripcion: "Necesito servicio de transporte para 500 toneladas de soja desde campo a puerto.",
      fechaPublicacion: "2025-05-07",
      fechaCierre: "2025-05-19",
      estado: "abierta",
      categoria: "Servicios de Transporte",
      ubicacion: "Venado Tuerto, Santa Fe",
      productorId: "prod-005",
      productorNombre: "Agropecuaria El Trigal",
      cantidadOfertas: 8,
      presupuestoEstimado: "$1.200.000 - $1.500.000",
      requisitos: [
        "Camiones con lona y en buen estado",
        "Seguro de carga",
        "Disponibilidad para cargar en horarios coordinados",
        "Experiencia en transporte de granos",
      ],
      detalles:
        "Buscamos servicio de transporte para llevar nuestra producción de soja desde nuestro campo en Venado Tuerto hasta el puerto de Rosario. Son aproximadamente 500 toneladas que necesitamos transportar durante la última semana de junio. Requerimos camiones en buen estado, con lona y seguro de carga. El proveedor debe tener disponibilidad para coordinar horarios de carga según nuestras necesidades.",
    },
    {
      id: "6",
      titulo: "Construcción de silo para almacenamiento de 1000 toneladas",
      descripcion: "Busco constructor para silo de almacenamiento de granos con capacidad de 1000 toneladas.",
      fechaPublicacion: "2025-05-11",
      fechaCierre: "2025-06-10",
      estado: "abierta",
      categoria: "Almacenamiento",
      ubicacion: "Río Cuarto, Córdoba",
      productorId: "prod-006",
      productorNombre: "Establecimiento Don Pedro",
      cantidadOfertas: 4,
      presupuestoEstimado: "$5.000.000 - $7.000.000",
      requisitos: [
        "Experiencia comprobable en construcción de silos",
        "Materiales de primera calidad",
        "Garantía de la obra",
        "Plazo de entrega máximo: 3 meses",
      ],
      detalles:
        "Necesitamos construir un silo para almacenamiento de granos con capacidad para 1000 toneladas en nuestro establecimiento. Buscamos empresas con experiencia en este tipo de construcciones, que utilicen materiales de primera calidad y ofrezcan garantía por la obra. El plazo máximo de entrega es de 3 meses. Se valorarán propuestas que incluyan sistemas de monitoreo de temperatura y humedad.",
    },
    {
      id: "7",
      titulo: "Servicio de fumigación aérea para 200 hectáreas",
      descripcion: "Necesito servicio de fumigación aérea para 200 hectáreas de cultivo de girasol.",
      fechaPublicacion: "2025-05-09",
      fechaCierre: "2025-05-23",
      estado: "abierta",
      categoria: "Servicios Técnicos",
      ubicacion: "Balcarce, Buenos Aires",
      productorId: "prod-007",
      productorNombre: "Agrícola Los Cardales",
      cantidadOfertas: 3,
      presupuestoEstimado: "$400.000 - $600.000",
      requisitos: [
        "Habilitación para fumigación aérea",
        "Uso de productos autorizados",
        "Experiencia en cultivo de girasol",
        "Disponibilidad para la primera semana de junio",
      ],
      detalles:
        "Buscamos servicio de fumigación aérea para nuestro cultivo de girasol de 200 hectáreas. Necesitamos que el proveedor tenga todas las habilitaciones correspondientes y utilice productos autorizados. El servicio debe realizarse durante la primera semana de junio, dependiendo de las condiciones climáticas. Se requiere experiencia específica en cultivo de girasol.",
    },
    {
      id: "8",
      titulo: "Compra de 50 terneros para engorde",
      descripcion: "Busco 50 terneros de raza Aberdeen Angus para engorde, entre 180-220 kg.",
      fechaPublicacion: "2025-05-06",
      fechaCierre: "2025-05-21",
      estado: "abierta",
      categoria: "Ganado",
      ubicacion: "Tandil, Buenos Aires",
      productorId: "prod-008",
      productorNombre: "Cabaña El Manantial",
      cantidadOfertas: 6,
      presupuestoEstimado: "$3.000.000 - $3.500.000",
      requisitos: [
        "Raza Aberdeen Angus",
        "Peso entre 180-220 kg",
        "Sanidad al día (vacunaciones)",
        "Entrega en establecimiento",
      ],
      detalles:
        "Estamos interesados en adquirir 50 terneros de raza Aberdeen Angus para engorde. Buscamos animales con peso entre 180-220 kg, con sanidad al día (todas las vacunaciones correspondientes). Requerimos entrega en nuestro establecimiento ubicado en Tandil. Preferimos proveedores que puedan garantizar la calidad genética de los animales.",
    },
    {
      id: "9",
      titulo: "Instalación de sistema de riego por goteo para 30 hectáreas",
      descripcion: "Necesito proveedor para instalación de sistema de riego por goteo en 30 hectáreas de frutales.",
      fechaPublicacion: "2025-05-13",
      fechaCierre: "2025-06-05",
      estado: "abierta",
      categoria: "Servicios Técnicos",
      ubicacion: "San Rafael, Mendoza",
      productorId: "prod-009",
      productorNombre: "Finca Los Nogales",
      cantidadOfertas: 5,
      presupuestoEstimado: "$4.000.000 - $5.500.000",
      requisitos: [
        "Experiencia en instalación de riego por goteo",
        "Materiales de primera calidad",
        "Sistema automatizado",
        "Garantía mínima de 2 años",
      ],
      detalles:
        "Buscamos proveedor para la instalación de un sistema de riego por goteo en nuestra plantación de frutales de 30 hectáreas. Necesitamos un sistema automatizado, con materiales de primera calidad y garantía mínima de 2 años. El proveedor debe tener experiencia comprobable en instalaciones similares. Se valorarán propuestas que incluyan asesoramiento técnico posterior a la instalación.",
    },
    {
      id: "10",
      titulo: "Venta de 100 toneladas de maíz",
      descripcion: "Ofrezco 100 toneladas de maíz de primera calidad para entrega inmediata.",
      fechaPublicacion: "2025-05-14",
      fechaCierre: "2025-05-28",
      estado: "abierta",
      categoria: "Productos Agrícolas",
      ubicacion: "Marcos Juárez, Córdoba",
      productorId: "prod-010",
      productorNombre: "Establecimiento La Primavera",
      cantidadOfertas: 9,
      presupuestoEstimado: "Precio de mercado",
      requisitos: ["Pago contado o cheque a 30 días", "Retiro por cuenta del comprador", "Lotes mínimos de 20 toneladas"],
      detalles:
        "Ofrecemos 100 toneladas de maíz de primera calidad, cosecha 2025, con humedad controlada y libre de impurezas. Disponible para entrega inmediata en nuestro establecimiento en Marcos Juárez. Aceptamos pago contado o cheque a 30 días. El retiro debe ser por cuenta del comprador. Vendemos en lotes mínimos de 20 toneladas.",
    },
  ]
  