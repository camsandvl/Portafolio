export const CASES = [
  {
    slug: 'peerly',
    title: 'Peerly',
    color: 'var(--periwinkle)',
    image: './assets/cover-peerly.png',
    description: 'Creando oportunidades a través de la educación entre pares.',
    meta: {
      summary: 'Plataforma móvil de tutoría entre pares diseñada para conectar a estudiantes universitarios con tutores verificados de forma rápida, accesible y confiable.',
      team: '7 miembros — EE.UU., Guatemala y Namibia',
      timeline: '6 meses',
      tools: 'Figma',
      platform: 'Aplicación móvil',
    },
    sectionImages: {
      research: { src: './assets/peerly-2.png', label: 'Insights de nuestros mapas de empatía globales' },
      decisions: { src: './assets/peerly-3.png', label: 'Fragmento de wireframes — proceso de onboarding' },
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
        { type: 'highlight', text: 'Los estudiantes valoran más la facilidad para encontrar un tutor confiable y disponible que la cantidad de opciones disponibles.' },
      ],
      iterations: [
        { type: 'paragraph', text: 'Validamos el prototipo mediante pruebas con usuarios para identificar oportunidades de mejora y refinar la experiencia antes de la propuesta final.' },
        { type: 'table', headers: ['Hallazgo', 'Iteración'], rows: [
          ['Notificaciones poco visibles en la navegación', 'Aumentamos la visibilidad del ícono y reorganizamos su ubicación.'],
          ['Confusión al acceder al perfil y la configuración', 'Simplificamos la arquitectura y mejoramos el etiquetado de las secciones.'],
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
        { type: 'subtitle', text: 'Personalizar la experiencia' },
        { type: 'paragraph', text: 'Recopilamos preferencias de aprendizaje desde el inicio para ofrecer recomendaciones y sesiones más relevantes.' },
      ],
      results: [
        { type: 'subtitle', text: 'Lo que me llevo de este proyecto' },
        { type: 'paragraph', text: 'Este proyecto reforzó la importancia de diseñar con evidencia y no con suposiciones. Aprendí a transformar hallazgos de investigación en decisiones de diseño, validar soluciones mediante pruebas y colaborar con un equipo multidisciplinario para construir una experiencia centrada en las personas.' },
        { type: 'table', headers: ['Impacto', 'Aprendizajes'], rows: [
          ['✓ Una experiencia más intuitiva y centrada en el usuario.', 'La investigación debe guiar cada decisión de diseño.'],
          ['✓ Un flujo claro para descubrir, seleccionar y reservar tutorías.', 'Iterar con retroalimentación permite identificar oportunidades de mejora.'],
          ['✓ Una solución que prioriza la confianza y la accesibilidad.', 'Diseñar en equipo fortaleció mi comunicación y colaboración.'],
        ]},
      ],
      final: [
        { type: 'paragraph', text: 'El resultado final transforma los hallazgos de investigación en una experiencia intuitiva que permite descubrir, seleccionar y reservar tutorías de forma rápida y confiable.' },
        { type: 'image', src: './assets/peerly-5.png', fullWidth: true },
      ],
      problem: [
        { type: 'table', rows: [
          ['Problema', 'Los estudiantes en comunidades con recursos limitados tienen dificultades para acceder a ayuda académica oportuna y personalizada. La tutoría tradicional es costosa, inaccesible y, a menudo, no es culturalmente relevante.'],
          ['Reto de UX', '¿Cómo podríamos diseñar un sistema de confianza y seguridad que brinde a padres y estudiantes certeza sobre la credibilidad de los tutores, manteniendo el proceso de registro lo suficientemente simple para usuarios con poca alfabetización tecnológica?'],
          ['Nuestra solución', 'Diseñamos una plataforma de tutoría entre pares que conecta a estudiantes con tutores verificados para un apoyo académico rápido, accesible y de confianza. A diferencia de las plataformas tradicionales, nuestra solución prioriza la velocidad, la cercanía y la confianza, haciéndola más accesible y más efectiva.'],
        ]},
      ],
    },
  },
  {
    slug: 'havit',
    title: 'Havit',
    color: 'var(--teal)',
    image: './assets/cover-havit.png',
    description: 'Haciendo visible el esfuerzo detrás de cada meta.',
    sectionImages: {},
    sections: {},
  },
  {
    slug: 'maden',
    title: 'Maden',
    color: 'var(--coral)',
    image: './assets/cover-maden.png',
    description: 'Centralizando operaciones para una producción más eficiente.',
    sectionImages: {},
    sections: {},
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
