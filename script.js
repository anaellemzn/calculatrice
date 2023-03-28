console.log("hello coucou");


var aff1 = document.querySelector('.aff1');
var aff2 = document.querySelector('.aff2');
var buttons = document.querySelectorAll('.calculatrice button');

// Fonction pour évaluer l'expression mathématique et afficher le résultat
function evaluate() {
  // Récupérer l'expression mathématique à partir de l'affichage
  var expression = aff1.textContent;

  // Vérifier si l'expression est valide
  try {
    // Évaluer l'expression et afficher le résultat
    var result = eval(expression);
    aff2.textContent = result;
  } catch (error) {
    // Si une erreur se produit, afficher un message d'erreur
    aff2.textContent = "Erreur";
  }
}

// Fonction pour supprimer le dernier caractère de l'affichage
function deleteLastCharacter() {
  var text = aff1.textContent;
  var newText = text.slice(0, -1);
  aff1.textContent = newText;
}

// Fonction pour réinitialiser l'affichage
function clear() {
  aff1.textContent = "";
  aff2.textContent = "";
}

// Ajouter des écouteurs d'événements pour chaque bouton
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', function() {
    var value = this.textContent;
    if (value === "=") {
      evaluate();
    } else if (value === "C") {
      clear();
    } else if (value === "sup") {
      deleteLastCharacter();
    } else {
      aff1.textContent += value;
    }
  });
}
