'use client'
import React from "react";
import axios from "axios";
import { useState } from "react";


const api = axios.create({
	baseURL: "https://succulent-celestial-wallet.glitch.me/",
	// baseURL: "http://localhost:3000/",
	withCredentials: true,
});

export default function Wizard() {
    const [selectedRole, setSelectedRole] = React.useState("");
    const [selectedAction, setSelectedAction] = React.useState("");
    const [selectedGoal, setSelectedGoal] = React.useState("");
    const [visible, setVisible] = useState(true);

    function hide() {
        setVisible(false);
    }

    const [response, setResponse] = React.useState("");

    const dropDownMenuOptions: Record<string, string[]> = {
        roles: [
            "Mbk Bedrijf",    // 0
            "Security IT Professional",    // 1
            "Student",    // 2
            "Werkzoekende",    // 3
            "Omscholer",    // 4
            "Opleider",    // 5
            "Overheid",    // 6
            "Opdrachtgever",    // 7
            "Brancheorganisatie",    // 8
        ],

        actions: [
            "Advies online",    // 0
            "Melding maken",    // 1
            "Stappenplan",    // 2
            "Subsidie",    // 3
            "Verzekering - Juridisch",    // 4
            "CyberScan - Audit",    // 5
            "CyberSecurity Professional",    // 6
            "Opleiding",    // 7
            "Software / Hardware",    // 8
        ],

        specifiek: [
            "Wat te doen bij een hack?",    // 0
            "Basis cybersecurity-plan",    // 1
            "Veilig werken op afstand",    // 2
            "Afspraken met leveranciers",    // 3
            "Begeleiding maken back-up",    // 4
            "Kies veilige cloudoplossing",    // 5
            "Medewerkers bewust maken",    // 6
            "Uitvoeren risicoanalyse",    // 7
            "Juridische richtlijnen"    // 8
        ]
    }
    const buildInRespondes: Record<string, string> = {
        "001": "Op www.example.com vind je cybersecurity plannen om jouw bedrijf te beschermen tegen hacks!",//: "Ik ben een Mbk Bedrijf en ik wil Advies online om Basis cybersecurity-plan?. Geef me advies.",
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#EBFAFF] rounded-2xl py-6 px-4 sm:px-7 text-center relative">
                <div
                    className={`absolute inset-0 bg-sky-50/80 backdrop-blur-xl rounded-2xl text-center flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
                      visible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h2 className="font-bold text-lg sm:text-xl mb-4">
                      Abonneer op ons Plus abbonement om uzelf aan te melden
                      voor de hackathon.
                    </h2>
                    <button
                      onClick={hide}
                      className="bg-blue-400 py-3 px-6 rounded-full font-bold text-white mt-2"
                    >
                      Abonneer
                    </button>
                  </div>
                <h1 className="font-bold text-2xl sm:text-3xl mb-6">In drie stappen op weg</h1>
                <br />
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-1 text-sm sm:text-base">
                    <span className="hidden sm:inline">Als</span>
                    <select
                        className="w-full sm:w-auto sm:mx-2 bg-white p-2 sm:p-3 rounded-md"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option value="">Kies een rol</option>
                        {dropDownMenuOptions.roles.map((role) => (
                            <option key={role} value={role.toLowerCase()}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <span className="hidden sm:inline">wil ik</span>
                    <select
                        className="w-full sm:w-auto sm:mx-2 bg-white p-2 sm:p-3 rounded-md"
                        value={selectedAction}
                            onChange={(e) => setSelectedAction(e.target.value)}
                    >
                        <option value="">Kies een actie</option>
                        {dropDownMenuOptions.actions.map((action) => (
                            <option key={action} value={action.toLowerCase()}>
                                {action}
                            </option>
                        ))}
                    </select>
                    <span className="hidden sm:inline">zodat ik</span>
                    <select
                        className="w-full sm:w-auto sm:mx-2 bg-white p-2 sm:p-3 rounded-md"
                        value={selectedGoal}
                        onChange={(e) => setSelectedGoal(e.target.value)}
                    >
                        <option value="">Kies een resultaat</option>
                        {dropDownMenuOptions.specifiek.map((result) => (
                            <option key={result} value={result.toLowerCase()}>
                                {result}
                            </option>
                        ))}
                    </select>
                    <button className="w-full sm:w-auto bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md mt-4 sm:mt-0" onClick={() => {
                        const roleId = dropDownMenuOptions.roles.indexOf(selectedRole);
                        const actionId = dropDownMenuOptions.actions.indexOf(selectedAction);
                        const goalId = dropDownMenuOptions.specifiek.indexOf(selectedGoal);

                        const questionId = `${roleId}${actionId}${goalId}`;

                        if (buildInRespondes[questionId]) {
                            setResponse(buildInRespondes[questionId]);
                            return;
                        }

                        const prompt = `Je bent een ai assistant op een website die gebruikers helpt meer te weten te komen over cybersecurity.
                        Een gebruiker vraagt:
                        Ik ben een ${selectedRole} en ik wil ${selectedAction} om ${selectedGoal}.
                        Geef me advies.. Geef een kort antwoord in het Nederlands.`;

                        setResponse("Zoeken...");
                        api.post("/gemini", { prompt })
                            .then(response => response.data)
                            .then(data => {
                                setResponse(data.response
                                    .replace(/\*(.+?)\*/g, '<span style="font-weight: bold;">$1</span>')
                                    .replace(/\n/g, '<br>')
                                    .replace(/\*/g, ''))
                            })
                            .catch(error => console.error('Error:', error));
                    }}>Volgende</button>

                </div>
            </div>
            {response && (
                <div
                    dangerouslySetInnerHTML={{ __html: response }}
                    className="rounded-2xl py-4 sm:py-6 px-4 sm:px-7 text-left drop-shadow-lg bg-white mt-6 sm:mt-10"
                />
            )}
        </div>
    );
}