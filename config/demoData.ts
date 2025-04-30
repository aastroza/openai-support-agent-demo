import { FAQExtract } from "@/stores/useDataStore";
import { Action } from "@/stores/useConversationStore";

export const AGENT_NAME = "VictorIA";

export const CUSTOMER_DETAILS = {
  name: "Janet Ciervo",
  id: "cus_28X44",
  orderNb: 8,
  signupDate: "2023-11-28",
};

export const DEFAULT_ACTION: Action = {
  name: "create_ticket",
  parameters: {
    user_id: CUSTOMER_DETAILS.id,
    type: "otro",
    details: "Necesita más ayuda con la solicitud",
  },
};

export const DEFAULT_ARTICLES: FAQExtract[] = [
  {
    title: "Lineamientos de interacción",
    content: `Tono, Empatía y Profesionalismo:
      Como representante, eres la voz de nuestra marca. Siempre:
      - Sé amable, paciente y empático.
      - Asume que la intención del cliente es positiva, incluso si expresa frustración.
      - Reconoce y valida sus preocupaciones antes de proporcionar soluciones.
      `,
    link: "/kb?section=interactions_guidelines",
    type: "knowledge_base",
    score: 0.9,
  },
  {
    title: "Chat de atención al cliente",
    content: `Si tienes alguna pregunta o necesitas ayuda, puedes contactarnos a través del chat de atención al cliente.
    Un representante de atención al cliente te ayudará con tus preguntas o inquietudes.
    Ten en cuenta que nuestros agentes están disponibles de lunes a sábado, de 9am a 6pm.
    `,
    link: "/faq?section=help_chat",
    type: "faq",
    score: 0.8,
  },
];

export const KB_FOLDERS = ["knowledge_base", "faq"];

const getDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};

export const USER_INFO = {
  name: "Janet Ciervo",
  email: "janet.ciervo@gmail.com",
  phone: "+1234567890",
  address: "Calle Principal 123, Ciudad Cualquiera, Chile",
  order_history: [
    "ORD1001",
    "ORD1002",
    "ORD1003",
    "ORD1004",
    "ORD1005",
    "ORD1006",
    "ORD1007",
  ],
};

export const DEMO_ORDERS = [
  {
    id: "ORD1001",
    date: getDate(1),
    status: "pendiente",
    items: [
      { product_id: "P003", name: "Reloj Inteligente", quantity: 1, price: 149.99 },
    ],
  },
  {
    id: "ORD1002",
    date: getDate(8),
    status: "completado",
    items: [
      {
        product_id: "P001",
        name: "Audífonos Inalámbricos",
        quantity: 1,
        price: 99.99,
      },
      {
        product_id: "P002",
        name: "Cargador Portátil",
        quantity: 1,
        price: 39.99,
      },
    ],
  },
  {
    id: "ORD1003",
    date: getDate(24),
    status: "enviado",
    tracking_number: "TRK123456789",
    items: [
      {
        product_id: "P004",
        name: "Parlante Bluetooth",
        quantity: 2,
        price: 59.99,
      },
    ],
  },
  {
    id: "ORD1004",
    date: getDate(28),
    status: "cancelado",
    cancellation_reason: "Cliente solicitó cancelación antes del procesamiento",
  },
  {
    id: "ORD1005",
    date: getDate(44),
    status: "reembolsado",
    refund_status: "procesando",
    refund_amount: 149.99,
    items: [
      { product_id: "P005", name: "Soporte para Laptop", quantity: 1, price: 149.99 },
    ],
  },
  {
    id: "ORD1006",
    date: getDate(96),
    status: "entregado",
    return_initiated: true,
    items: [
      {
        product_id: "P006",
        name: "Teclado Ergonómico",
        quantity: 1,
        price: 89.99,
      },
    ],
  },
  {
    id: "ORD1007",
    date: getDate(108),
    status: "completado",
    complaint: "Pedido entregado con producto dañado",
    items: [
      {
        product_id: "P007",
        name: "Auriculares con Cancelación de Ruido",
        quantity: 1,
        price: 129.99,
      },
    ],
  },
];
