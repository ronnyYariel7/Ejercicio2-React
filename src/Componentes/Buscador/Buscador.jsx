
export function Buscar({ onBuscar }){

    return (
        <>
            <label htmlFor="">Buscador:</label>
            <input type="text" onChange={(e)=> onBuscar(e.target.value)}/>
        </>
    )
}