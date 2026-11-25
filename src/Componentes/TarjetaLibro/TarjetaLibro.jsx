import "../TarjetaLibro/TarjetaLibro.css"

export function TarjetaLibro({libro, onAnadir, prestadoLista}){

    const desactivado=((prestadoLista.filter(li=>li.id==libro.id).length>0) || !libro.disponible)?true:false;

    const colores=(estado)=>{
        let etiqueta=null;

        if(estado==="Disponible")
            etiqueta=<span style={{color:"green"}}>{estado}</span>
        
        else if(estado==="Prestado")
            etiqueta=<span style={{color:"grey"}}>{estado}</span>

        return etiqueta;

    }

    


    return (
        <>
        <div className="card">
            <p>Titulo:{libro.titulo}</p><br />
            <p>Autor:{libro.autor}</p><br />
            <p>Paginas:{libro.paginas} {libro.paginas>200 && "Lectura Corta"}</p><br />
            <p>Disponible:{colores((libro.disponible)?"Disponible":"Prestado")} </p><br />
            <button onClick={()=>onAnadir(libro)} disabled={desactivado}>Añadir a mi Lista</button>
        </div>
        </>
    )
}