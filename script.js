// Declaración de preguntas
const questions = [

    {
        text: "¿Cuál es el objetivo principal de la Odontología Preventiva?",
        hint: "Reflexiona sobre el enfoque en evitar problemas antes de que ocurran.",
        answer: "Reducir el riesgo de enfermedades bucales",
        alternatives: [
            "Diagnosticar enfermedades avanzadas",
            "Reducir el riesgo de enfermedades bucales",
            "Tratar patologías severas",
            "Restaurar dientes dañados",
            "Eliminar tejidos afectados"
        ]
    },
    {
        text: "¿Qué componente del flúor ayuda a fortalecer el esmalte dental?",
        hint: "Es una sustancia que contribuye directamente al fortalecimiento de la superficie del esmalte.",
        answer: "Fluoruro de calcio",
        alternatives: [
            "Hidroxiapatita",
            "Fluoruro de calcio",
            "Dióxido de flúor",
            "Fluoruro de sodio",
            "Ion hidrógeno"
        ]
    },
    {
        text: "¿Qué método es más efectivo para evaluar el índice de higiene oral en un paciente?",
        hint: "Piensa en algo que permita ver directamente la presencia de placa.",
        answer: "Tinción con colorantes reveladores",
        alternatives: [
            "Cepillado diario",
            "Observación visual",
            "Tinción con colorantes reveladores",
            "Examen radiográfico",
            "Pruebas microbiológicas"
        ]
    },
    {
        text: "¿Cuál es la frecuencia ideal para realizar un control de higiene oral?",
        hint: "Es importante mantener una vigilancia constante pero razonable.",
        answer: "Cada 3 meses",
        alternatives: [
            "Cada 6 meses",
            "Cada 3 meses",
            "Cada año",
            "Cada mes",
            "Cada 2 semanas"
        ]
    },
    {
        text: "¿Qué elemento de la dieta afecta más el riesgo de caries?",
        hint: "Considera qué macronutriente es el principal alimento de las bacterias cariogénicas.",
        answer: "Azúcares fermentables",
        alternatives: [
            "Grasas",
            "Proteínas",
            "Azúcares fermentables",
            "Vitaminas",
            "Minerales"
        ]
    },
    {
        text: "¿Cuál es el porcentaje mínimo de superficies afectadas para considerar un riesgo alto de caries según ICDAS?",
        hint: "Este índice evalúa superficies dentales con lesiones visibles.",
        answer: "30%",
        alternatives: [
            "20%",
            "30%",
            "40%",
            "50%",
            "10%"
        ]
    },
    {
        text: "¿Qué bacterias están más asociadas con el desarrollo de caries?",
        hint: "Piensa en bacterias que metabolizan azúcares y producen ácidos.",
        answer: "Streptococcus mutans y Lactobacillus",
        alternatives: [
            "Streptococcus mutans y Lactobacillus",
            "Escherichia coli y Streptococcus pyogenes",
            "Lactobacillus y Actinomyces",
            "Porphyromonas gingivalis y Prevotella",
            "Actinomyces y Veillonella"
        ]
    },
    {
        text: "¿Cuál de los siguientes índices epidemiológicos se utiliza para evaluar la experiencia pasada de caries en dentición mixta?",
        hint: "Este índice evalúa dientes permanentes.",
        answer: "DMFT",
        alternatives: [
            "COP-D",
            "CEO-D",
            "Índice de O'Leary",
            "DMFT",
            "CPI"
        ]
    },
    {
        text: "¿Cuál es la cantidad mínima de tiempo recomendado para que el paciente mastique chicle sin azúcar para estimular la producción de saliva?",
        hint: "Considera el tiempo suficiente para activar la secreción salival.",
        answer: "5 minutos",
        alternatives: [
            "1 minuto",
            "2 minutos",
            "5 minutos",
            "10 minutos",
            "3 minutos"
        ]
    },
    {
        text: "¿Cuánto tiempo permanece la saliva estimulada efectiva para neutralizar ácidos después de comer?",
        hint: "Este tiempo es suficiente para restablecer el equilibrio en la cavidad oral.",
        answer: "1 hora",
        alternatives: [
            "30 minutos",
            "1 hora",
            "15 minutos",
            "10 minutos",
            "2 horas"
        ]
    },
    {
        text: "¿Qué función cumple el flúor en la remineralización dental?",
        hint: "Piensa en el flúor como un restaurador del esmalte.",
        answer: "Reemplaza los minerales perdidos del esmalte",
        alternatives: [
            "Incrementa la permeabilidad del esmalte",
            "Reemplaza los minerales perdidos del esmalte",
            "Destruye bacterias cariogénicas",
            "Aumenta la sensibilidad dental",
            "Reduce el grosor del esmalte"
        ]
    },
    {
        text: "¿Qué aspecto evalúa principalmente el índice de O'Leary?",
        hint: "Este índice se relaciona con la higiene del paciente.",
        answer: "Presencia de placa",
        alternatives: [
            "Presencia de caries",
            "Presencia de placa",
            "Presencia de cálculo",
            "Salud periodontal",
            "Nivel de inflamación gingival"
        ]
    },
    {
        text: "¿Cuál es la principal característica del tratamiento con selladores de fosetas y fisuras?",
        hint: "Son utilizados como una barrera protectora.",
        answer: "Sellar áreas susceptibles a caries",
        alternatives: [
            "Eliminar caries avanzadas",
            "Sellar áreas susceptibles a caries",
            "Incrementar la sensibilidad dental",
            "Reducir la gingivitis",
            "Aumentar la estética dental"
        ]
    },
    {
        text: "¿Qué herramienta permite medir con mayor precisión la acumulación de placa?",
        hint: "Ayuda a visualizar lo que no es fácilmente visible.",
        answer: "Colorantes reveladores",
        alternatives: [
            "Radiografías",
            "Colorantes reveladores",
            "Examen clínico",
            "Explorador dental",
            "Índice gingival"
        ]
    },
    {
        text: "¿Qué porcentaje de superficies dentales libres de placa es considerado aceptable según el Índice de Higiene Oral de O'Leary?",
        hint: "El valor debe ser suficiente para indicar una higiene adecuada.",
        answer: "Menos del 20%",
        alternatives: [
            "Menos del 30%",
            "Menos del 20%",
            "Menos del 25%",
            "Menos del 15%",
            "Menos del 10%"
        ]
    },
    {
        text: "¿Cuál es el número de caras dentales evaluadas para el Índice de Higiene Oral de O'Leary?",
        hint: "Piensa en las caras accesibles para la limpieza diaria del paciente.",
        answer: "4 caras",
        alternatives: [
            "6 caras",
            "4 caras",
            "2 caras",
            "8 caras",
            "3 caras"
        ]
    },
    {
        text: "¿Cuál es el tiempo recomendado para que un paciente espere después de comer antes de cepillarse los dientes?",
        hint: "Considere el tiempo necesario para que el pH de la saliva se restablezca tras ingerir alimentos.",
        answer: "15 minutos",
        alternatives: [
            "Inmediatamente",
            "15 minutos",
            "30 minutos",
            "1 hora",
            "10 minutos"
        ]
    },
    {
        text: "¿Cuál es el valor crítico del pH en el cual comienza la desmineralización del esmalte dental?",
        hint: "Este valor está relacionado con la producción de ácidos por las bacterias bucales.",
        answer: "5.5",
        alternatives: [
            "5.0",
            "5.5",
            "4.5",
            "6.0",
            "4.0"
        ]
    },
    {
        text: "¿Qué tipo de dieta reduce más el riesgo de caries dental?",
        hint: "Reflexiona sobre alimentos que estimulan la limpieza natural de los dientes.",
        answer: "Equilibrada con alimentos fibrosos",
        alternatives: [
            "Rica en carbohidratos simples",
            "Alta en azúcares procesados",
            "Equilibrada con alimentos fibrosos",
            "Baja en proteínas",
            "Rica en grasas saturadas"
        ]
    },
    {
        text: "¿Cuál es la acción principal de los selladores de fosetas y fisuras?",
        hint: "Son utilizados como una barrera preventiva en dientes sanos.",
        answer: "Proteger superficies dentales susceptibles",
        alternatives: [
            "Tratar caries activas",
            "Proteger superficies dentales susceptibles",
            "Reducir el tamaño de las fisuras",
            "Incrementar la dureza del esmalte",
            "Destruir bacterias en fosetas"
        ]
    },
    {
        text: "¿Qué instrumento se utiliza comúnmente para medir el nivel de inflamación gingival?",
        hint: "Este instrumento mide el espacio entre encía y diente.",
        answer: "Sonda periodontal",
        alternatives: [
            "Sonda periodontal",
            "Colorante revelador",
            "Explorador dental",
            "Índice de caries",
            "Fotografía intraoral"
        ]
    },
    {
        text: "¿Cuál es el principal factor que contribuye a la formación de biofilm oral?",
        hint: "Está relacionado con la higiene inadecuada.",
        answer: "Acumulación de restos alimenticios y bacterias",
        alternatives: [
            "Cepillado dental diario",
            "Consumo de alimentos fibrosos",
            "Acumulación de restos alimenticios y bacterias",
            "Uso de enjuague bucal",
            "Flujo salival alto"
        ]
    },
    {
        text: "¿Cuál es el componente principal de los productos remineralizantes?",
        hint: "Es el elemento más estudiado para la protección dental.",
        answer: "Fluoruro",
        alternatives: [
            "Fosfato de calcio amorfo",
            "Fluoruro",
            "Hidroxiapatita",
            "Carbonato de calcio",
            "Glicerina"
        ]
    },
    {
        text: "¿Qué técnica de mínima intervención se recomienda para tratar caries en zonas rurales?",
        hint: "Piensa en una técnica que no requiere equipo dental especializado.",
        answer: "Tratamiento Restaurador Atraumático (TRA)",
        alternatives: [
            "Obturaciones con amalgama",
            "Tratamiento Restaurador Atraumático (TRA)",
            "Endodoncia",
            "Selladores de fosetas y fisuras",
            "Uso de barniz fluorado"
        ]
    },
    {
        text: "¿Cuál es el principal objetivo del Periodontograma?",
        hint: "Este instrumento mide espacios en los tejidos que rodean al diente.",
        answer: "Medir la profundidad de bolsas periodontales",
        alternatives: [
            "Diagnosticar caries avanzadas",
            "Medir la profundidad de bolsas periodontales",
            "Evaluar la acumulación de placa dental",
            "Determinar la movilidad dental",
            "Identificar infecciones agudas"
        ]
    },
    {
        text: "¿Cuál es la principal causa de gingivitis en niños?",
        hint: "Relaciona esta afección con la acumulación de placa bacteriana.",
        answer: "Mala higiene oral",
        alternatives: [
            "Uso excesivo de fluoruro",
            "Mala higiene oral",
            "Consumo de alimentos fibrosos",
            "Flujo salival bajo",
            "Presencia de restauraciones mal adaptadas"
        ]
    },
    {
        text: "¿Cuál es el intervalo recomendado para el control periódico en un paciente con alto riesgo de caries?",
        hint: "Piensa en la frecuencia ideal para prevenir la progresión de caries.",
        answer: "Cada 3 meses",
        alternatives: [
            "Cada 12 meses",
            "Cada 6 meses",
            "Cada 3 meses",
            "Cada 9 meses",
            "Cada 18 meses"
        ]
    },
    {
        text: "¿Qué efecto tiene el flujo salival bajo en el riesgo de caries?",
        hint: "Considera cómo la saliva actúa como un amortiguador natural en la boca.",
        answer: "Aumenta el riesgo de caries",
        alternatives: [
            "Reduce el riesgo de caries",
            "No tiene efecto sobre el riesgo de caries",
            "Aumenta el riesgo de caries",
            "Mejora la remineralización del esmalte",
            "Estimula el crecimiento de bacterias benéficas"
        ]
    },
    {
        text: "¿Cuál es la utilidad principal del índice de O’Leary?",
        hint: "Este índice se utiliza principalmente como un marcador de higiene oral.",
        answer: "Evaluar la acumulación de placa dental",
        alternatives: [
            "Medir el flujo salival",
            "Evaluar la acumulación de placa dental",
            "Determinar la salud periodontal",
            "Diagnosticar caries",
            "Calcular el pH bucal"
        ]
    },
    {
        text: "¿Cuál es el porcentaje mínimo de superficies afectadas para considerar un riesgo alto de caries según ICDAS?",
        hint: "Este valor es un umbral aceptado para clasificar áreas con actividad de caries.",
        answer: "40%",
        alternatives: [
            "20%",
            "30%",
            "40%",
            "50%",
            "10%"
        ]
    },
    {
        text: "¿Cuál es la concentración de flúor recomendada en el agua potable para prevenir caries sin causar fluorosis?",
        hint: "Es el estándar recomendado por la OMS.",
        answer: "0.7-1.2 ppm",
        alternatives: [
            "1.5-2.0 ppm",
            "0.7-1.2 ppm",
            "0.3-0.5 ppm",
            "2.5-3.0 ppm",
            "1.0-1.5 ppm"
        ]
    },
    {
        text: "La técnica de Hall, conocida en odontología pediátrica, consiste en _______ sin necesidad de fresar el diente.",
        hint: "Esta técnica es mínimamente invasiva y protege el tejido sano.",
        answer: "Sellar caries con coronas prefabricadas",
        alternatives: [
            "Aplicar ionómero de vidrio sobre el esmalte expuesto",
            "Sellar caries con coronas prefabricadas",
            "Realizar restauraciones temporales con resina",
            "Usar barnices fluorados en áreas con caries",
            "Retirar caries con instrumentos manuales"
        ]
    },
    {
        text: "Los dentífricos con una concentración de flúor de 1,500 ppm son recomendados para _______.",
        hint: "Se utilizan especialmente en adolescentes y adultos.",
        answer: "Personas con alto riesgo de caries",
        alternatives: [
            "Niños menores de 6 años",
            "Personas con alto riesgo de caries",
            "Personas con dientes temporales únicamente",
            "Pacientes con fluorosis dental",
            "Uso exclusivo de niños sin supervisión"
        ]
    },
    {
        text: "En niños menores de 3 años, el tamaño adecuado de pasta dental que debe usarse es _______.",
        hint: "Es una cantidad muy pequeña para evitar fluorosis.",
        answer: "El tamaño de un grano de arroz",
        alternatives: [
            "El tamaño de una moneda pequeña",
            "Una cantidad que cubra todas las cerdas",
            "El tamaño de un guisante",
            "El tamaño de un grano de arroz",
            "Una cucharadita"
        ]
    },
    {
        text: "El principal objetivo de la fluoración de la sal en México es _______ en comunidades rurales.",
        hint: "Se enfoca en áreas sin acceso a agua fluorada.",
        answer: "Reducir la incidencia de caries",
        alternatives: [
            "Prevenir la fluorosis dental",
            "Mejorar la calidad del agua potable",
            "Reducir la incidencia de caries",
            "Eliminar las bacterias bucales",
            "Aumentar el acceso a agua potable"
        ]
    },
    {
        text: "Los barnices fluorados son efectivos porque _______ flúor de manera sostenida en la superficie dental.",
        hint: "Actúan directamente sobre el esmalte durante varias horas.",
        answer: "Liberan",
        alternatives: [
            "Sellan",
            "Absorben",
            "Neutralizan",
            "Liberan",
            "Elimen bacterias"
        ]
    },
    {
        text: "Las fórmulas infantiles preparadas con agua fluorada pueden _______ si no se controla el consumo total de flúor.",
        hint: "Es importante regular la cantidad de agua fluorada en las fórmulas.",
        answer: "Conducir a exceso de ingesta de flúor",
        alternatives: [
            "Reducir el riesgo de caries",
            "Conducir a exceso de ingesta de flúor",
            "Eliminar bacterias en la cavidad bucal",
            "Reemplazar la pasta dental fluorada",
            "Disminuir la formación de caries secundarias"
        ]
    },
    {
        text: "En las superficies oclusales de molares permanentes, el método más efectivo para prevenir caries es _______.",
        hint: "Sellan fisuras donde se acumulan bacterias.",
        answer: "Colocar selladores dentales",
        alternatives: [
            "Aplicar barnices fluorados",
            "Colocar selladores dentales",
            "Cepillado frecuente con dentífrico",
            "Uso de suplementos de calcio",
            "Fluoración de la sal"
        ]
    },
    {
        text: "Los jugos y bebidas procesadas pueden contribuir a la ingesta total de flúor cuando _______.",
        hint: "Esto depende de la región donde se procesen.",
        answer: "Están elaborados con agua fluorada",
        alternatives: [
            "Provienen de áreas con agua no tratada",
            "Contienen azúcar añadido",
            "Están elaborados con agua fluorada",
            "Se consumen en grandes cantidades",
            "No son filtrados adecuadamente"
        ]
    },
    {
        text: "La fluorosis dental ocurre cuando _______ durante la formación de los dientes.",
        hint: "Afecta principalmente a los dientes en desarrollo.",
        answer: "Hay exceso de flúor en la dieta",
        alternatives: [
            "Se aplica demasiada pasta dental",
            "Hay exceso de flúor en la dieta",
            "Se combina agua fluorada con sal fluorada",
            "Hay deficiencia de calcio",
            "Se usa barniz fluorado en exceso"
        ]
    },
    {
        text: "En comunidades donde no hay acceso a agua fluorada, la estrategia más común es _______.",
        hint: "Es una solución efectiva para zonas rurales.",
        answer: "Implementar fluoración de la sal",
        alternatives: [
            "Implementar fluoración de la sal",
            "Incrementar el uso de barnices fluorados",
            "Aplicar selladores en consultorios dentales",
            "Distribuir suplementos de calcio",
            "Usar enjuagues bucales fluorados"
        ]
    },
    {
        text: "La acción del flúor en el esmalte dental consiste en _______ frente al ataque de ácidos bacterianos.",
        hint: "Reduce la solubilidad del esmalte.",
        answer: "Reforzar",
        alternatives: [
            "Neutralizar",
            "Reforzar",
            "Absorber",
            "Incrementar la producción de esmalte",
            "Proteger"
        ]
    },
    {
        text: "El consumo excesivo de flúor en niños menores de 8 años puede provocar _______.",
        hint: "Afecta la apariencia de los dientes en formación.",
        answer: "Fluorosis dental",
        alternatives: [
            "Caries profundas",
            "Fluorosis dental",
            "Dientes más débiles",
            "Pérdida temprana de esmalte",
            "Formación de manchas grises"
        ]
    },
    {
        text: "Los selladores dentales protegen contra caries al _______ en surcos y fisuras.",
        hint: "Evitan el contacto de bacterias con el esmalte.",
        answer: "Crear una barrera física",
        alternatives: [
            "Liberar flúor",
            "Crear una barrera física",
            "Producir una película protectora",
            "Sellar bacterias",
            "Impedir la erosión"
        ]
    },
    {
        text: "El flúor en el barniz dental no causa fluorosis porque _______.",
        hint: "Actúa solo sobre el esmalte dental.",
        answer: "Es tópico y no se ingiere",
        alternatives: [
            "No se absorbe sistémicamente",
            "Se elimina rápidamente",
            "Es tópico y no se ingiere",
            "No tiene suficiente flúor para causar daño",
            "No afecta dientes en formación"
        ]
    },
    {
        text: "_______ es el componente principal de los ionómeros de vidrio utilizado en odontología preventiva.",
        hint: "Este material libera flúor a largo plazo.",
        answer: "Fluoruros y aluminofosfato",
        alternatives: [
            "Resinas compuestas",
            "Fluoruros y aluminofosfato",
            "Fosfato de calcio",
            "Silicato de sodio",
            "Hidroxiapatita"
        ]
    },
    {
        text: "La fluoración del agua ha demostrado reducir caries en un rango de _______.",
        hint: "Este porcentaje depende de la cobertura en la población.",
        answer: "20-40%",
        alternatives: [
            "10-20%",
            "25-40%",
            "20-40%",
            "50-60%",
            "5-10%"
        ]
    },
    {
        text: "En zonas urbanas con agua fluorada, el principal aporte de flúor adicional proviene de _______.",
        hint: "Son productos de uso diario.",
        answer: "Pasta dental y enjuagues",
        alternatives: [
            "Pasta dental y enjuagues",
            "Suplementos de calcio",
            "Jugos y bebidas procesadas",
            "Lácteos fortificados",
            "Agua embotellada"
        ]
    }, 
    {
        text: "En la pasta dental para adultos, la concentración de flúor más común es _______.",
        hint: "Es el nivel recomendado para prevenir caries en adultos.",
        answer: "1,500 ppm",
        alternatives: [
            "2,000 ppm",
            "1,500 ppm",
            "1,000 ppm",
            "500 ppm",
            "3,000 ppm"
        ]
    },
    {
        text: "Los niños menores de 6 años deben usar pasta dental con flúor siempre bajo supervisión para evitar _______.",
        hint: "Los niños pequeños suelen tragar la pasta.",
        answer: "Ingestión accidental",
        alternatives: [
            "Pérdida de esmalte",
            "Fluorosis dental",
            "Ingestión accidental",
            "Desarrollo de caries secundarias",
            "Alteraciones en el esmalte"
        ]
    } 
];

