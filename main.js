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

    document.getElementById('nome_out').innerHTML = valNome;

    //calcolo biglietto per età

    var costo = valKm * 0.21;

    if (valEta < 18){
      costo = costo * 0.80;
    } else if (valEta > 65){
      costo = costo * 0.60;
    } else {
      costo
    }

    document.getElementById('costo').innerHTML = costo.toFixed(2) + " €";

  }
);
