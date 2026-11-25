import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Catalogo } from './Componentes/Catalogo/Catalogo'
import { libros } from './datos'
import { Caja } from './Componentes/Caja/Caja'
import { Buscar } from './Componentes/Buscador/Buscador'

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [lectura,setLectura]=useState([]);
  let librosFiltrados=[];


   librosFiltrados=libros.filter(l=>l.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase().trim()))
   

  

    const añadir=(libro)=>{
      if((lectura.filter(li=>li.id==libro.id).length>0) || !libro.disponible){
        return;
      }
        setLectura([...lectura,{id:libro.id, titulo:libro.titulo, leido: false}])
    }

  return (
    <>
      <h2>Mostrando {librosFiltrados.length} de {libros.length} libros</h2>
      <Buscar onBuscar={(texto)=>setBusqueda(texto)}></Buscar>
      <Caja titulo={"Catalogo"}><Catalogo libro={librosFiltrados} onAnadir={añadir} prestadoLista={lectura}></Catalogo></Caja>
    </>
  )
}

export default App
