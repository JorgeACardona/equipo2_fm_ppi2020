import React from "react";
import camara from '../imagenes/camara.png'
import "../Style/Perfil.css"

function Usuario() {
    return (
      <div id="Perfil">
        <div id="subirfoto">
          <div id="Editarfoto"> </div>
        <input type="file" id="file" accept="image/*"></input>
        <label id="doc" for="file"> <img id="ft"src={camara} width="20" height="20"></img>
            Subir Archivo
        </label>
        
        </div>

       <div > <div id="Parrafo1"> <p id="usuar">Usuario:</p> </div> <div id="infor1"><p id="usuar">Ramon Perez</p> </div> </div>
       <div> <div id="Parrafo2"> <p id="usuar">Grado:</p> </div><div id="infor2"><p id="usuar">11°1</p> </div> </div> 
        <div> <div id="Parrafo3"> <p id="usuar">Cargo:</p> </div> <div id="infor3"><p id="usuar">Estudiante</p> </div> </div> 
        </div>
    )
}

export default Usuario;