import React  from "react"
import "../Style/Preguntas.css"
function Inquietudes (){
  return (
    <div>
      <div id="botonduda">
        <div id="btndespe" class="btn-group">
          <button id= "btnpregunta"
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            Profesor <span class="caret"></span>
          </button>

          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">Sanclemente</a>
            </li>
            <li>
              <a href="#">Julian</a>
            </li>
            <li>
              <a href="#">Jimena</a>
            </li>
            <li class="divider"></li>
          </ul>
        </div>

        <div id="btndespe" class="btn-group">
          <button id= "btnpregunta"
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            Materia <span class="caret"></span>
          </button>

          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">Matemáticas</a>
            </li>
            <li>
              <a href="#">Física</a>
            </li>
            <li>
              <a href="#">Español</a>
            </li>
            <li class="divider"></li>
          </ul>
        </div>

        <div id="btndespe" class="btn-group">
          <button id= "btnpregunta"
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            Grupo <span class="caret"></span>
          </button>

          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">11-1</a>
            </li>
            <li>
              <a href="#">11-2</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="cuadrotexto">
        <textarea name="comentarios" rows="10" cols="40">
          Escribe aquí tus comentarios
        </textarea>
      </div>
      <div id="boton_enviar">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Enviar</button>
    </div>
    </div>
  );
}
export default Inquietudes;