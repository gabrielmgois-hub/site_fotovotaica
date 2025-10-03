let resposta = document.getElementById(`resposta`)

function principal(){
  
  let potencia = Number(document.getElementById(`potencia`).value)

  let media =  Number(document.getElementById(`media`).value)

  let mes = Number(document.getElementById(`mes`).value)

  let eficiencia = Number(document.getElementById(`eficiencia`).value) / 100

  let calculo = (potencia * media * mes * eficiencia) / 1000

resposta.innerHTML = ``
resposta.innerHTML += `a produçao media da sua placa é ${calculo.toFixed(2)} por mes`



}