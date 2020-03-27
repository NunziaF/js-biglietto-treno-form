// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti

var valnome, valkm, valeta;

var nomeU = document.getElementById("nome");

var kmU = document.getElementById("km");

var etaU = document.getElementById("eta");

var calcolaButton = document.getElementById('calcola');


calcolaButton.addEventListener("click",

  function(){
    // sul click salvo i valori degli input
    valNome = nomeU.value;
    valKm = kmU.value;
    valEta = etaU.value;

    //calcolo biglietto per età

    var costo = valKm * 0.21;

    if (valEta < 18){
      costo = costo * 0.80;
    } else if (valEta > 65){
      costo = costo * 0.60;
    } else {
      costo
    }

    document.getElementById('costo').innerHTML = "Gentile " + valNome + " il costo del suo biglietto è " + costo.toFixed(2) + " €";
  }
);

var buttonAzzera = document.getElementById('azzera');

buttonAzzera.addEventListener("click",

  function(){
    // sul click cancello gli input
    document.getElementById('nome').innerHTML = "";
    document.getElementById('km').innerHTML = "";
    document.getElementById('eta').innerHTML = "";
    document.getElementById('costo').innerHTML = "";
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";
    document.getElementById('eta').value = "";
  }
);
