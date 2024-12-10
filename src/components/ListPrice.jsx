import { CardProduct } from "./CardProduct"


export const ListPrice = ({result}) => {
       
     return (
    
        <div className="gap-2 mt-10 grid grid-cols-1 place-items-center items-center md:grid-cols-2 lg:grid-cols-3 animate-fade px-5">
        {
            result.map((r,index)=>(
                <CardProduct key={index} product={r}/>
            ))
        }
        </div>
  )
}
