
import { TarjetaLibro } from "../TarjetaLibro/TarjetaLibro.jsx";

export function Catalogo({libro,onAnadir,prestadoLista}){

    if(libro.length==0)
        return <p>No Hay Libros Disponibles</p>


  


    return (
        <>
        {libro.map((libro)=>(
             <TarjetaLibro key={libro.id} libro={libro} onAnadir={onAnadir} prestadoLista={prestadoLista}></TarjetaLibro>
        ))

        }
       
        </>
    )
}