// Variables globales
let score = 0;
let currentQuestion = 0;
let timerInterval = null;
let usedHints = Array(questions.length).fill(false);

const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionsContainer = document.querySelector('.options-container');
const nextButton = document.getElementById('nextBtn');
const timer = document.querySelector('.timer');
const progressBar = document.querySelector('.progress-bar');

// Función para cargar una pregunta
function loadQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    questionText.textContent = question.text;

    // Limpiar las opciones previas y pista
    optionsContainer.innerHTML = '';
    document.querySelector('.hint-btn').disabled = false; // Activar botón de pista
    usedHints[currentQuestion] = false; // Resetear estado de pista usada

    // Generar las opciones de respuesta
    question.alternatives.forEach((alternative) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = alternative;
        optionsContainer.appendChild(button);

        // Añadir evento a cada botón
        button.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach((btn) => {
                btn.disabled = true; // Desactivar todos los botones
                btn.classList.remove('selected');
                if (btn.textContent === question.answer) {
                    btn.classList.add('correct'); // Marcar respuesta correcta
                }
            });

            button.classList.add('selected');
            if (button.textContent === question.answer) {
                if (usedHints[currentQuestion]) {
                    score += 0.5; // Puntaje reducido si se usó pista
                } else {
                    score += 1; // Puntaje completo
                }
            } else {
                button.classList.add('incorrect');
            }
            nextButton.disabled = false; // Activar botón "Siguiente"
        });
    });

    nextButton.disabled = true; // Desactivar el botón de siguiente por defecto
    startTimer();
}

