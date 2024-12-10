import { useState } from "react";
import { getData } from "../Api/scraping";

export const FormSearch = ({setResult,setLoading}) => {

  const [search, setSearch] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setResult([]);
    setLoading(true);
    const data = await getData(search);
    setResult(data);
    setLoading(false);
    setSearch('');
  }

  return (
    <form className="flex flex-col px-5 mt-14" onSubmit={handleSubmit}>
        <div className="mb-5">
    <label htmlFor="search" className="block mb-2 text-xl font-medium text-slate-500">Busca tu producto por nombre o marca</label>
    <input type="text" id="search" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg 
    w-full p-2 outline-none active:border-cyan-700 focus:border-cyan-700 
    " placeholder="Ej: galletas" 
    name="search"
    value={search}
    onChange={(e)=>{setSearch(e.target.value)}}
    required autoComplete="off" />
  </div>
  <button type="submit" className="text-white  font-medium rounded-lg text-xl px-5 py-2.5 text-center bg-cyan-600 hover:opacity-80 transition-opacity">Buscar</button>

    </form>
  )
}
