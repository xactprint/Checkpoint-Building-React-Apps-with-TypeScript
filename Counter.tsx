import React, { Component } from 'react';

// Définition du type des données contenues dans le state
// "count" est obligatoirement un nombre.
interface CounterState {
  count: number;
}

// Composant basé sur une classe.
// Le premier type correspond aux Props.
// Comme le composant ne reçoit aucune prop, on utilise {}.
// Le deuxième type correspond au State.
class Counter extends Component<{}, CounterState> {

  // Initialisation du state avec une valeur numérique
  state: CounterState = {
    count: 0
  };

  // Fonction appelée lorsque l'utilisateur clique sur le bouton
  increment = () => {
    // Mise à jour du state en augmentant count de 1
    this.setState({
      count: this.state.count + 1
    });
  };

  // Méthode render responsable de l'affichage du composant
  render() {
    return (
      <div>
        {/* Affichage de la valeur actuelle du compteur */}
        <p>Count: {this.state.count}</p>

        {/* Appel de la fonction increment lors du clic */}
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

// Export du composant
export default Counter;