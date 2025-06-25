import { Dices, Martini } from "lucide-react";

export default function Home() {
  return (
    <div className="w-5/6 sm:h-[48rem] h-auto mx-auto mt-4 bg-card1 rounded-2xl shadow-lg flex items-center justify-center">
      <div className="mt-4 flex flex-col items-center w-full h-full p-8 gap-4 rounded-lg">
        <div className="flex items-center justify-center w-full gap-2">
          <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Buscar..."
              className="h-10 flex-grow text-base text-text font-bold border-2 border-text p-4 px-6 rounded-full bg-transparent placeholder-opacity-70 focus:outline-none"
            />

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-accent text-text font-semibold rounded-lg shadow hover:bg-accent-hover transition flex items-center justify-center gap-2 cursor-pointer">
                Buscar
                <Martini className="inline" />
              </button>
              <button className="px-6 py-2 bg-accent text-text font-semibold rounded-lg shadow hover:bg-accent-hover transition flex items-center justify-center gap-2 cursor-pointer">
                Aleatório
                <Dices className="inline" />
              </button>
            </div>
          </div>
        </div>
        <div className="sm:px-18 flex sm:flex-wrap flex-col sm:gap-4 items-center gap-4 w-full h-full border-accent border-2">
          <div className="rounded-lg sm:w-[31rem] sm:h-[31rem] overflow-hidden shadow-lg">
            <img
              src="https://www.thecocktaildb.com//images/media/drink/vrwquq1478252802.jpg/medium"
              alt="Drink"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="sm:w-[46rem] sm:h-[31rem] bg-card2 rounded-lg p-8 px-12 shadow-lg flex flex-col items-center gap-4">
            <span className="sm:text-3xl font-bold text-text">Nome do Drink</span>
            <ul className="list-disc list-inside text-text-secondary">
              <li>Ingrediente 1</li>
              <li>Ingrediente 2</li>
              <li>Ingrediente 3</li>
              <li>Ingrediente 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
