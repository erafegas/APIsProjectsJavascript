
const acudit = document.getElementById('acudit');
const temps = document.getElementById('temps');
const reportAcudits = []; 
var acu;


link = "https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&lang=es&appid=fd52d9c80120e6065f458ceada4602cf";

fetch(link)
    .then(response => response.json())
    .then(data =>{
         temps.textContent =data.weather[0].description;  
    })
    .catch(err => {
        console.log(err);
      });




document.querySelector('button.btn-primary').addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then( res => res.json())
        .then(data => {
       acudit.textContent = data.joke;
       acu = data.joke;
        })
        .catch(err => {
            console.log(err);
          });

});


function carregar(value) {

    const fecha = new Date();
    let dataISO = fecha.toISOString();
   
    reportAcudits.push({ acudit: acu,
        score: value,
        date: dataISO
    })

}

