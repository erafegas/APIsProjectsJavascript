
const acudit = document.getElementById('acudit');

document.querySelector('button.btn-primary').addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           acudit.textContent = data.joke;
        })
});