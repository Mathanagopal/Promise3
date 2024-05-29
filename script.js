
const satelite = document.getElementsByClassName("satelite")[0];

function sateliteInfo() {
  const url = "https://isro.vercel.app/api/customer_satellites";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.customer_satellites.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 15rem;");
        card.innerHTML += `
                <div class="card-body">
                  <h5 class="card-title">${element.country}</h5>
                  <div class="card-description">
                  <h5>${element.launch_date}</h5>
                  <p>ID : ${element.id}<br>Mass : ${element.mass} Kilograms<br>Launcher : ${element.launcher}</p>
                  </div>
                  </div>`;
        satelite.append(card);
      });
    }).catch((error)=>console.log(error))
}

sateliteInfo();