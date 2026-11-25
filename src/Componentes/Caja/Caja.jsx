import "../Caja/Caja.css"

export function Caja({titulo,children}){

    return (
        <section className="catalogo-section">
            <h1>{titulo}</h1><br />
                {children}

        </section>
    )

}