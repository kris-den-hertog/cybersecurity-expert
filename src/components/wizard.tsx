import React from "react";

export default function Wizard() {
    const roles = ["MKB bedrijf", "Security IT bedrijf", "Werkzoekende"];
    const actions = ["Leren", "Starten", "Een baan vinden"];
    const results = ["Kan groeien", "Kan verdienen", "Mezelf ontwikkelen"];

    return (
        <div className="bg-[#EBFAFF] rounded-2xl py-6 px-7 text-center">
            <h1 className="font-bold text-3xl">In drie stappen op weg</h1>
            <br />
            <p>
                Als{" "}
                <select className="mx-2 bg-white p-2 rounded-md">
                    <option value="">Kies een rol</option>
                    {roles.map((role) => (
                        <option key={role} value={role.toLowerCase()}>
                            {role}
                        </option>
                    ))}
                </select>
                wil ik{" "}
                <select className="mx-2 bg-white p-2 rounded-md">
                    <option value="">Kies een actie</option>
                    {actions.map((action) => (
                        <option key={action} value={action.toLowerCase()}>
                            {action}
                        </option>
                    ))}
                </select>
                zodat ik{" "}
                <select className="mx-2 bg-white p-2 rounded-md">
                    <option value="">Kies een resultaat</option>
                    {results.map((result) => (
                        <option key={result} value={result.toLowerCase()}>
                            {result}
                        </option>
                    ))}
                </select>
            </p>
        </div>
    );
}
