import { LogoCard } from "./LogoCard";


export const CardProduct = ({product}) => {
    const {market,description,price,imageUrl} = product;
  return (
    

<div className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow w-full h-[420px] flex flex-col justify-evenly">
    <img className="rounded-t-lg h-56 w-full object-fill" src={imageUrl} alt="" />
    <div className="p-5">
        <LogoCard market={market}/>
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">{price}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
    </div>
</div>


  )
}
