// ===================== CONFIGURACIÓN EDITABLE =====================
// Para cambiar un texto, un precio o agregar un pack, editá este archivo.
// Después guardá y subí el cambio a GitHub: la web se actualiza sola.

export const WHATSAPP = "5491153452958";      // 54 9 11 5345-2958
export const TELEFONO_VISIBLE = "+54 9 11 5345-2958";

export const GRUPOS = [
  { id: "todos", nombre: "Todos" },
  { id: "urgencias", nombre: "Urgencias ARCA" },
  { id: "optimizacion", nombre: "Optimización y Recupero" },
  { id: "automatizacion", nombre: "Automatizaciones" },
];

// Los precios quedan guardados pero no se muestran: la web dice "Consultar honorarios".
// Para mostrarlos, cambiá MOSTRAR_PRECIOS a true.
export const MOSTRAR_PRECIOS = false;

export const PACKS = [
  { id:1, grupo:"urgencias", icono:"gavel", categoria:"Urgencia Legal",
    titulo:"Tengo un litigio con ARCA", subtitulo:"Necesito un profesional altamente capacitado en tributación",
    entregable:"Te asigno un abogado tributarista que analiza la demanda/ejecución; el abogado aporta la estrategia probatoria y el patrocinio.",
    precio:"Desde $950.000", detallePrecio:"Honorario base + cuota litis",
    mensaje:"Hola Cra. Alejandra, tengo un litigio/juicio con ARCA y necesito evaluar con urgencia la defensa técnica y pericial (Pack 1)." },
  { id:2, grupo:"urgencias", icono:"mail", categoria:"Urgencia Fiscal",
    titulo:"Recibí un requerimiento de ARCA o me notificaron el inicio de una inspección", subtitulo:"Te digo qué piden exactamente y respondo por vos",
    entregable:"Lectura técnica de la orden de intervención, preparación de papeles de trabajo y contestación formal en término.",
    precio:"$380.000", detallePrecio:"Pago único",
    mensaje:"Hola Cra. Alejandra, recibí un requerimiento de ARCA o me notificaron el inicio de una inspección, y quiero que lo analices y prepares la respuesta (Pack 2)." },
  { id:3, grupo:"optimizacion", icono:"refund", categoria:"Recupero de Liquidez",
    titulo:"Creo que pagué de más", subtitulo:"Reviso los años no prescriptos y gestiono la repetición de impuestos",
    entregable:"Revisión retroactiva de percepciones, retenciones indebidas y saldos a favor (SIRCREB, ARBA, AGIP, ARCA) con plan de repetición/compensación.",
    precio:"$280.000", detallePrecio:"+ % sobre saldo recuperado",
    mensaje:"Hola Cra. Alejandra, creo que pagué impuestos de más en los últimos años y quiero solicitar la revisión para el recupero (Pack 3)." },
  { id:4, grupo:"optimizacion", icono:"percent", categoria:"Planificación Estratégica",
    titulo:"Quiero pagar menos el año que viene", subtitulo:"",
    entregable:"Planificación fiscal dentro del marco legal. Decisiones óptimas sobre inversiones, deducciones y flujo financiero.",
    precio:"$350.000 / mes", detallePrecio:"Abono asesoría",
    mensaje:"Hola Cra. Alejandra, quiero ordenar mi negocio para pagar menos impuestos de forma legal el próximo año (Pack 4)." },
  { id:5, grupo:"automatizacion", icono:"chart", categoria:"Control Financiero",
    titulo:"Vendo mucho pero no sé cuánto me queda limpio", subtitulo:"Tomá decisiones viendo tus márgenes reales en una sola pantalla",
    entregable:"Tablero ejecutivo con proyección del impacto impositivo antes de que cierre el mes.",
    precio:"$450.000", detallePrecio:"Implementación inicial",
    mensaje:"Hola Cra. Alejandra, necesito implementar el tablero de control de márgenes reales e impacto de impuestos (Pack 5)." },
  { id:6, grupo:"automatizacion", icono:"bank", categoria:"Automatización Pyme",
    titulo:"Paso más de 3 hs conciliando bancos y cobros", subtitulo:"Módulo automatizado de conciliación bancaria, cobros y retenciones",
    entregable:"Herramienta digital para cruzar extractos bancarios con facturas y detectar retenciones.",
    precio:"$650.000", detallePrecio:"Pago único llave en mano",
    mensaje:"Hola Cra. Alejandra, me interesa el módulo automatizado para conciliar bancos y retenciones (Pack 6)." },
  { id:7, grupo:"optimizacion", icono:"globe", categoria:"Tributación Internacional",
    titulo:"Vivo entre países", subtitulo:"Trabajo fuera, cobro en el exterior o recién llego a la Argentina",
    entregable:"Encuadre de residencia fiscal, doble imposición, regularización patrimonial y cobro de honorarios internacionales.",
    precio:"$400.000", detallePrecio:"Diagnóstico integral",
    mensaje:"Hola Cra. Alejandra, trabajo para el exterior / vivo entre países y necesito asesoramiento sobre residencia y tributación (Pack 7)." },
  { id:9, grupo:"auditoria", icono:"audit", categoria:"Auditoría",
    titulo:"Necesito un auditor en la administración", subtitulo:"",
    entregable:"Reviso tu administración y emito un informe.",
    precio:"Desde $100.000", detallePrecio:"Según alcance de la revisión",
    mensaje:"Hola Cra. Alejandra, necesito un auditor para revisar la administración y emitir el informe (Pack 9)." },
  { id:10, grupo:"urgencias", icono:"shield", categoria:"Para estudios contables",
    titulo:"Soporte técnico para estudios contables en inspecciones y ejecuciones fiscales", subtitulo:"Elaboramos tu defensa frente a ARCA y eventuales juicios posteriores.",
    entregable:"Armo la estrategia probatoria, el plan de pago y el descargo como soporte técnico para que vos lo presentes.",
    precio:"$80.000", detallePrecio:"",
    mensaje:"Hola Cra. Alejandra, tengo un estudio contable y necesito soporte técnico para la inspección o ejecución fiscal de un cliente (Pack 10)." },
  { id:11, grupo:"estudios", icono:"users", categoria:"Para estudios contables",
    titulo:"¿Necesitás un asistente contable?", subtitulo:"Te acompaño técnicamente.",
    entregable:"Asistencia contable y acompañamiento técnico para tu estudio, adaptados al volumen de tu cartera de clientes.",
    precio:"", detallePrecio:"",
    mensaje:"Hola Cra. Alejandra, tengo un estudio contable y necesito asistencia contable y acompañamiento técnico (Pack 11)." },
  { id:8, grupo:"todos", icono:"chat", categoria:"A Medida", otro:true,
    titulo:"Mi caso no está aquí", subtitulo:"Contame tu situación puntual y armo una propuesta a tu medida",
    entregable:"Sesión de diagnóstico gratuita.",
    precio:"Sin cargo", detallePrecio:"Sesión de diagnóstico gratuita",
    mensaje:"Hola Cra. Alejandra, mi caso es particular y no está entre los packs estándar. Quisiera coordinar una sesión de diagnóstico (Pack 8)." },
];
