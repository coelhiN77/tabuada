var valor = document.querySelector("div.container input");
var table = document.querySelector("div.container div.tabuada");
const calculate = document.querySelector("div.container button");

calculate.addEventListener("click", () => {
  table.innerHTML = ""

  if(Number(valor.value) < 1 || Number(valor.value) > 10) {
    table.innerHTML = "Insira um valor de 1 a 10 ツ"
  
  } else {

    for(i = 1; i <= 10; i++) {
      var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);
      var result = document.createElement("p")

      result.innerHTML = calc
      table.appendChild(result)
    }
  }
})

