const input = document.querySelector("#input--anhalteweg");
const button = document.querySelector("#button--anhalteweg");
const output = document.querySelector("#output--anhalteweg");

let geschwindigkeit;
let bremsweg;
let reaktionsweg;
let anhalteweg;
let anhalteweg_de;

button.addEventListener("click", () => {
    geschwindigkeit = Number(input.value);
    bremsweg = (geschwindigkeit / 10) * (geschwindigkeit / 10);
    reaktionsweg = (geschwindigkeit / 10) * 3;
    anhalteweg = `${Math.round((bremsweg + reaktionsweg) * 100) / 100} Metern`;
    anhalteweg_de = (anhalteweg.replace(".", ","));
    output.innerText = anhalteweg_de;
});
