import '../assets/css/loader.css'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center flex-col h-full  '>
    
    <div className='loader'></div>
    <p className='mt-20 px-2 text-center text-xl md:text-3xl font-medium text-slate-600 '>Estamos buscando los mejores precios para vos...</p>
    </div>
  )
}

