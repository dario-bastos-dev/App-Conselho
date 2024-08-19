import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setIdviceID] = useState("");
  const [animate, setAnimate] = useState(false);

  const fetchAdvice = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 100);
      const data = await axios.get(
        `https://api.adviceslip.com/advice/${randomNumber}`
      );

      setAdvice(data.data.slip.advice);
      setIdviceID(data.data.slip.id);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    } catch (error) {
      console.error("Erro ao buscar conselho:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg md:w-80 w-60 ${
              animate && `animate-fadeIn`
            }`}
          >
            <h1 className="text-gray-500 text-sm">Conselho #{adviceId}</h1>
            <p className="text-lg font-semibold my-4 sm:text-lg text-[14px]">{advice}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-full hover:bg-blue-600 transition duration-300"
            onClick={fetchAdvice}
          >
            Gerar novo conselho
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
