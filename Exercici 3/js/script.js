
const acudit = document.getElementById('acudit');
const reportAcudits = []; 
var acu;

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

});


function carregar(value) {

    const fecha = new Date();
    let dataISO = fecha.toISOString();
   
    reportAcudits.push({ acudit:acu,
        score: value,
        date: dataISO
    })
    console.log(reportAcudits);
}

