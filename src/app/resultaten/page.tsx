"use client";
import Nav from "@/components/nav";
import React from "react";

export default function Home() {
    const [yesAnswers, setYesAnswers] = React.useState<number | undefined>();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const yesCount = params.get('vragen-beantwoord-met-ja');
        if (yesCount) {
            setYesAnswers(parseInt(yesCount));
        }
    }, []);

    return (
        <div className="min-h-screen bg-white min-h-screen max-w-[1200px] mx-auto px-4">
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

                {
                    yesAnswers !== undefined && (

                    <>
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {`Je hebt ${yesAnswers} vragen beantwoord met ja`}
                        </h1>
                    </div>


                    <div className="text-lg text-gray-600 max-w-2xl">
                        {yesAnswers >= 7 ? (
                            <p className="mt-10">
                                Gefeliciteerd! Je bent goed opgewassen tegen cyber criminaliteit. Let wel op dat technologie snel veranderd.
                                Als je zelfverzekerd wil zijn voor de toekomst en/of alle benodigde extra stappen die handig zijn om te ondernemen
                                wilt weten kan je alsnog ons lidmaatschap aanschaffen. Ons premium abonnement levert nog meer opties op om beter
                                voorbereid zijn op een mogelijke cyber aanval.
                            </p>
                        ) : (
                            <>
                                <p className="mt-10">
                                    Er moeten nog een aantal stappen ondernomen worden voor dat je goed opgewassen bent tegen cyber criminaliteit.
                                </p>

                                <p className="mt-10">
                                    In de afgelopen 2 jaar hebben 77% van de mkb-bedrijven te maken gekregen met cyber criminaliteit.
                                    Gemiddeld kost een cyber incident € 270.000, om dit te voorkomen kun je onze wizard aanschaffen hier beneden.
                                    Tegen een relatief kleine betaling kom je alles te weten over wat je moet ondernemen om je bedrijf op een zo goed mogelijke manier
                                    cyber secure te maken.
                                </p>
                            </>
                        )}

                    </div>
                    </>
                    )
                }
            </div>
        </div>
    );
}
