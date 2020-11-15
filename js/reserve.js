let tt = 0;
window.addEventListener('load', updateDOM());

// render made reservation 
function updateDOM() {
  if (!localStorage.myreservations) {
    const Myreservations = document.querySelector('.myreservations');
    const sec = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.innerText = "Please Make Reservations"
    h2.style.color = 'red';
    const br = document.createElement('br');
    sec.appendChild(h2);
    sec.appendChild(br);
    const wildlife = document.createElement('a');
    wildlife.href = './wildlife.html';
    wildlife.innerText = 'Wildlife';
    sec.appendChild(wildlife);
    sec.appendChild(br);
    const sceneries = document.createElement('a');
    sceneries.href = './sceneries.html';
    sceneries.innerText = 'Scenaries';
    sec.appendChild(sceneries);
    sec.style.textAlign = 'center';
    sec.style.lineHeight = '3rem';
    Myreservations.appendChild(sec);
  } else {
    const reservedataArray = JSON.parse(localStorage.myreservations);
    reservedataArray.forEach(reservedata => {
      const Myreservations = document.querySelector('.myreservations');
      const totalprice = document.querySelector('.total-payment');
      const TOTAL = document.querySelector('.TOTAL');
      const container = document.createElement('div');
      container.className = 'each-reservation';
      const h3 = document.createElement('h3');
      h3.innerText = reservedata.name;
      container.appendChild(h3);
      const imgContainer = document.createElement('div');
      imgContainer.style.height = '12rem';
      const img = document.createElement('img');
      img.src = reservedata.url;
      img.style.height = "100%";
      img.style.width = "100%";
      imgContainer.appendChild(img);
      container.appendChild(imgContainer);
      const h4 = document.createElement('h4');
      h4.innerText = `${reservedata.package} Package`;
      container.appendChild(h4);

      Myreservations.appendChild(container);
      const p = document.createElement('h3');
      p.innerHTML = `${reservedata.name} :  KSH ${reservedata.price}`;

      const btn = document.createElement('button');
      btn.innerHTML = 'Cancel Reservation';
      btn.id = 'cancelReservation';

      btn.addEventListener('click', () => {
        if (reservedataArray.length === 1) {
          localStorage.removeItem("myreservations");
          location.reload();
        } else {
          const newData = reservedataArray.map(e => {
            return e.name;
          }).indexOf(reservedata.name);

          const newdata2 = reservedataArray.splice(newData - 1, 1);
          localStorage.myreservations = JSON.stringify(newdata2);
          location.reload();
        }
      });

      container.appendChild(btn);
      totalprice.prepend(p);
      tt += reservedata.price;

      TOTAL.innerHTML = ` TOTAL : ${tt}`
    });

  }

}
