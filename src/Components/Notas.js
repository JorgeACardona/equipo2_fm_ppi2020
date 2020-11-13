import React from 'react'
import '../Style/Tabla.css'


function Notas(){
    return(
        <div id="cont_tabla">
            <table id="tabla" class="egt" border="3">

<tr>

  <td id="Materia_tabla" colspan="1">Periodo</td>
  <td id="Materia_tabla" colspan="4">Nombre del Estudiante</td>


</tr>

<tr>

  <td id="Materia_tabla">Materia</td>
  <td id="Materia_tabla">N1</td>
  <td id="Materia_tabla">N2</td>
  <td id="Materia_tabla">N3</td>
  <td id="Materia_tabla">NF</td>

</tr>

<tr>

  <td id="Materia_tabla">Matemáticas</td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>

</tr>

<tr>

  <td id="Materia_tabla">Física</td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>

</tr>

<tr>

  <td id="Materia_tabla">Español</td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>
  <td id="nota"></td>

</tr>

</table>
        </div>

    )
}


export default Notas;