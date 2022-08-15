import rocket from "./assets/rocket.svg";
import { CountDown } from "./components/CountDown";

function App() {
  return (
    <div className="grid grid-cols-2 m-auto max-w-6xl gap-28">
      <div className="flex flex-col  justify-center items-center ">
        <h2 className="text-violet-700 text-5xl font-bold mb-6">
          Ready to launch in...
        </h2>
        <CountDown />
        <p className="text-gray-400 mt-8 mb-5 text-center text-lg ">
          Inscreva-se para saber mais sobre o lançamento
        </p>
        <button className="bg-violet-700 w-36 rounded-lg p-4 text-lg text-white text-center hover:bg-violet-900">
          Inscreva-se
        </button>
      </div>
      <div className="mt-32">
        <img src={rocket} alt="" />
      </div>
    </div>
  );
}

export default App;
