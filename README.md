# COMPONENTES Y RESPONSABILIDADES

App

- renderizar app
- renderizar titles, inputs y buttons de cada estado
- renderizar warning
- cambiar estado
- ocultar botones anterior y siguiente dependiendo de si está en el primero o en el tercer paso
- ocultar botón siguiente hasta que no estén todos los campos de cada paso rellenados
- cambiar título de cada paso
- mostrar información final con todos los datos introducidos
- mostrar label a la derecha del año de nacimiento cuando haya sido introducido

Input

- recibir dato del usuario
- renderizar input
- comprobar que el input correspondiente es una fecha, un número o un email
- ocultar la contraseña

Button

- recibir click del usuario
- renderizar botón

Warning

- renderizar aviso

Title

- renderizar título pasado

Info

- renderizar los datos del usuario

# DATOS

userData (objeto)
state (number)
completedInputs (array) (un valor por paso)

Datos usuario:

- Name
- Last name
- Birthdate (cuando el usuario introduzca la fecha, al lado de este campo debe aparecer su edad en años)
- Email
- Username
- Password
- Remember password (checkbox)
