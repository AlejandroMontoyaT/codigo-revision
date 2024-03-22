const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  //El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.
  // la funcion fetch devuelve una promesa
  const response = await fetch(`${usersEndpoint}/${username}`);// estamos buscando un usuario pero no tenemos el usuario
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);