# Week 4 - Challenge 4

## Formulario React

Crea con React un formulario de tres pasos. En cada paso habrá un grupo de campos, y sólo se debe ver un paso a la vez. Pon en cada paso un botón para navegar al siguiente y otro para navegar al anterior (en el primer paso no debe verse el botón de anterior). En el tercer paso debe haber un botón "Acceder".

En cada paso, el botón para continuar al siguiente paso debe estar deshabilitado hasta que se rellenen todos los campos del paso.

Usar context.

Utiliza Bootstrap para este ejercicio, instálalo mediante npm.

- Paso 1: Personal data.
  - Name
  - Last name
  - Birthdate (cuando el usuario introduzca la fecha, al lado de este campo debe aparecer su edad en años)
  - Email
- Paso 2: Access data.
  - Username
  - Password
  - Repeat password
- Paso 3: Login.
  - Username
  - Password
  - Remember password (checkbox)

En el paso 3, el usuario debe introducir los mismos datos que rellenó en el paso anterior. Si no son correctos debe aparecer un aviso diciéndolo.

Si son correctos, se le debe mostrar una pantalla con todos los datos introducidos en el formulario (sería como un cuarto paso).
