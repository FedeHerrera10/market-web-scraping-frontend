import { useState } from "react"
import { FormSearch } from "./components/FormSearch"
import { ListPrice } from "./components/ListPrice";
import { Loading } from "./components/Loading";
  
export const App = () => {
  const [result,setResult] = useState([]);
  const [loading,setLoading]=useState(false);

  return (
    <>
     <div className="w-full flex absolute top -z-10 left-0 right-0">
      <div className="w-1/4 h-2 md:h-1 bg-sky-200"></div>
      <div className="w-1/4 h-2 md:h-1 bg-fuchsia-200"></div>
      <div className="w-1/4 h-2 md:h-1 bg-violet-200"></div>
      <div className="w-1/4 h-2 md:h-1 bg-green-200"></div>
    </div>
    
    <main className="max-w-4xl mx-auto h-screen relative">
    {loading 
    ? 
      <Loading/>
      :
      <>
        <h1 className="pt-10 text-center text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl xl:text-6xl">Market Compare</h1>
        <p className="text-center text-sm mt-2 text-slate-800 md:text-xl">Compara precios en supermercados argentinos.</p>
        <FormSearch setResult={setResult} setLoading={setLoading}/>
        {result.length > 0 && <ListPrice result={result}/>}
       
       </>
      
      
    }

       
     
    </main>

</>

  )
}
