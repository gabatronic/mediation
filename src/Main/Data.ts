export const cardItems = [    
    {
        title: 'Rellena la Información Básica',
        description: 'Introduce tus datos y la información de la otra parte.',
        iconName: 'UserCheck'
    },
    {
        title: 'Notificación Automática',
        description: 'Enviamos comunicaciones certificadas a todas las partes.',
        iconName: 'Envelope'
    },
    {
        title: 'Protección Legal',
        description: 'Tu intento de mediación queda legalmente registrado y protegido.',
        iconName: 'ShieldAlt'
    },
    {
        title: 'Recibe la Documentación',
        description: 'Obtén la documentación certificada de tu intento de mediación.',
        iconName: 'FileAlt'
    }
]
export const serviceItems = [
    {
        title: 'Ley 1/2025',
        description: 'Cumplimos con los requisitos establecidos en los artículos que exigen la mediación previa como requisito de procedibilidad en determinados procedimientos civiles y mercantiles',
        iconName: 'Balance'
    },
    {
        title: 'Comunicaciones Certificadas',
        description: 'Todas las notificaciones se realizan mediante comunicaciones electrónicas certificadas, garantizando la fecha y hora exacta del envío, recepción y acceso al contenido.',
        iconName: 'ShieldAlt'
    },
    {
        title: 'Certificado emitido por un Mediador Profesional',
        description: 'El mediador realiza los trámites necesarios para garantizar el intento de mediación, generando las evidencias necesarias.',
        iconName: 'FileCheck'
    }
]
export const mandatoryCaseItems = [
    {
        scope : 'Jurisdicción Civil y Mercantil',
        iconName: 'Balance',
        scopeCase: [
            'Conflictos contractuales entre particulares o empresas (incumplimientos de contratos, reclamaciones por deudas).',
            'Reclamaciones relacionadas con préstamos y créditos bancarios.',
            'Reclamaciones por cláusulas abusivas en contratos financieros o hipotecarios.',
            'Conflictos entre propietarios y arrendadores (impagos, fianzas, obras, subidas de alquiler).',
            'Litigios entre comunidades de propietarios y propietarios individuales.',
            'Conflictos de responsabilidad civil (excepto los derivados de accidentes de tráfico).',
            'Disputas en contratos de suministro de bienes y servicios',
            'Reclamaciones derivadas de contratos de agencia, franquicia y distribución.',
            'Conflictos relacionados con la propiedad horizontal.'
        ]
    },
    {
        scope : 'Jurisdicción Social (Laboral)',
        iconName: 'Suitecase',
        scopeCase: [
            'Conflictos individuales sobre condiciones laborales (salario, vacaciones, horas extra).',
            'Reclamaciones por despidos o modificaciones sustanciales de las condiciones de trabajo.',
            'Disputas entre empresas y trabajadores sobre incumplimientos contractuales.',
            'Conflictos colectivos laborales antes de una huelga o cierre patronal.'
        ]
    },
    {
        scope: 'Ambito de Consumo',
        iconName: 'UserAlt',
        scopeCase: [
            'Reclamaciones de consumidores frente a empresas por productos o servicios defectuosos.',
            'Conflictos por incumplimientos de garantías en bienes y servicios.',
            'Reclamaciones por publicidad engañosa o cláusulas abusivas en contratos de adhesión.'
        ]
    }
]
