const questions = [
    {
        question: "¿Por qué crees que los pacientes con un IMC elevado tienen mayor uso de anestesia infiltrativa?",
        expectedKeywords: ["tejido adiposo", "penetración", "anestésico"],
        correctAnswer: "Por la cantidad de tejido adiposo que dificulta la penetración del anestésico.",
    },
    {
        question: "Explica cómo el SRAA regula la presión arterial y el equilibrio hídrico en el cuerpo.",
        expectedKeywords: ["vasoconstricción", "renina", "equilibrio hídrico"],
        correctAnswer: "El SRAA regula la presión arterial mediante la vasoconstricción y el aumento del volumen sanguíneo.",
    },
    {
        question: "Menciona tres precauciones importantes al tratar a un paciente hipertenso en el consultorio dental.",
        expectedKeywords: ["monitoreo", "estrés", "vasoconstrictor"],
        correctAnswer: "Monitoreo constante de la presión arterial, evitar el estrés, usar anestésicos sin vasoconstrictor si es necesario.",
    },
    // Añade más preguntas aquí...
];

export default questions;
