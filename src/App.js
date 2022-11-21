import html2canvas from "html2canvas";
import { useState } from "react";

function App() {
    const [linea1, setLinea1] = useState("");
    const [linea2, setLinea2] = useState("");
    const [img, setImg] = useState("");
    const handleChange1 = (e) => {
        setLinea1(e.target.value);
    };
    const handleChange2 = (e) => {
        setLinea2(e.target.value);
    };

    const handleSelect = (e) => {
        setImg(e.target.value);
    };

    const handleClick = (e) => {
        html2canvas(document.querySelector("#meme")).then((canvas) => {
            let img = canvas.toDataURL('image/png')
            let link = document.createElement('a')
            link.download='meme.png'
            link.href= img
            link.click()
        });
    };
    return (
        <div className=" h-screen w-full flex flex-col justify-center items-center bg-slate-600">
            <h1 className="text-4xl text-gray-400 font-bold p-3">Meme generator</h1>
            {/*select picker de memes */}
            <select onChange={handleSelect} className='rounded p-1 mb-1 mt-1 border border-gray-900 w-4/5'>
                <option value="fire">Casa en llamas</option>
                <option value="futurama">futurama</option>
                <option value="history">Aliens</option>
                <option value="matrix">Matrix</option>
                <option value="philosoraptor">philosoraptor</option>
                <option value="smart">smartguy</option>
            </select>
            {/* input text - primer linea */}
            <input onChange={handleChange1} type="text" placeholder="linea 1" className="rounded p-1 mb-1 mt-1 border border-gray-900 w-4/5" />
            {/* input text - segunda linea */}
            <input onChange={handleChange2} type="text" placeholder="linea 2" className="rounded p-1 mb-1 mt-1 border border-gray-900 w-4/5" />
            {/* boton exportar*/}
            <button onClick={handleClick}className='p-1 border border-white rounded bg-blue-600 text-white mt-1'>Exportar</button>
            <div id="meme" className="flex flex-col">
                <span className="w-full text-4xl text-white  absolute top-64 sm:text-5xl ml-12" >{linea1}</span>
                <br />
                <span className="w-full text-4xl text-white absolute bottom-20  ml-12 sm:text-5xl">{linea2}</span>
                <img src={`/img/${img}.jpg`} className="w-full border-2" />
            </div>
        </div>
    );
}

export default App;
