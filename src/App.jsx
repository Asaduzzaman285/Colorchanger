import { useState } from "react"

function App() {
   const colorChanger =(newcolor)=>{
    setColor(newcolor)
   }
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed justify-center flex flex-wrap bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold text-white border-white border-2" style={{backgroundColor: "red"}} onClick={()=>colorChanger("red")}>
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold  text-black  border-red-500  border-2" style={{backgroundColor: "white"}} onClick={()=>colorChanger("white")}>
            White
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold border-white border-2" style={{backgroundColor: "black"}} onClick={()=>colorChanger("black")}>
            Black
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold text-red-400 border-green-500 border-2" style={{backgroundColor: "yellow "}} onClick={()=>colorChanger("yellow")}>
            Yellow
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold text-black border-green-400 border-2" style={{backgroundColor: "blue"}} onClick={()=>colorChanger("blue")}>
            Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold" style={{backgroundColor: "cyan"}}>
            Cyan
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold" style={{backgroundColor: "green"}}>
            Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg font-bold " style={{backgroundColor: "pink"}}>
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
