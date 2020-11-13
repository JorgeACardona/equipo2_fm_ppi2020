import React from "react"
import image from '../imagenes/image.png'
import  '../Style/Datos.css'
import { Link } from 'react-router-dom'
import responder from '../imagenes/responder.png'

function Datos (){
    return(
      <div>
        <Link to="/">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link>
        <div id="datos" class="text-center" id="contenedor">
          <div>
             <img src={image} alt="" width="100" height="100"></img>
          </div>

        <form >
          <div>
             <h1 id="titulo" class="font-weight-bolder" >C-Educational</h1>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputNombre" class="sr-only">Nombre</label>
            <input type="Nombre" id="inputNombre" class="form-control" placeholder="Nombre" required="" autofocus=""></input>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputApellido" class="sr-only">Apellido</label>
            <input type="Apellido" id="inputApellido" class="form-control" placeholder="Apellido" required=""></input>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputGrado" class="sr-only">Grado</label>
            <input type="Grado" id="inpuGrado" class="form-control" placeholder="Grado" required="" autofocus=""></input>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputNombredeacudiente" class="sr-only">Nombredeacudiente</label>
            <input type="Nombredeacudiente" id="inputNombredeacudiente" class="form-control" placeholder="Nombre de acudiente" required="" autofocus=""></input>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputCargo" class="sr-only">Cargo</label>
            <input type="Cargo" id="inputCargo" class="form-control" placeholder="Cargo" required="" autofocus=""></input>
          </div>
          <div class="form-group" id="user-group">
            <label for="inputEmail" class="sr-only">Correo</label>
            <input type="correo" id="inputEmail" class="form-control" placeholder="Correo" required="" autofocus=""></input>
          </div>
          <div class="form-group" id="contrasena-group">
            <label for="inputPassword" class="sr-only">Contraseña</label>
            <input type="Contraseña" id="inputPassword" class="form-control" placeholder="Contraseña" required=""></input>
          </div>
         <Link to="/clases">
         <button class="btn btn-lg btn-primary btn-block" type="submit">Finalizar Registro</button>
         </Link>
         </form>
        </div>
      </div> 
      )

    }
    export default Datos;