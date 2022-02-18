var itens =""
let textos =   document.querySelector("#resultado")
let manual =   document.querySelector("#manual")
document.getElementById("btnExibir").onclick = function () {
    let ddl = document.getElementById('ddlCores');
    let itensSelecionados = Array.from(ddl.options)
            .filter(option => option.selected)
            .map(option => option.value);
            itens=  textos.value
itens =`${itens}${itensSelecionados}

`
   
    document.getElementById("resultado").innerHTML = itens;
};

function limpar(){
    itens=""
    document.getElementById("resultado").innerHTML = itens;

}

function Inserir() {


    document.getElementById("resultado").innerHTML = itens=`${itens}${manual.value}

` 
}
document.getElementById('copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#resultado").value;
  await navigator.clipboard.writeText(text);
  alerta() 

}



  function alerta() {
    
    window.alert("texto copiado")
  }