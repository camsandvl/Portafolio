export const CASES = [
  {
    slug: 'havit',
    title: 'Havit',
    color: 'var(--teal)',
    image: './assets/cover-havit.png',
    logo: './assets/logo-teal.png',
    label: 'Behavioral Design · UX/UI Design · Frontend Development',
    description: 'Haciendo visible el esfuerzo detrás de cada meta.',
    meta: {
      team: '6 miembros',
      timeline: '6 meses · En curso',
      tools: 'Figma, React Native',
      platform: 'Aplicación móvil',
    },
    sectionImages: {
      research: { src: './assets/empathy-map-havit.png', width: '40%' },
    },
    sections: {
      research: [
        { type: 'paragraph', text: 'Entrevistamos a personas con distintos niveles de experiencia en la actividad física para comprender qué factores afectan la creación y mantenimiento de hábitos saludables.' },
        { type: 'subtitle', text: 'Las barreras del día a día interrumpen la rutina' },
        { type: 'paragraph', text: 'Factores como el tiempo, el tráfico y los horarios cambiantes dificultan integrar el ejercicio en la vida cotidiana.' },
        { type: 'subtitle', text: 'La comparación puede desmotivar' },
        { type: 'paragraph', text: 'Muchos usuarios relacionaron la comparación con otras personas con sentimientos de frustración y abandono de sus objetivos.' },
        { type: 'subtitle', text: 'El acompañamiento fortalece el compromiso' },
        { type: 'paragraph', text: 'Entrenar con otras personas o sentirse acompañado aumentaba la motivación y la sensación de responsabilidad.' },
      ],
      iterations: [
        { type: 'paragraph', text: 'A través de tres ciclos de retroalimentación con usuarios, refinamos la experiencia para hacerla más clara, motivadora y adaptable a distintos perfiles.' },
        { type: 'table', headers: ['Retroalimentación de usuarios', 'Iteración realizada'], rows: [
          ['El dashboard mostraba muy poco contexto sobre el progreso.', 'Incorporamos días completados, tiempo restante y el avance de amigos para reforzar la sensación de progreso.'],
          ['La búsqueda de ejercicios necesitaba filtros más específicos.', 'Incorporamos nuevas categorías de búsqueda para facilitar la exploración.'],
          ['El ícono de Rest Day no comunicaba claramente su función.', 'Rediseñamos la iconografía para hacer la acción más intuitiva y fácil de identificar.'],
          ['El perfil ofrecía poca identidad y personalización.', 'Incorporamos intereses, insignias y una organización más clara para reflejar mejor el perfil de cada usuario.'],
        ]},
        { type: 'columns', items: [
          { image: './assets/search-note-low-fi.png', label: 'Wireframe de pantalla de búsqueda y nota de retroalimentación de usuario' },
          { image: './assets/profile-note-low-fi.png', label: 'Wireframe de pantalla de perfil y nota de retroalimentación de usuario' },
        ]},
      ],
      decisions: [
        { type: 'paragraph', text: 'A partir de los hallazgos de investigación, definimos principios de diseño enfocados en facilitar la creación de hábitos sostenibles, más que únicamente registrar actividad física.' },
        { type: 'columns', labelMinHeight: '3.5rem', items: [
          { image: './assets/home-havit-low-fi.png',      label: 'Wireframe — inicio: recordatorio de reto activo y posts de amigos', subtitle: 'Diseñar para crear hábitos',           text: 'La experiencia prioriza la constancia mediante retos progresivos, seguimiento diario y recordatorios que ayudan a mantener el compromiso a largo plazo.' },
          { image: './assets/spaces-havit-low-fi.png',    label: 'Wireframe — chats y espacios de entrenamiento compartido',                          subtitle: 'Fomentar el acompañamiento positivo',  text: 'Incorporamos comunidades, chats y retos compartidos para fortalecer el compromiso entre usuarios sin recurrir a dinámicas competitivas.' },
          { image: './assets/rest-days-havit-low-fi.png', label: 'Wireframe — selección de días de descanso dentro del reto',                         subtitle: 'Adaptarse a la rutina del usuario',    text: 'Los retos pueden personalizarse según objetivos, duración y contexto, permitiendo integrar el ejercicio en diferentes estilos de vida.' },
          { image: './assets/library-havit-low-fi.png',   label: 'Wireframe — galería de fotos de progreso personal',                                 subtitle: 'Celebrar el progreso personal',        text: 'El progreso se visualiza mediante fotografías, registros y avances individuales, evitando comparaciones que puedan afectar la motivación.' },
        ]},
      ],
      final: [
        { type: 'paragraph', text: 'El diseño final integra los hallazgos de investigación, las decisiones de diseño y las iteraciones realizadas durante el proyecto para ofrecer una experiencia más clara, flexible y centrada en la formación de hábitos saludables. Cada pantalla fue refinada a partir de la retroalimentación de usuarios, priorizando la usabilidad, la motivación y una interacción intuitiva.' },
        { type: 'columns', clip: 6, items: [
          { image: './assets/home-havit.png',      label: 'Inicio' },
          { image: './assets/spaces-havit.png',    label: 'Chats/Espacios' },
          { image: './assets/rest-days-havit.png', label: 'Días de descanso' },
          { image: './assets/library-havit.png',   label: 'Biblioteca de fotos de constancia' },
        ]},
        { type: 'columns', columns: 4, clip: 6, items: [
          { image: './assets/perfil-havit.png',  label: 'Perfil' },
          { image: './assets/search-havit.png',  label: 'Búsqueda' },
        ]},
      ],
      results: [
        { type: 'table', headers: ['Impacto', 'Aprendizajes'], rows: [
          ['Se consolidó una experiencia centrada en la creación de hábitos saludables, más allá del simple registro de actividad física.', 'La motivación inicia el cambio, pero la constancia se construye mediante iteración, acompañamiento y experiencias adaptadas al usuario.'],
          ['Las decisiones de diseño evolucionaron continuamente a partir de la retroalimentación de usuarios y pruebas de usabilidad.', 'Comprendí la importancia de validar cada decisión con usuarios antes de considerarla una solución definitiva.'],
          ['El resultado final integró personalización, seguimiento del progreso y acompañamiento social en una experiencia coherente.', 'Diseñar para el cambio de comportamiento requiere comprender las necesidades emocionales tanto como las funcionales.'],
        ]},
      ],
      problem: [
        { type: 'table', rows: [
          ['Problema', 'Muchas personas desean mantener un estilo de vida activo, pero tienen dificultades para sostener una rutina de ejercicio de forma constante. Factores como la desmotivación, la falta de compromiso y el poco apoyo social afectan la creación de hábitos saludables.'],
          ['Reto de UX', '¿Cómo podríamos ayudar a las personas a mantener la motivación y la constancia en sus rutinas de ejercicio mediante una experiencia personalizada y motivadora?'],
          ['Nuestra solución', 'Diseñamos Havit, una aplicación que ayuda a las personas a construir hábitos de actividad física mediante retos personalizados, seguimiento del progreso y espacios de acompañamiento social. La experiencia permite crear o unirse a retos, registrar avances y compartir el progreso con otros usuarios para fortalecer la constancia a largo plazo.'],
        ]},
      ],
    },
  },
  {
    slug: 'maden',
    title: 'Maden Platform',
    color: 'var(--coral)',
    image: './assets/cover-maden.png',
    logo: './assets/logo-coral.png',
    label: 'Product Design · Workflow Optimization · Frontend Development',
    description: 'Proyecto realizado para una empresa del sector manufacturero.',
    meta: {
      team: '3 miembros',
      timeline: '3 meses · En curso',
      tools: 'Figma, Claude Design, Next.js',
      platform: 'Sistema web',
    },
    sectionTitles: {
      problem: 'Contexto',
      research: 'Comprendiendo el problema',
      decisions: 'Arquitectura del producto',
      iterations: 'Iteraciones',
    },
    sectionImages: {},
    sections: {
      problem: [
        { type: 'table', rows: [
          ['Proyecto', 'Este proyecto consistió en el diseño de una plataforma interna enfocada en optimizar procesos operativos y transformar flujos complejos en una experiencia clara y eficiente para distintos tipos de usuario.'],
          ['Reto de producto', '¿Cómo transformar procesos complejos y dependientes de múltiples áreas en una experiencia clara, eficiente y adaptada a distintos tipos de usuarios?'],
          ['Mi rol', 'Definí la arquitectura del producto, los flujos de usuario, la estructura de información y las decisiones de experiencia. Para acelerar la exploración visual utilicé IA como apoyo en el diseño de interfaces.'],
        ]},
      ],
      decisions: [
        { type: 'paragraph', text: 'La arquitectura se diseñó alrededor de los distintos roles del sistema, priorizando la información y las acciones que cada usuario necesitaba para realizar su trabajo de forma eficiente.' },
        { type: 'subtitle', text: 'Principios de arquitectura' },
        { type: 'table', headers: ['Organización por roles', 'Flujos centrados en tareas', 'Arquitectura escalable'], rows: [
          ['Cada usuario accede únicamente a la información y acciones necesarias para su trabajo.', 'Cada recorrido fue diseñado para completar procesos completos con el menor número de pasos posible.', 'La estructura permite incorporar nuevos módulos sin afectar la experiencia existente.'],
        ]},
      ],
      results: [
        { type: 'table', headers: ['Impacto', 'Aprendizajes'], rows: [
          ['Centralizamos procesos y mejoramos la visibilidad de la información para distintos perfiles de usuario.', 'Diseñar productos complejos requiere comprender primero cómo las personas toman decisiones dentro de un sistema.'],
          ['La organización de la información permitió reducir la carga cognitiva y facilitar la toma de decisiones en el día a día.', 'Comprendí que simplificar una experiencia tiene más impacto que añadir nuevas funcionalidades cuando el objetivo es apoyar procesos complejos.'],
          ['El producto evolucionó mediante mejoras continuas enfocadas en reducir la complejidad operativa.', 'Incorporar IA en la exploración visual me permitió iterar con mayor rapidez y concentrar mis esfuerzos en la estrategia del producto, la arquitectura de información y la experiencia de usuario.'],
        ]},
      ],
      final: [
        { type: 'paragraph', text: 'El resultado final refleja un producto construido alrededor de los flujos de trabajo reales de sus usuarios. Las mejoras implementadas durante el desarrollo permitieron simplificar la navegación, reducir la fricción y ofrecer una experiencia coherente para cada rol dentro del sistema.' },
        { type: 'columns', radius: 3, border: true, itemHeight: 260, items: [
          { image: './assets/maden-inventario.png', label: 'Wireframe final — Inventario' },
          { image: './assets/maden-productos.png',  label: 'Wireframe final — Catálogo de productos' },
        ]},
        { type: 'image', src: './assets/maden-trabajadores.png', centered: true, width: 'calc(45% - 11px)', border: true, borderRadius: 3, height: 260, label: 'Wireframe final — Trabajadores' },
      ],
      iterations: [
        { type: 'paragraph', text: 'La solución evolucionó continuamente a partir de la validación del producto y la observación de cómo los usuarios interactuaban con los flujos de trabajo reales.' },
        { type: 'table', headers: ['Observación', 'Cómo evolucionó el producto'], rows: [
          ['La navegación contenía elementos que no aportaban valor al uso diario.', 'Eliminamos funcionalidades secundarias y priorizamos las acciones más utilizadas por cada rol.'],
          ['Los filtros complejos aumentaban la carga cognitiva.', 'Reorganizamos la búsqueda mediante filtros progresivos y una exploración más intuitiva.'],
          ['Una misma vista no respondía a las necesidades de todos los usuarios.', 'Adaptamos la información mostrada según el rol y el contexto de uso de cada perfil.'],
        ]},
        { type: 'image', src: './assets/maden-4.png', fullWidth: true, width: '50%', label: 'Wireframe — pantalla de trabajadores para consulta de administradores y nota de retroalimentación de usuario' },
      ],
      research: [
        { type: 'paragraph', text: 'Antes de diseñar la interfaz, fue necesario comprender cómo distintos usuarios interactuaban con una operación compleja y qué información necesitaban para realizar su trabajo de forma eficiente.' },
        { type: 'subtitle', text: 'Información fragmentada' },
        { type: 'paragraph', text: 'Los usuarios dependían de múltiples fuentes para consultar el estado de la operación, dificultando el seguimiento y la toma de decisiones.' },
        { type: 'subtitle', text: 'Contextos de uso distintos' },
        { type: 'paragraph', text: 'El sistema debía responder tanto a tareas administrativas como operativas, priorizando rapidez y simplicidad según el entorno.' },
        { type: 'subtitle', text: 'Escalabilidad del producto' },
        { type: 'paragraph', text: 'La solución debía adaptarse a cambios en los procesos sin comprometer la experiencia de uso.' },
        { type: 'image', src: './assets/maden-2.png', fullWidth: true, width: '50%' },
      ],
    },
  },
  {
    slug: 'peerly',
    title: 'Peerly',
    color: 'var(--periwinkle)',
    image: './assets/cover-peerly.png',
    logo: './assets/logo-camaleon-grande.png',
    label: 'UX Research · UX/UI Design',
    description: 'Creando oportunidades a través de la educación entre pares.',
    meta: {
      summary: 'Plataforma móvil de tutoría entre pares diseñada para conectar a estudiantes universitarios con tutores verificados de forma rápida, accesible y confiable.',
      team: '7 miembros: Guatemala, Namibia y USA',
      timeline: '6 meses',
      tools: 'Figma, Lovable',
      platform: 'Aplicación móvil',
    },
    sectionImages: {
      research: { src: './assets/peerly-2.png', label: 'Insights de nuestros mapas de empatía globales', width: '40%' },
      decisions: { src: './assets/peerly-3.png', label: 'Fragmento de wireframes — proceso de onboarding', width: '45%' },
    },
    sections: {
      research: [
        { type: 'paragraph', text: 'Entrevistamos a estudiantes universitarios para comprender las barreras que enfrentan al buscar apoyo académico. La investigación reveló tres necesidades principales que guiaron nuestras decisiones de diseño.' },
        { type: 'subtitle', text: 'Acceso simple y accesible' },
        { type: 'paragraph', text: 'Los estudiantes utilizan principalmente sus teléfonos y buscan herramientas ligeras, fáciles de usar y con bajo consumo de datos. Además, valoran opciones accesibles para presupuestos estudiantiles.' },
        { type: 'subtitle', text: 'Confianza antes del primer contacto' },
        { type: 'paragraph', text: 'Los participantes expresaron incertidumbre al elegir un tutor y mencionaron la importancia de contar con señales claras de confianza antes de interactuar.' },
        { type: 'subtitle', text: 'Apoyo inmediato y sin fricción' },
        { type: 'paragraph', text: 'Más que buscar "el mejor tutor", los estudiantes querían encontrar ayuda rápidamente, sin procesos largos ni sentirse juzgados por pedir apoyo.' },
      ],
      iterations: [
        { type: 'paragraph', text: 'Validamos el prototipo mediante pruebas con usuarios para identificar oportunidades de mejora y refinar la experiencia antes de la propuesta final.' },
        { type: 'table', headers: ['Hallazgo', 'Iteración'], rows: [
          ['Notificaciones poco visibles en la navegación', 'Aumentamos la visibilidad del ícono.'],
          ['El flujo de búsqueda y reserva funcionaba correctamente', 'Conservamos este flujo sin modificaciones, enfocando mejoras en otras áreas.'],
        ]},
        { type: 'row', centered: true, image: { src: './assets/peerly-4.png', label: 'Fragmento de los estudios de mapa de calor realizados' }, blocks: [
          { type: 'subtitle', text: 'Resultado de las pruebas' },
          { type: 'bullet', text: '+90% de éxito en tareas principales.' },
          { type: 'bullet', text: 'Creación de cuenta y reserva completadas de forma eficiente.' },
          { type: 'bullet', text: 'La mayoría de las tareas se realizaron en 15–60 segundos.' },
        ]},
      ],
      decisions: [
        { type: 'paragraph', text: 'Cada decisión respondió directamente a un hallazgo de investigación y buscó mejorar la experiencia del estudiante durante todo el recorrido.' },
        { type: 'subtitle', text: 'Diseñar para generar confianza' },
        { type: 'paragraph', text: 'La credibilidad fue prioritaria. Incorporamos perfiles verificados, reseñas y calificaciones para reducir la incertidumbre antes del primer contacto.' },
        { type: 'subtitle', text: 'Reducir la carga cognitiva' },
        { type: 'paragraph', text: 'Transformamos un registro complejo en un flujo progresivo de pasos breves que facilita la incorporación sin abrumar al usuario.' },
        { type: 'subtitle', text: 'Minimizar el esfuerzo para encontrar un tutor' },
        { type: 'paragraph', text: 'Priorizamos filtros claros, información relevante y una navegación sencilla para acelerar la toma de decisiones.' },
      ],
      results: [
        { type: 'subtitle', text: 'Lo que me llevo de este proyecto' },
        { type: 'paragraph', text: 'Este proyecto reforzó la importancia de diseñar con evidencia y no con suposiciones. Aprendí a transformar hallazgos de investigación en decisiones de diseño, validar soluciones mediante pruebas y colaborar con un equipo multidisciplinario para construir una experiencia centrada en las personas.' },
        { type: 'table', headers: ['Impacto', 'Aprendizajes'], rows: [
          ['Una experiencia más intuitiva y centrada en el usuario.', 'La investigación debe guiar cada decisión de diseño.'],
          ['Un flujo claro para descubrir, seleccionar y reservar tutorías.', 'Iterar con retroalimentación permite identificar oportunidades de mejora.'],
          ['Una solución que prioriza la confianza y la accesibilidad.', 'Diseñar en equipo fortaleció mi comunicación y colaboración.'],
        ]},
      ],
      final: [
        { type: 'paragraph', text: 'El resultado final transforma los hallazgos de investigación en una experiencia intuitiva que permite descubrir, seleccionar y reservar tutorías de forma rápida y confiable.' },
        { type: 'image', src: './assets/peerly-5.png', fullWidth: true, width: '85%' },
      ],
      problem: [
        { type: 'table', rows: [
          ['Problema', 'Los estudiantes en comunidades con recursos limitados tienen dificultades para acceder a ayuda académica oportuna y personalizada. La tutoría tradicional es costosa, inaccesible y a menudo, no es culturalmente relevante.'],
          ['Reto de UX', '¿Cómo podríamos diseñar un sistema de confianza y seguridad que brinde a padres y estudiantes certeza sobre la credibilidad de los tutores, manteniendo el proceso de registro lo suficientemente simple para usuarios con poca alfabetización tecnológica?'],
          ['Nuestra solución', 'Diseñamos una plataforma de tutoría entre pares que conecta a estudiantes con tutores verificados para un apoyo académico rápido, accesible y de confianza. A diferencia de las plataformas tradicionales, nuestra solución prioriza la velocidad, la cercanía y la confianza, haciéndola más accesible y más efectiva.'],
        ]},
      ],
    },
  },
]

export const CASE_SECTIONS = [
  {
    id: 'problem',
    title: 'Definición del problema y objetivos',
    placeholder: 'Define el problema central y los objetivos que guiaron el proceso de diseño.',
  },
  {
    id: 'research',
    title: 'Hallazgos de investigación',
    placeholder: 'Principales descubrimientos de la investigación con usuarios, análisis de competidores y exploración.',
  },
  {
    id: 'decisions',
    title: 'Decisiones de diseño',
    placeholder: 'Las principales decisiones de diseño tomadas y el razonamiento detrás de cada una.',
  },
  {
    id: 'iterations',
    title: 'Iteraciones',
    placeholder: 'Cómo evolucionó el diseño a través de ciclos de retroalimentación y pruebas.',
  },
  {
    id: 'final',
    title: 'Diseño final',
    placeholder: 'El resultado final del diseño y cómo responde al problema original.',
  },
  {
    id: 'results',
    title: 'Resultados',
    placeholder: 'Impacto, métricas obtenidas y aprendizajes del proyecto.',
  },
]
