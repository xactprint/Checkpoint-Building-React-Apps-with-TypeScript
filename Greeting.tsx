import React from 'react';

// Définition du type des propriétés (props) du composant
// Le composant reçoit une propriété "name" qui doit être une chaîne de caractères.
interface GreetingProps {
  name: string;
}

// Composant fonctionnel React avec des props typées
const Greeting = ({ name }: GreetingProps) => {
  // Affichage du nom reçu dans les props
  return <div>Hello, {name}!</div>;
};

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Greeting;