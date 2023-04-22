//se crea mostrarFecha con una funcion realizando una tarea especifica.
// se utiliza Const para declarar una variable cuyo valor no cambiará durante la vida útil del programa.

function mostrarFecha() {

//Declaramos a traves de cons, los dias de la semana dentro de  una semana (diasSemana) y los meses del año.
  
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//const fecha = new Date(),Date se utiliza para trabajar con fechas y horas, se le asigna la variable fecha
//const diaSemana = diasSemana[fecha.getDay()];Este código está utilizando la instancia de la clase Date creada anteriormente (fecha) para obtener el día de la semana correspondiente a la fecha actual.
  Para ello, se utiliza el método getDay(), el cual devuelve un número del 0 al 6 que representa el día de la semana, donde 0 es Domingo, 1 es Lunes, 2 es Martes, y así sucesivamente.
//const mes = meses[fecha.getMonth()];Este código está utilizando la instancia de la clase Date creada anteriormente (fecha) para obtener el mes correspondiente a la fecha actual. Para ello, se utiliza el método getMonth()
,el cual devuelve un número del 0 al 11 que representa el mes, donde 0 es enero, 1 es febrero, 2 es marzo, y así sucesivamente.
//const anio = fecha.getFullYear();  es utilizada para obtener el año correspondiente a la fecha actual,
//const hora = fecha.getHours(); devuelve un número entero que representa la hora actual en el formato de 24 horas (de 0 a 23).
//const minutos = fecha.getMinutes(); devuelve un número entero que representa los minutos actuales en la hora (de 0 a 59).
//const segundos = fecha.getSeconds();devuelve un número entero que representa los segundos actuales en el minuto (de 0 a 59).

      const fecha = new Date();
      const diaSemana = diasSemana[fecha.getDay()];
      const dia = fecha.getDate();
      const mes = meses[fecha.getMonth()];
      const anio = fecha.getFullYear();
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const segundos = fecha.getSeconds();

  //se define una variable llamada mensaje que utiliza la plantilla de cadena de caracteres para incluir las variables diaSemana, dia, mes, anio, hora, minutos y segundos
      const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;
 
 //para mostrar el mensaje en una ventana emergente en el navegador:
      alert(mensaje);

//se está calculando el tiempo que queda hasta el final del año, utilizando la instancia de la clase Date creada anteriormente (fecha),
  Primero, se crea una nueva instancia de Date llamada fechaFinAnio, que representa el 31 de diciembre del año actual a las 23:59:59.
  
      const fechaFinAnio = new Date(anio, 11, 31, 23, 59, 59); // 31 de diciembre del año actual a las 23:59:59
      const tiempoRestante = fechaFinAnio - fecha;
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutosRestantes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundosRestantes = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

//asigna la cantidad de días, horas, minutos y segundos que faltan para que termine el año a la variable.

      const tiempoRestanteTexto = `Quedan ${dias} días, ${horas} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para que termine el año.`;
      const tiempoRestanteElemento = document.getElementById("tiemporestante");
      tiempoRestanteElemento.innerText = tiempoRestanteTexto;
}
