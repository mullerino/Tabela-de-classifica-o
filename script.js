var times =[];
var countT = 0;
var vitTotal = []; 
var derrTotal = 0;
var x =1;
var b=0;

var pV=0;

function AdcTime(){
    var time = {logo: "",nome: "", pontos: 0, vitorias: 0, derrotas: 0};
    
    var timeAdc = document.getElementById("inputText").value;
    var linkLogo = document.getElementById("inputUrl").value;

    if(timeAdc==""){
        alert("Você não colocou o nome do time");
    } 
    else{
        time.nome = timeAdc;
        time.logo = "<img src='"+ linkLogo + "' style= '" + "width: 50px; height: 40px;'>";
        times[countT] = time;

        countT++;
    }
}

function exibirTime(){
    var elemH = "";
    var escrever = document.getElementById("table");

    for(i=0; i<countT; i++){
        elemH += "<tr><td>" + times[i].logo + "</td>"
        elemH += "<td>" + times[i].nome + "</td>";
        elemH += "<td>" + times[i].pontos + "</td>";
        elemH += "<td>" + times[i].vitorias + "</td>";
        elemH += "<td>" + times[i].derrotas + "</td>";
        elemH += "<td><button onclick='AdcVit("+i+")'>Vitória</button></td>";
        elemH += "<td><button onclick='AdcDerr("+i+")'>Derrota</button></td></tr>";
    }
    escrever.innerHTML=elemH;
}

function AdcVit(i){
    var totalStatus = times[i].vitorias +times[i].derrotas;
    
    if(totalStatus < times.length-1){
        if (pV ==0){
            times[i].vitorias = times[i].vitorias + 1;
            times[i].pontos += 3;
            exibirTime();
            console.log("chegando")
            pV = 1;
        }
        else {
            exibirTime();
            alert("Adicione uma derrota na equipe que perdeu");
        }
    }
    x=1;
    b=0;
}

function AdcDerr(i){
    
    var totalStatus = times[i].vitorias +times[i].derrotas;
    
    if(totalStatus < times.length-1){
        if(pV == 1){
            times[i].derrotas++;
            times[i].pontos = times[i].pontos;
            exibirTime();
            pV = 0;
        }
        else {
            exibirTime();
        }
    }
    x=1;
    b=0;
}

function apagarT(){
    var tirou = document.getElementById("table");
    tirou.remove();
}

function apagarEst(){
    var apagar ="";
    var tirou = document.getElementById("table");

    for(i=0; i<countT; i++){
    apagar += "<tr><td>" + times[i].logo + "</td>"
    apagar += "<td>" + times[i].nome + "</td>";
    apagar += "<td></td>";
    apagar += "<td></td>";
    apagar += "<td></td>";
    apagar += "<td><button onclick='AdcVit("+i+")'>Vitória</button></td>";
    apagar += "<td><button onclick='AdcDerr("+i+")'>Derrota</button></td></tr>";
    }
    tirou.innerHTML = apagar;

    for(let i =0; i<times.length; i++){
        times[i].vitorias=0;
        times[i].derrotas=0;
        times[i].pontos=0;
        pV=0;
    }
}