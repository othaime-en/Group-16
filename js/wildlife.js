document.addEventListener('load', scroll());

function scroll() {
  if (localStorage.id) {
    const scene = document.getElementById(localStorage.id);
    scene.scrollIntoView();
    localStorage.clear();
  }
}

// update theme 
function updateReserve(name, url, package, price) {
  const myreserve = {
    name,
    url,
    package,
    price
  }

  if (localStorage.myreservations) {
    const reserveAlready = JSON.parse(localStorage.myreservations);
    reserveAlready.push(myreserve);
    localStorage.myreservations = JSON.stringify(reserveAlready);
  } else {
    const reserveArray = [myreserve];
    localStorage.myreservations = JSON.stringify(reserveArray);
  }
}
