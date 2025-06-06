"use client";
import Nav from "@/components/nav";
import React from "react";

export default function Home() {
    const [questionId, setQuestionId] = React.useState<number>(0);
    const [answers, setAnswers] = React.useState<boolean[]>([]);

    const questions = [
        "Worden er regelmatig beveiligingsupdates uitgevoerd?",
        "Gebruik je tweefactorauthenticatie?",
        "Update je je Firewall en antivirussoftware regelmatig?",
        "Maak je regelmatig Back-ups?",
        "Zijn jij en je werknemers getraind op het herkennen van phising, social engineering en de manier waarop je veilig kan werken?",
        "Is er een plan voor als het misgaat?",
        "Ben je bewust welke systemen kritisch zijn voor je bedrijf?",
        "Laat je regelmatig je systemen testen door ethische hackers of gespecialiseerde bureaus?",
    ]

    const setAnswer = (questionId: number, answer: boolean) => {
        const newAnswers = [...answers];
        newAnswers[questionId] = answer;
        setAnswers(newAnswers);
    }

    const canGoPrevious = questionId > 0;
    const canGoNext = questionId < questions.length - 1 && answers[questionId] !== undefined;
    const progress = ((questionId + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-white">
            <Nav />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back button */}
                <div className="mb-6">
                    <a href="../" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Terug
                    </a>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Test hoe cyber secure je bent
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Beantwoord deze vragen om inzicht te krijgen in de cybersecurity van je organisatie.
                    </p>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            Vraag {questionId + 1} van {questions.length}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            {Math.round(progress)}% voltooid
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
                            {questions[questionId]}
                        </h2>

                        {/* Answer buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button
                                onClick={() => setAnswer(questionId, true)}
                                className={`px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 transform hover:scale-105 ${
                                    answers[questionId] === true
                                        ? 'bg-green-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                                }`}
                            >
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Ja
                                </span>
                            </button>

                            <button
                                onClick={() => setAnswer(questionId, false)}
                                className={`px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 transform hover:scale-105 ${
                                    answers[questionId] === false
                                        ? 'bg-red-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700'
                                }`}
                            >
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Nee
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setQuestionId(questionId - 1)}
                        disabled={!canGoPrevious}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                            canGoPrevious
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Vorige
                    </button>

                    <div className="flex space-x-2">
                        {questions.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === questionId
                                        ? 'bg-blue-600'
                                        : answers[index] !== undefined
                                        ? 'bg-green-400'
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Show next button or results link based on progress */}
                    {answers.length !== questions.length ? (
                        <button
                            onClick={() => setQuestionId(questionId + 1)}
                            disabled={!canGoNext}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                                canGoNext
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            Volgende
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <div className="text-center mt-8">
                            <a href={`/resultaten?vragen-beantwoord-met-ja=${answers.filter(answer => answer === true).length}`}>
                                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                                    Bekijk je resultaten
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
