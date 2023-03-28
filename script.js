class Calculatrice {
    constructor(aff1Selector, aff2Selector, buttonSelector) {
      this.aff1 = document.querySelector(aff1Selector);
      this.aff2 = document.querySelector(aff2Selector);
      this.buttons = document.querySelectorAll(buttonSelector);
  
      this.evaluate = this.evaluate.bind(this);
      this.deleteLastCharacter = this.deleteLastCharacter.bind(this);
      this.clear = this.clear.bind(this);
  
      this.addEventListeners();
    }
  
    // Fonction pour évaluer l'expression mathématique et afficher le résultat
    evaluate() {
      // Récupérer l'expression mathématique à partir de l'affichage
      var expression = this.aff1.textContent;
  
      // Vérifier si l'expression est valide
      try {
        // Évaluer l'expression et afficher le résultat
        var result = eval(expression);
        this.aff2.textContent = result;
      } catch (error) {
        // Si une erreur se produit, afficher un message d'erreur
        this.aff2.textContent = "Erreur";
      }
    }
  
    // Fonction pour supprimer le dernier caractère de l'affichage
    deleteLastCharacter() {
      var text = this.aff1.textContent;
      var newText = text.slice(0, -1);
      this.aff1.textContent = newText;
    }
  
    // Fonction pour réinitialiser l'affichage
    clear() {
      this.aff1.textContent = "";
      this.aff2.textContent = "";
    }
  
    // Ajouter des écouteurs d'événements pour chaque bouton
    addEventListeners() {
      for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];
        button.addEventListener('click', () => {
          var value = button.textContent;
          if (value === "=") {
            this.evaluate();
          } else if (value === "C") {
            this.clear();
          } else if (value === "sup") {
            this.deleteLastCharacter();
          } else {
            this.aff1.textContent += value;
          }
        });
      }
    }
  }

  let Calculatrice = new Calculatrice();
  
 