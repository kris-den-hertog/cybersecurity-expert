import Nav from "@/components/nav";
import Wizard from "@/components/wizard";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <Nav />
      <div className="h-fit w-full mx-auto relative">
        {/* Main content card - responsive positioning */}
        <div className="w-full max-w-[350px] h-auto bg-main
                       lg:absolute lg:right-0 lg:top-[25px] lg:w-[350px] lg:h-[350px]
                       mx-auto lg:mx-0 mb-6 lg:mb-0
                       rounded-xl text-center p-6 lg:p-10 flex items-center flex-col">
          <h1 className="font-bold text-[20px] sm:text-[24px] lg:text-[27px] leading-tight">
            Waar kunnen we je<br />mee helpen?
          </h1>

          {/* Button container with responsive spacing */}
          <div className="mt-4 lg:mt-3 space-y-3 w-full">
            <a href="./vragenlijst">
              <button className="bg-blue-400 w-full max-w-[320px] h-[50px] shadow rounded-full px-4 mb-4">
                <p className="text-white text-[12px] sm:text-[13px] font-bold">Check je beveiliging</p>
                <p className="text-[#CCCCD1] text-[9px] sm:text-[11px]">Vul een kort vragenlijst in en ontdek hoe cyber veilig jouw bedrijf is</p>
              </button>
            </a>

            <a href="./herstel">
              <button className="bg-white w-full max-w-[320px] h-[50px] shadow rounded-full px-4 mb-4">
                <p className="text-blue-400 text-[12px] sm:text-[13px] font-bold">Herstellen na een cyberaanval</p>
                <p className="text-[#CCCCD1] text-[8px] sm:text-[10px]">Wat te doen als uw bedrijf is getroffen door cybercriminelen</p>
              </button>
            </a>

            <a href="./aanmelden">
              <button className="bg-white w-full max-w-[320px] h-[50px] shadow rounded-full px-4 mb-4">
                <p className="text-blue-400 text-[12px] sm:text-[13px] font-bold">Aanmelden voor een hackathon</p>
                <p className="text-[#CCCCD1] text-[8px] sm:text-[10px]">Wat te doen als uw bedrijf is getroffen door cybercriminelen</p>
              </button>
            </a>
          </div>
        </div>

        {/* Background image - responsive sizing */}
        <div className="bg-slate-50 bg-[url(/header.jpg)] bg-cover bg-center rounded-2xl
                       w-full h-[250px] sm:h-[300px] md:h-[350px] lg:w-[800px] lg:h-[400px]
                       mx-auto lg:mx-0 lg:m-6" />
      </div>
      <Wizard/>
    </div>
  );
}
