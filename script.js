console.log("hello coucou");

var aff1 = document.querySelector('.aff1');   // Récupération de la div display
var aff2 = document.querySelector('.aff2');   // Récupération de la div display
var buttons = document.querySelectorAll('button');  // Récupération de tous les boutons

// Ajout d'un écouteur d'événements pour chaque bouton
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = this.textContent;   // Récupération de la valeur du bouton cliqué
        // Si le bouton "=" est cliqué, évaluer l'expression mathématique
        if (value === "=") {
            var result = eval(aff1.textContent);
            aff2.textContent = result;   // Affichage du résultat
        }
        else if(value === "C"){
            aff1.textContent = "";
            aff2.textContent = "";
        }
        else{
            aff1.textContent += value;   // Ajout de la valeur au contenu du display
        }
    });
});