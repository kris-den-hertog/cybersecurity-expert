'use client'

import { useState } from "react";
import Nav from "@/components/nav";

export default function Form() {
  const [visible, setVisible] = useState(true);

  function hide() {
    setVisible(false);
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />
        {/* Back button */}
        <div className="mb-6">
            <a href="../" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Terug
            </a>
        </div>
        <div className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Form Section */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-fit relative">
                  {/* Overlay */}
                  <div
                    className={`w-full h-full bg-sky-50/80 backdrop-blur-xl text-center flex flex-col items-center justify-center p-6 absolute transition-opacity duration-300 ${
                      visible ? "block" : "hidden"
                    }`}
                  >
                    <h2 className="font-bold text-xl">
                      Abonneer op ons Premium abbonement om uzelf aan te melden
                      voor de hackathon.
                    </h2>
                    <button
                      onClick={hide}
                      className="bg-blue-400 py-3 px-6 rounded-full font-bold text-white mt-6"
                    >
                      Abonneer
                    </button>
                  </div>

                  {/* Form Content */}
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Contact Informatie
                      </h2>
                      <p className="text-gray-600">
                        Meld uw bedrijf aan voor de hackathon
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="bedrijfsnaam"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Bedrijfsnaam
                        </label>
                        <input
                          id="bedrijfsnaam"
                          type="text"
                          placeholder="Voer uw bedrijfsnaam in"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400 text-gray-900"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email adres
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="naam@bedrijf.nl"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400 text-gray-900"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="reason"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Reden voor deelname
                        </label>
                        <textarea
                          id="reason"
                          rows={4}
                          placeholder="Vertel ons waarom uw bedrijf wil deelnemen aan deze hackathon..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400 text-gray-900 resize-none"
                        />
                      </div>

                      <button
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                      >
                        Aanmelden voor Hackathon
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Section */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-fit">
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
                        Waarom meedoen aan onze hackathon?
                      </h1>
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Tijdens onze hackathon zullen studenten uw bedrijf op
                        de proef stellen. Deze unieke ervaring biedt uw
                        organisatie de kans om verse ideeën en innovatieve
                        oplossingen te ontdekken die rechtstreeks van de
                        volgende generatie tech-talenten komen.
                      </p>

                      <p>
                        Deze getalenteerde studenten werken intensief aan
                        real-world uitdagingen die uw bedrijf voorlegt. Dit
                        betekent niet alleen concrete resultaten en prototypes,
                        maar ook waardevolle inzichten op de zwakke plekken
                        binnen de beveiliging van uw bedrijf.
                      </p>

                      <div className="bg-blue-50 rounded-lg p-4 mt-6">
                        <h3 className="font-semibold text-blue-900 mb-2">
                          Wat krijgt u?
                        </h3>
                        <ul className="text-blue-800 space-y-1 text-sm">
                          <li>• Directe toegang tot innovatieve oplossingen</li>
                          <li>• Netwerkmogelijkheden met toptalent</li>
                          <li>• Zichtbaarheid op zwakke plekken</li>
                          <li>• Potentiële recruitment opportunities</li>
                        </ul>
                      </div>

                      <p className="text-sm text-gray-500 mt-6">
                        Sluit u aan bij toonaangevende bedrijven die al hebben
                        ontdekt hoe waardevol deze samenwerking kan zijn voor
                        hun innovatieproces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Info Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