// Función para iniciar el temporizador
function startTimer() {
    let timeLeft = 20;
    timer.textContent = `${timeLeft}s`;
    progressBar.style.width = '100%';

    clearInterval(timerInterval); // Limpiar cualquier temporizador previo
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = `${timeLeft}s`;
        progressBar.style.width = `${(timeLeft / 20) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.querySelectorAll('.option-btn').forEach((btn) => btn.disabled = true);
            nextButton.disabled = false;
        }
    }, 1000);
}

// Función para mostrar la pista
function showHint() {
    const hint = document.createElement('div');
    hint.textContent = questions[currentQuestion].hint;
    hint.style.color = 'green';
    hint.style.marginTop = '10px';
    optionsContainer.appendChild(hint);
    document.querySelector('.hint-btn').disabled = true; // Desactivar botón de pista
    usedHints[currentQuestion] = true; // Registrar pista usada
}

// Evento del botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Función para mostrar los resultados
function showResults() {
    const quizContainer = document.querySelector('.quiz-container');
    const hintsUsedCount = usedHints.filter(Boolean).length; // Contar pistas usadas

    // Enviar datos a Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbzSrF2-GW5w_DfB8cuIY_JfR1xDtdHUOJa7aSjyMN1jbqWTiAqzWYR-UZEI_m2FOD1Sgg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: "Estudiante",
          puntuacion: score.toFixed(1),
          pistas: hintsUsedCount,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Datos enviados correctamente:", data))
        .catch((error) => console.error("Error al enviar datos:", error));
      
    quizContainer.innerHTML = `
        <h2>Resultados</h2>
        <p>Tu puntuación es: ${score.toFixed(1)} de ${questions.length}</p>
        <p>Pistas utilizadas: ${hintsUsedCount}</p>
        <button onclick="restartQuiz()">Reintentar</button>
    `;
}

// Función para reiniciar el cuestionario
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    usedHints = Array(questions.length).fill(false);
    loadQuestion();
}

// Cargar la primera pregunta al iniciar
loadQuestion();

// Evento del botón "Mostrar pista"
document.querySelector('.hint-btn').addEventListener('click', showHint);
