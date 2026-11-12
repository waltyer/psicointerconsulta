export interface RouteCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tagColor: string;
  consistsOf: string;
  explore: string[];
  questions: string[];
  objective: string;
  interventions: string[];
  warning: string;
  isInstitutionalProtocol?: boolean;
}

export interface ToolCard {
  id: string;
  name: string;
  purpose: string;
  steps: string[];
  caution: string;
}

export interface ServiceCard {
  id: string;
  name: string;
  description: string;
  tips: string[];
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export const HOSPITAL_INFO = {
  name: "PSICOINTERCONSULTA",
  fullName: "Guía Rápida de Orientación para la Atención Psicológica por Interconsulta",
  institution: "Hospital Francisco de Paula Santander E.S.E.",
  location: "Santander de Quilichao, Cauca",
  version: "Versión digital interactiva - Guía de Bolsillo",
  targetAudience: "Estudiantes y practicantes de Psicología en formación clínica",
  disclaimer: "Esta guía es un recurso académico y orientador. No reemplaza la valoración profesional, la supervisión del psicólogo responsable, las decisiones del equipo tratante ni los protocolos institucionales vigentes del Hospital Francisco de Paula Santander E.S.E."
};

export const REFLECTIVE_QUOTES = [
  {
    chapter: "inicio",
    quote: "«Detrás de cada interconsulta hay una persona, no solamente una condición de salud.»"
  },
  {
    chapter: "antes",
    quote: "«Antes de intervenir, recuerda que cada persona tiene una historia que merece ser escuchada.»"
  },
  {
    chapter: "abordaje",
    quote: "«Una intervención significativa comienza con una escucha sin prejuicios.»"
  },
  {
    chapter: "valoracion",
    quote: "«No necesitas tener todas las respuestas; a veces, escuchar es el primer paso.»"
  },
  {
    chapter: "rutas",
    quote: "«Acompañar también significa respetar los silencios y la dignidad en momentos de dolor.»"
  },
  {
    chapter: "herramientas",
    quote: "«La empatía no consiste en sentir lo mismo, sino en intentar comprender al otro.»"
  },
  {
    chapter: "cierre",
    quote: "«Tu presencia puede brindar tranquilidad en medio de la incertidumbre.»"
  },
  {
    chapter: "registro",
    quote: "«Registrar con objetividad y respeto honra la experiencia del paciente y cuida la labor interdisciplinaria.»"
  },
  {
    chapter: "etica",
    quote: "«Cada encuentro es una oportunidad para aprender a acompañar con humanidad.»"
  }
];

export const PRACTITIONER_MOTIVATIONAL = [
  "«No tienes que saberlo todo desde el primer día; estás aquí para aprender, preguntar, reflexionar y crecer en cada encuentro.»",
  "«Cada interconsulta es una oportunidad para aprender algo nuevo, incluso cuando no tienes todas las respuestas.»",
  "«Confía en lo que has aprendido, reconoce tus límites y no dudes en pedir orientación cuando la necesites.»",
  "«Ser un buen profesional no significa ser perfecto, sino actuar con responsabilidad, respeto y disposición para aprender.»",
  "«No subestimes el valor de una escucha atenta: a veces, tu presencia puede hacer una diferencia importante.»",
  "«Preguntar no te hace menos capaz; demuestra compromiso con una atención responsable.»",
  "«Permítete aprender de los momentos difíciles; también forman parte de tu crecimiento profesional.»",
  "«No estás aquí para resolverlo todo, sino para brindar un acompañamiento respetuoso dentro de tus competencias.»",
  "«Celebra tus avances, por pequeños que parezcan. La confianza profesional también se construye paso a paso.»",
  "«Acompañar a otros requiere sensibilidad, pero también autocuidado. Tu bienestar importa.»"
];

export const CHAPTER_1_PREPARATION = {
  title: "1. Antes de iniciar",
  objective: "Preparar el abordaje y comprender el motivo de la solicitud antes del encuentro con el paciente.",
  whatToReview: [
    "Motivo de solicitud de interconsulta y profesional o servicio asistencial que la realiza.",
    "Información clínica pertinente y autorizada para comprender el contexto de atención.",
    "Condiciones actuales del paciente y posibilidades reales de comunicación (sedación, dolor, intubación, etc.).",
    "Necesidad de coordinar el momento de la intervención con el equipo asistencial (evitar coincidir con curaciones, administración de medicamentos o rondas médicas).",
    "Condiciones de privacidad, seguridad y disponibilidad de acompañantes en el entorno."
  ],
  whatToKeepInMind: [
    "La solicitud de interconsulta orienta el motivo inicial, pero NUNCA reemplaza la exploración directa.",
    "Evita anticipar conclusiones o juicios previos sobre el estado emocional del paciente.",
    "Ten presente el dolor, la fatiga, los procedimientos invasivos, barreras de comunicación u otras condiciones que puedan alterar el encuentro.",
    "Si el paciente no está en condiciones de participar, coordina con el equipo tratante y sigue las indicaciones institucionales."
  ]
};

export const CHAPTER_2_INITIAL_APPROACH = {
  title: "2. Abordaje inicial",
  objective: "Establecer un contacto respetuoso y explicar de manera sencilla el propósito del acompañamiento.",
  steps: [
    "Saluda cordialmente y preséntate indicando tu nombre y tu rol como estudiante/practicante de Psicología.",
    "Explica que el acercamiento se realiza por una solicitud de interconsulta médica o como parte del acompañamiento psicológico del hospital.",
    "Pregunta si la persona se encuentra en condiciones y desea conversar en ese momento (validar consentimiento y disposición).",
    "Explica el propósito, el alcance y los límites de confidencialidad de la intervención, según los lineamientos institucionales.",
    "Procura un espacio de privacidad (cerrar cortinas o puerta si es posible) y utiliza un lenguaje claro, cercano y respetuoso.",
    "Permite que el paciente exprese sus necesidades a su propio ritmo sin presionarlo."
  ],
  openingScript: "«Buenos días/tardes. Mi nombre es ______ y soy practicante de Psicología. Nos solicitaron realizar un acercamiento para conocer cómo se encuentra y saber si hay algo en lo que podamos acompañarle. ¿Está de acuerdo en conversar un momento?»"
};

export const CHAPTER_3_VALUATION = {
  title: "3. Valoración psicológica: aspectos por explorar",
  guideline: "La exploración debe ajustarse al motivo de interconsulta, la condición clínica y la disposición del paciente. No se trata de aplicar mecánicamente todas las preguntas, sino de guiar la conversación con empatía.",
  riskAlert: "ALERTA DE SEGURIDAD: Cuando aparezcan señales de riesgo para la integridad del paciente o de otras personas (ideación suicida activa, heteroagresividad o vulneración grave), el practicante debe comunicarlo inmediatamente al psicólogo supervisor o profesional responsable y activar la ruta institucional correspondiente. Esta guía no reemplaza los protocolos de valoración de riesgo.",
  areas: [
    {
      id: "emocional",
      name: "Estado emocional",
      icon: "HeartPulse",
      questions: [
        "¿Cómo se ha sentido emocionalmente durante los últimos días?",
        "¿Qué emociones han estado más presentes (tristeza, miedo, enojo, incertidumbre)?",
        "¿Qué es lo que más le preocupa en este momento?"
      ]
    },
    {
      id: "situacion",
      name: "Situación actual y hospitalización",
      icon: "Building2",
      questions: [
        "¿Cómo está viviendo esta situación de salud?",
        "¿Qué ha sido lo más difícil desde que se encuentra aquí en el hospital?",
        "¿Hay algo de su estado o procedimiento que necesite comprender o conversar?"
      ]
    },
    {
      id: "red",
      name: "Red de apoyo",
      icon: "Users",
      questions: [
        "¿Con quién cuenta en este momento?",
        "¿Cómo ha sido el acompañamiento de las personas cercanas o familiares?",
        "¿Se siente acompañado(a) y respaldado(a)?"
      ]
    },
    {
      id: "afrontamiento",
      name: "Afrontamiento",
      icon: "ShieldCheck",
      questions: [
        "¿Qué suele ayudarle cuando atraviesa momentos difíciles en su vida?",
        "¿Qué estrategias o actividades ha utilizado para manejar esta situación?",
        "¿Qué le gustaría que pudiera ayudarle ahora a sobrellevar este momento?"
      ]
    },
    {
      id: "necesidades",
      name: "Necesidades inmediatas",
      icon: "Clock",
      questions: [
        "¿Qué necesita en este momento para sentirse un poco más tranquilo(a)?",
        "¿Hay alguna preocupación que considere importante que el equipo conozca?",
        "¿Hay algo en este momento que le haga sentir inseguro(a) o en riesgo?"
      ]
    }
  ]
};

export const CHAPTER_4_ROUTES: RouteCard[] = [
  {
    id: "crisis-emocional",
    title: "Crisis emocional",
    subtitle: "Aumento significativo de malestar ante noticias o cambios",
    badge: "Frecuente",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    consistsOf: "Situación en la que una persona experimenta un aumento significativo del malestar emocional ante una noticia diagnóstica, un procedimiento médico, un cambio imprevisto en su estado de salud o una circunstancia personal estresante.",
    explore: [
      "Situación puntual o noticia que desencadenó el malestar.",
      "Emociones predominantes (angustia, llanto incontrolable, bloqueo, pánico).",
      "Necesidades inmediatas y percepción de seguridad personal.",
      "Recursos personales de calma y red de apoyo familiar disponible en el hospital.",
      "Señales de alerta que requieran comunicar o activar atención médica prioritaria."
    ],
    questions: [
      "¿Qué ha ocurrido y cómo lo está viviendo en este momento?",
      "¿Qué es lo que más le preocupa de todo lo que está pasando?",
      "¿Qué necesita en este instante para sentirse acompañado(a)?",
      "¿Con quién cuenta en este momento para recibir apoyo o a quién podemos llamar?"
    ],
    objective: "Ofrecer un espacio de escucha atenta y apoyo inicial (primeros auxilios psicológicos), reconocer necesidades inmediatas y orientar la continuidad de la atención de forma segura.",
    interventions: [
      "Mantén una actitud calmada, postura abierta, tono de voz pausado y respetuoso.",
      "Escucha sin interrumpir, sin apresurar el llanto ni minimizar la experiencia.",
      "Reconoce y valida las emociones expresadas («Es comprensible que se sienta así ante esta noticia»).",
      "Explora necesidades inmediatas prácticas (agua, avisar a un familiar, silencio, compañía).",
      "Coordina con el profesional responsable si se identifican señales de riesgo o necesidades que exceden el rol del practicante."
    ],
    warning: "RECUERDA: No prometer resultados clínicos, no minimizar el malestar («no llore», «tranquilo que todo va a salir bien») ni forzar al paciente a hablar si no lo desea. La contención emocional no sustituye la atención de urgencias ni la activación de protocolos institucionales cuando se requieran."
  },
  {
    id: "ive",
    title: "Interrupción Voluntaria del Embarazo (IVE)",
    subtitle: "Acompañamiento respetuoso centrado en la persona",
    badge: "Especial cuidado",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    consistsOf: "Acompañamiento psicológico a personas que atraviesan un proceso de interrupción voluntaria del embarazo conforme a la normativa colombiana vigente. La vivencia emocional es individual, diversa y no debe presuponerse de antemano.",
    explore: [
      "Cómo describe la paciente su experiencia y su estado emocional actual.",
      "Preocupaciones, dudas, temores o ambivalencias que desee expresar libremente.",
      "Red de apoyo real y condiciones de acompañamiento en el servicio.",
      "Necesidades de información u orientación dentro del alcance del rol psicológico.",
      "Posibles señales de riesgo, coacción, vulneración o malestar intenso que requieran atención multidisciplinaria."
    ],
    questions: [
      "¿Cómo se ha sentido durante este proceso y cómo ha sido su experiencia?",
      "¿Qué pensamientos o emociones han estado más presentes en estos días?",
      "¿Hay algo que le preocupe especialmente en este momento?",
      "¿Siente que cuenta con el apoyo de alguien cercano?",
      "¿Qué tipo de acompañamiento considera que necesita de nuestra parte?"
    ],
    objective: "Brindar acompañamiento respetuoso, cálido, sin juicios y centrado estrictamente en las necesidades y vivencias expresadas por la paciente.",
    interventions: [
      "Brinda escucha activa sin juzgar y valida las emociones manifestadas.",
      "Respeta de manera irrestricta la autonomía y las decisiones tomadas por la paciente.",
      "Explora necesidades de apoyo emocional y social sin inducir respuestas ni sesgar.",
      "Ofrece psicoeducación pertinente y comprensible sobre procesos adaptativos, sin sustituir la información médica.",
      "Orienta sobre recursos de apoyo comunitario o institucional y seguimiento cuando sea requerido."
    ],
    warning: "RECUERDA: Jamás imponer creencias personales, morales o religiosas; no cuestionar, culpabilizar ni dudar del relato; no presionar para tomar o revertir decisiones; no asumir que todas las pacientes experimentan culpa o sufrimiento, ni que todas lo viven de la misma forma. Cumplir estrictamente la sentencia y directrices de salud vigentes."
  },
  {
    id: "desregulacion-emocional",
    title: "Desregulación emocional",
    subtitle: "Apoyo para recuperar gradualmente el equilibrio y la calma",
    badge: "Frecuente",
    tagColor: "bg-sky-100 text-sky-800 border-sky-200",
    consistsOf: "Situación en la que la persona presenta dificultad para manejar la intensidad de sus emociones (desbordamiento, agitación leve, llanto incontenible o ira) y requiere acompañamiento para reconocer lo que le sucede y recuperar gradualmente la autorregulación.",
    explore: [
      "Emoción predominante y términos en que el paciente describe lo que siente.",
      "Situación previa o desencadenante inmediato si es posible identificarlo con seguridad.",
      "Intensidad y manifestaciones fisiológicas/conductuales del malestar.",
      "Estrategias personales que habitualmente le han ayudado a calmarse.",
      "Condiciones de seguridad en el entorno y posibles necesidades clínicas inmediatas."
    ],
    questions: [
      "¿Qué está sintiendo en este momento en su cuerpo y en sus pensamientos?",
      "¿Qué ocurrió justo antes de que comenzara a sentirse de esta forma?",
      "¿Qué suele ayudarle cuando en otras ocasiones ha sentido emociones tan fuertes?",
      "¿Qué necesita en este momento para sentirse un poco más tranquilo(a)?"
    ],
    objective: "Acompañar la identificación de emociones y necesidades, favoreciendo estrategias breves de regulación adaptadas al contexto hospitalario.",
    interventions: [
      "Habla con un tono calmado, pausado y utiliza frases breves y sencillas.",
      "Reduce estímulos ambientales cuando sea posible y seguro (cerrar cortina, moderar volumen, alejar curiosos).",
      "Escucha y valida sin confrontar, sin minimizar y sin discutir con el paciente.",
      "Ofrece una estrategia breve de regulación (como respiración pausada) SOLO si la persona está dispuesta y su condición médica lo permite.",
      "Solicita apoyo inmediato del equipo médico o de enfermería si hay agitación psicomotora intensa, alteración del estado de conciencia o riesgo para sí o para terceros."
    ],
    warning: "RECUERDA: Jamás sujetar físicamente, no acorralar, no confrontar ni aislar al paciente de forma forzada. Estas maniobras están estrictamente fuera del rol del practicante. La respiración guiada nunca debe imponerse y debe evitarse si genera mareo, hiperventilación o hay patología respiratoria/cardíaca previa."
  },
  {
    id: "codigo-rojo",
    title: "Código Rojo y activaciones institucionales",
    subtitle: "Actuación sujeta a confirmación oficial HFPS",
    badge: "Protocolo Institucional",
    tagColor: "bg-red-100 text-red-800 border-red-200",
    isInstitutionalProtocol: true,
    consistsOf: "Apartado destinado a orientar al practicante cuando la solicitud de interconsulta se relaciona con un código de emergencia o activación institucional en el hospital.",
    explore: [
      "Motivo exacto de la solicitud y código específico informado por el equipo de salud.",
      "Protocolo institucional vigente aplicable en el Hospital Francisco de Paula Santander E.S.E.",
      "Rol explícitamente asignado al profesional de Psicología y al practicante en supervisión.",
      "Responsable de coordinación del evento y canal directo de comunicación.",
      "Condiciones de seguridad del entorno y necesidades de acompañamiento a familiares."
    ],
    questions: [
      "¿Cuál es el motivo exacto de la activación informado por el servicio?",
      "¿Qué orientación específica ha brindado el equipo médico responsable o supervisor?",
      "¿Qué actuación corresponde al rol de Psicología según el protocolo oficial vigente del hospital?"
    ],
    objective: "Recordar que toda actuación durante una activación de emergencia debe ajustarse estrictamente al protocolo oficial institucional y a las indicaciones directas del psicólogo supervisor.",
    interventions: [
      "Confirmar con el equipo asistencial el código y el motivo de activación.",
      "Consultar el protocolo oficial vigente del Hospital Francisco de Paula Santander E.S.E.",
      "Identificar con claridad quién lidera la emergencia y cuál es el alcance del apoyo psicológico.",
      "Brindar acompañamiento únicamente dentro de las funciones autorizadas y bajo supervisión estricta.",
      "Registrar y comunicar detalladamente lo actuado según el procedimiento institucional."
    ],
    warning: "ADVERTENCIA EDITORIAL INSTITUCIONAL: NO INVENTAR la definición del código rojo, criterios de activación, tiempos, responsables ni procedimientos. Este apartado queda sujeto a validación y carga del documento oficial del HFPS. No se deben añadir otros códigos hasta que el hospital confirme formalmente su denominación y procedimiento."
  },
  {
    id: "acompanamiento-familiar",
    title: "Acompañamiento al paciente y su familia",
    subtitle: "Orientación vincular y fortalecimiento de la red de apoyo",
    badge: "Frecuente",
    tagColor: "bg-teal-100 text-teal-800 border-teal-200",
    consistsOf: "Orientación al paciente y, cuando corresponda y exista explícita autorización del mismo, a las personas que conforman su red de apoyo familiar o vincular cercana.",
    explore: [
      "Comprensión de la situación de salud por parte del paciente y la familia (sin sustituir la explicación médica).",
      "Reacciones emocionales del paciente y de sus acompañantes (desgaste del cuidador, miedo, culpa).",
      "Necesidades de información emocional, soporte práctico y organización familiar.",
      "Recursos de apoyo reales, tensiones o dificultades en la dinámica familiar.",
      "Voluntad explícita del paciente respecto a la participación de sus familiares en la conversación."
    ],
    questions: [
      "¿Cómo ha vivido su familia o personas cercanas esta situación de salud?",
      "¿Con quién puede contar durante los días de estancia en el hospital?",
      "¿Qué es lo que más les preocupa como familia en este momento?",
      "¿Qué tipo de orientación o acompañamiento consideran que les sería de mayor ayuda?"
    ],
    objective: "Favorecer el apoyo emocional mutuo, el cuidado del cuidador y la comunicación respetuosa, protegiendo siempre la voluntad y la privacidad del paciente.",
    interventions: [
      "Escuchar activamente las preocupaciones del paciente y su acompañante.",
      "Promover pautas de comunicación respetuosa, clara y empática entre ellos.",
      "Brindar psicoeducación sobre el desgaste emocional del cuidador y pautas de descanso rotativo.",
      "Reconocer las fortalezas de la red de apoyo e identificar posibles tensiones sin tomar partido.",
      "Orientar sobre continuidad de la atención, trabajo social o recursos de apoyo hospitalario cuando aplique."
    ],
    warning: "RECUERDA: Jamás compartir información clínica sin autorización expresa del paciente o debido fundamento legal/institucional. No asumir que la familia es siempre una fuente positiva de apoyo; explora primero la dinámica particular para evitar generar mayor malestar o situaciones de revictimización."
  }
];

export const CHAPTER_5_TOOLS: ToolCard[] = [
  {
    id: "escucha-activa",
    name: "1. Escucha activa",
    purpose: "Facilitar que la persona exprese libremente su experiencia, emociones y necesidades, mostrando genuina atención, disponibilidad y comprensión empática.",
    steps: [
      "Permitir pausas y silencios cómodos sin apresurarse a rellenarlos.",
      "Evitar interrupciones mientras el paciente relata su vivencia.",
      "Utilizar preguntas abiertas que inviten a reflexionar («¿Cómo ha sido para usted...?»).",
      "Parafrasear y resumir lo comprendido para asegurar sintonía («Si entendí bien, lo que más le genera inquietud es...»).",
      "Observar con atención las señales verbales y no verbales (postura, mirada, tono de voz)."
    ],
    caution: "Precaución: No convertir la conversación en un interrogatorio clínico mecánico ni apresurar el relato por afán de completar la ficha."
  },
  {
    id: "validacion-emocional",
    name: "2. Validación emocional",
    purpose: "Reconocer, legitimar y aceptar la experiencia emocional expresada por la persona, sin juzgarla, sin minimizarla y sin necesidad de coincidir con todas sus interpretaciones.",
    steps: [
      "Nombrar con prudencia y respeto lo que la persona manifiesta verbal o físicamente («Noto que esto le genera una gran tristeza»).",
      "Reconocer la dificultad inherente a la situación que atraviesa («Es completamente normal sentirse abrumado ante una cirugía imprevista»).",
      "Preguntar amablemente si se comprendió adecuadamente su sentir («¿Se siente así, o hay algo más que esté experimentando?»)."
    ],
    caution: "Precaución: Evitar a toda costa frases invalidantes como «no es para tanto», «tiene que ser fuerte por sus hijos», «no llore» o «todo pasa por algo»."
  },
  {
    id: "contencion-emocional",
    name: "3. Contención emocional",
    purpose: "Ofrecer presencia profesional, escucha estructurada y soporte inicial para mitigar el desbordamiento ante situaciones agudas de dolor o malestar.",
    steps: [
      "Presentarse con calidez y transmitir serenidad y disponibilidad.",
      "Mantener un tono de voz tranquilo, modulado y sereno.",
      "Escuchar activamente dejando que la persona descargue su angustia inicial.",
      "Identificar necesidades inmediatas concretas (comodidad física, compañía, información básica).",
      "Validar el sufrimiento y brindar certezas realistas sobre el acompañamiento.",
      "Articular apoyo con el equipo de salud si la condición lo demanda."
    ],
    caution: "Precaución: No prometer confidencialidad absoluta frente a situaciones de riesgo vital, ni intentar sustituir la atención especializada de psiquiatría o urgencias."
  },
  {
    id: "respiracion-consciente",
    name: "4. Respiración consciente",
    purpose: "Invitar a una pausa de respiración pausada y cómoda para favorecer la autorregulación autonómica, siempre que las condiciones médicas lo permitan.",
    steps: [
      "Preguntar amablemente si la persona desea intentar una pausa breve para respirar.",
      "Invitar a inhalar suavemente por la nariz y exhalar con calma por la boca a un ritmo natural.",
      "Evitar ritmos forzados, conteos rígidos o retenciones prolongadas de aire.",
      "Detener el ejercicio de inmediato si el paciente manifiesta incomodidad, mareo o desagrado."
    ],
    caution: "Precaución: Verificar previamente la condición clínica (contraindicado en dificultad respiratoria aguda, crisis asmática descompensada o dolor torácico). No aplicar mecánicamente."
  },
  {
    id: "psicoeducacion",
    name: "5. Psicoeducación",
    purpose: "Ofrecer información clara, comprensible y oportuna sobre aspectos emocionales, respuestas esperables ante la enfermedad y recursos de afrontamiento.",
    steps: [
      "Identificar qué necesita comprender la persona sobre lo que está sintiendo.",
      "Explicar con lenguaje sencillo y libre de tecnicismos los mecanismos del estrés y la adaptación hospitalaria.",
      "Verificar periódicamente la comprensión preguntando qué sentido le hace lo conversado.",
      "Aclarar con transparencia los límites del rol del practicante de psicología."
    ],
    caution: "Precaución: No brindar jamás explicaciones médicas, pronósticos o diagnósticos clínicos que corresponden exclusivamente al médico tratante."
  },
  {
    id: "red-apoyo",
    name: "6. Orientación a la red de apoyo",
    purpose: "Reconocer, explorar y fortalecer los apoyos familiares, sociales o comunitarios disponibles, respetando en todo momento la voluntad y privacidad del paciente.",
    steps: [
      "Explorar a quién identifica el paciente como figura de confianza o apoyo en su vida diaria.",
      "Preguntar qué tipo de ayuda concreta sería más útil en este momento (emocional, cuidado, económica, logística).",
      "Orientar a los familiares o acompañantes sobre formas asertivas de acompañamiento respetuoso."
    ],
    caution: "Precaución: No asumir que todos los familiares son protectores; en ocasiones la red familiar puede ser fuente de estrés o conflicto. Validar siempre con el paciente."
  }
];

export const CHAPTER_6_CLOSURE = {
  title: "6. Cierre de la atención",
  objective: "Finalizar el encuentro de forma respetuosa, verificando necesidades y orientando con claridad los pasos siguientes.",
  guidelines: [
    {
      title: "1. Síntesis breve",
      desc: "Realizar un resumen conciso de lo conversado durante la sesión, sin introducir deducciones o conclusiones que el paciente no haya formulado por sí mismo."
    },
    {
      title: "2. Verificación de necesidades inmediatas",
      desc: "Preguntar al paciente si desea agregar algo más antes de terminar o si tiene alguna necesidad pendiente que el equipo asistencial deba conocer."
    },
    {
      title: "3. Claridad sobre el alcance y próximos pasos",
      desc: "Explicar con honestidad, dentro del alcance del rol de practicante, qué acciones se coordinarán, si habrá una próxima visita o a qué profesional se comunicará la situación."
    },
    {
      title: "4. Articulación y continuidad",
      desc: "Coordinar la continuidad del seguimiento, remisión o interconsulta según el criterio del psicólogo supervisor y los procedimientos institucionales del HFPS."
    },
    {
      title: "5. Despedida respetuosa",
      desc: "Agradecer sinceramente el tiempo, la confianza y la disposición del paciente, cerrando el espacio con calidez y respeto."
    }
  ]
};

export const CHAPTER_7_REGISTRY = {
  title: "7. Registro de la atención por interconsulta",
  educationalNotice: "PROPÓSITO ESTRICTAMENTE EDUCATIVO: Este apartado enseña los elementos conceptuales y de redacción que suele contener una nota de interconsulta psicológica. El registro real debe realizarse ÚNICAMENTE en el sistema de historia clínica institucional autorizado por el hospital, siguiendo las indicaciones directas del supervisor.",
  structure: [
    { label: "Motivo de interconsulta", desc: "Motivo exacto informado en la solicitud médica." },
    { label: "Contexto del encuentro", desc: "Servicio hospitalario, momento de atención y condiciones relevantes del entorno." },
    { label: "Observación y estado emocional", desc: "Descripción objetiva del porte, actitud y estado afectivo observado durante la atención." },
    { label: "Información referida", desc: "Diferenciar con claridad lo expresado verbalmente por el paciente o su acompañante." },
    { label: "Intervención realizada", desc: "Describir con precisión técnica las estrategias efectivamente utilizadas (ej: escucha activa, validación, psicoeducación)." },
    { label: "Respuesta al abordaje", desc: "Registrar la receptividad y la respuesta emocional observada o expresada, sin exagerar resultados." },
    { label: "Recomendaciones y continuidad", desc: "Consignar orientaciones dadas, comunicación con el equipo de salud y sugerencias de seguimiento." }
  ],
  fictionalExample: "«Se realiza acercamiento psicológico por solicitud de interconsulta del servicio de Medicina Interna. Durante el encuentro se brinda espacio de escucha activa y acompañamiento emocional frente a diagnóstico reciente. Se exploran las preocupaciones manifestadas por la persona en relación con su hospitalización y estancia prolongada. Se realiza orientación sobre recursos de afrontamiento y se identifican necesidades de acompañamiento familiar. Paciente receptivo(a), expresa mayor tranquilidad al término del encuentro. Se informa al profesional responsable sobre los aspectos pertinentes y se sugiere continuidad de valoración según evolución médica.»",
  writingTips: [
    "Utilizar un lenguaje técnico, claro, respetuoso y estrictamente descriptivo.",
    "Diferenciar siempre lo expresado por el paciente («refiere...») de lo observado por el evaluador («se evidencia...»).",
    "Evitar juicios de valor, etiquetas morales («paciente conflictivo») y afirmaciones diagnósticas no sustentadas.",
    "Nunca registrar intervenciones que no se realizaron ni exagerar respuestas que no se observaron objetivamente.",
    "No incluir datos innecesarios de la intimidad o de terceros que no tengan pertinencia asistencial.",
    "Cumplir con rigor el secreto profesional y las normas de confidencialidad hospitalaria."
  ]
};

export const CHAPTER_8_SERVICES: ServiceCard[] = [
  {
    id: "hospitalizacion",
    name: "Hospitalización",
    description: "Atención a pacientes en salas o habitaciones de internación prolongada.",
    tips: [
      "Evalúa el estado general: dolor físico, fatiga, efectos de medicamentos o procedimientos recientes.",
      "Respeta la privacidad: procura cerrar cortinas o solicitar amablemente a visitas no esenciales que aguarden afuera si el paciente lo autoriza.",
      "Coordina con enfermería el momento oportuno de visita para no cruzarte con curaciones o rondas médicas.",
      "Ten presente el impacto del aislamiento, la pérdida de rutina y la incertidumbre por el alta."
    ]
  },
  {
    id: "urgencias",
    name: "Urgencias",
    description: "Ambiente de alta rotación, demandas agudas y sobrestimulación sensorial.",
    tips: [
      "Prioriza estrictamente las indicaciones del equipo médico asistencial; la atención psicológica nunca debe obstaculizar procedimientos vitales.",
      "Abordajes breves, puntuales y centrados en contención inicial y primeros auxilios emocionales.",
      "Verifica condiciones de seguridad física en todo momento (pasillos despejados, visibilidad).",
      "Evalúa y apoya la angustia de los familiares en salas de espera cuando sea pertinente y coordinado."
    ]
  },
  {
    id: "ginecologia",
    name: "Ginecología y Obstetricia",
    description: "Atención perinatal, partos, complicaciones obstétricas, pérdidas gestacionales e IVE.",
    tips: [
      "Garantiza un abordaje con máxima sensibilidad, delicadeza y respeto a la intimidad corporal y emocional.",
      "Emplea un lenguaje completamente neutral, no juzgador y libre de sesgos de género o maternidad idealizada.",
      "Explora las necesidades particulares de la paciente y respeta rigurosamente sus decisiones y autonomía.",
      "Coordina estrechamente con el equipo de ginecología y trabajo social."
    ]
  },
  {
    id: "consulta-externa",
    name: "Consulta Externa",
    description: "Atención ambulatoria programada para seguimiento o valoración inicial.",
    tips: [
      "Considera la puntualidad y el tiempo asignado por agenda para encuadrar la intervención.",
      "Clarifica el motivo de consulta y la expectativa del usuario frente a la atención psicológica.",
      "Promueve la adherencia al tratamiento y el desarrollo de metas de afrontamiento viables.",
      "Orienta adecuadamente los canales institucionales para citas de control o remisión interdisciplinaria."
    ]
  }
];

export const CHAPTER_9_ETHICS = {
  title: "9. Ética, seguridad y límites del rol",
  principles: [
    {
      title: "Dignidad y respeto",
      desc: "Reconocer el valor intrínseco de cada persona, sin discriminación por origen, género, creencia, etnia o condición social."
    },
    {
      title: "Autonomía",
      desc: "Respetar la autodeterminación del paciente, sus decisiones y su ritmo. Nunca coaccionar ni forzar intervenciones."
    },
    {
      title: "Confidencialidad y sus límites",
      desc: "Salvaguardar la privacidad de la información. Explicar desde el inicio los límites éticos y legales (riesgo inminente para la vida del paciente o de otros)."
    },
    {
      title: "Consentimiento informado y asentimiento",
      desc: "Informar de manera clara y sencilla el objetivo del encuentro y verificar la disposición voluntaria a participar."
    },
    {
      title: "Principio de no maleficencia",
      desc: "Abstenerse de realizar maniobras o intervenciones para las cuales no se posea competencia, autorización formal o condiciones adecuadas."
    },
    {
      title: "Límites del rol del practicante",
      desc: "Actuar estrictamente dentro de las competencias asignadas a la práctica formativa, siempre bajo supervisión docente y hospitalaria."
    },
    {
      title: "Gestión oportuna de la seguridad",
      desc: "Identificar y reportar de inmediato cualquier señal de riesgo o vulnerabilidad a través de las rutas institucionales oficiales."
    },
    {
      title: "Trabajo interdisciplinario",
      desc: "Reconocer y valorar la articulación con médicos, enfermeros, trabajadores sociales y especialistas, favoreciendo una atención integral."
    }
  ]
};

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Interconsulta psicológica",
    definition: "Solicitud formal de valoración, orientación o acompañamiento emitida entre profesionales o servicios hospitalarios para responder a necesidades emocionales de un paciente."
  },
  {
    term: "Escucha activa",
    definition: "Habilidad comunicativa orientada a atender de forma consciente y comprensiva el relato de la persona, captando tanto el contenido verbal como las emociones y el lenguaje no verbal."
  },
  {
    term: "Validación emocional",
    definition: "Actitud terapéutica de acogida y aceptación que reconoce que las emociones experimentadas por la persona son legítimas y comprensibles dadas sus circunstancias."
  },
  {
    term: "Contención emocional",
    definition: "Intervención breve de primeros auxilios psicológicos orientada a mitigar el desbordamiento o la angustia aguda, ofreciendo un entorno seguro, estructurado y empático."
  },
  {
    term: "Psicoeducación",
    definition: "Proceso pedagógico y clínico mediante el cual se brinda a la persona información accesible sobre procesos de salud, emociones y herramientas de afrontamiento."
  },
  {
    term: "Red de apoyo",
    definition: "Conjunto articulado de personas significativas (familiares, amigos, instituciones comunitarias) que proveen respaldo afectivo, práctico y social al individuo."
  },
  {
    term: "Afrontamiento",
    definition: "Estrategias y esfuerzos cognitivos, conductuales y emocionales que una persona moviliza para tolerar, dominar o reducir las demandas de una situación estresante."
  },
  {
    term: "IVE",
    definition: "Interrupción Voluntaria del Embarazo; derecho fundamental de salud sexual y reproductiva garantizado bajo el marco legal y jurisprudencial en Colombia."
  },
  {
    term: "Primeros Auxilios Psicológicos (PAP)",
    definition: "Técnica de intervención temprana de respuesta humana y de apoyo hacia una persona que está sufriendo o puede necesitar ayuda en una situación de crisis."
  }
];

export const VALIDATION_CHECKLIST = [
  { text: "El HFPS ha autorizado el uso de su nombre y, si corresponde, su logo institucional.", status: "Pendiente validación HFPS" },
  { text: "El supervisor docente y hospitalario revisó el contenido psicológico y su pertinencia para la práctica.", status: "Revisión académica" },
  { text: "Los códigos y rutas institucionales (especialmente Código Rojo) fueron confirmados con documentos oficiales vigentes.", status: "Pendiente validación HFPS" },
  { text: "La guía diferencia con total claridad la orientación general de los protocolos oficiales vinculantes.", status: "Cumplido" },
  { text: "No existe captura, almacenamiento ni transmisión de datos reales o identificables de pacientes.", status: "Cumplido (100% libre de datos)" },
  { text: "Los ejemplos clínicos son explícitamente ficticios y de carácter pedagógico.", status: "Cumplido" },
  { text: "La aplicación es responsiva, optimizada para computador, tableta y teléfonos móviles.", status: "Cumplido" },
  { text: "Es instalable como PWA en dispositivos móviles (Android / iOS) con soporte offline.", status: "Cumplido" },
  { text: "Buscador funcional instantáneo por palabras clave y términos clínicos.", status: "Cumplido" }
];

