import Nav from "@/components/nav"
import { Shield, AlertTriangle, Eye, Lock } from "lucide-react"

export default function Herstel() {
    return (  <div className="min-h-screen">
            <div className="max-w-[1200px] mx-auto px-4">
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
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                        <AlertTriangle className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Hoe herstel je van een
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> cyberaanval</span>
                        <br />als bedrijf?
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Effectief herstellen van cyberdreigingen en aanvallen met een gestructureerde aanpak.
                    </p>
                </div>

                {/* Cyberdreigingen Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-4">
                                <Eye className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Herstellen van een <span className="text-orange-600">cyberdreiging</span>
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Een cyberdreiging is een potentieel gevaar dat nog niet heeft toegeslagen. Snelle identificatie
                                en respons zijn cruciaal om daadwerkelijke schade te voorkomen.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-semibold text-xs">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Detectie en isolatie</h4>
                                        <p className="text-gray-600 text-sm">Activeer SOC en isoleer verdachte systemen onmiddellijk.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-semibold text-xs">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Risicoanalyse</h4>
                                        <p className="text-gray-600 text-sm">Evalueer impact op kritieke systemen en data.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-orange-600 font-semibold text-xs">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Extra beveiliging</h4>
                                        <p className="text-gray-600 text-sm">Implementeer extra beveiligingslagen en patches.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Preventieve acties</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">24/7 monitoring activeren</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Response team mobiliseren</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Stakeholders informeren</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Back-up systemen testen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cyberaanval Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">4-Fase herstelplan</h3>
                            <div className="space-y-4 text-sm">
                                <div className="border-l-4 border-red-500 pl-3">
                                    <h4 className="font-medium text-gray-900">1. Containment (0-24u)</h4>
                                    <p className="text-gray-600">Isolatie en damage control</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-3">
                                    <h4 className="font-medium text-gray-900">2. Eradication (1-7d)</h4>
                                    <p className="text-gray-600">Malware verwijderen</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-3">
                                    <h4 className="font-medium text-gray-900">3. Recovery (1-4w)</h4>
                                    <p className="text-gray-600">Systeemherstel</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-3">
                                    <h4 className="font-medium text-gray-900">4. Lessons Learned</h4>
                                    <p className="text-gray-600">Evaluatie en verbetering</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mb-4">
                                <Lock className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Herstellen van een <span className="text-red-600">cyberaanval</span>
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Wanneer een cyberaanval succesvol is geweest, is snelle en effectieve respons essentieel.
                                Een gestructureerde aanpak minimaliseert schade en versnelt het herstelproces.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                        <AlertTriangle className="h-3 w-3 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Crisis management</h4>
                                        <p className="text-gray-600 text-sm">Activeer incident response team en communicatie.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                        <Lock className="h-3 w-3 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Forensisch onderzoek</h4>
                                        <p className="text-gray-600 text-sm">Documenteer bewijsmateriaal voor onderzoek.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                        <Shield className="h-3 w-3 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Systeemherstel</h4>
                                        <p className="text-gray-600 text-sm">Herstel van schone back-ups en test grondig.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
