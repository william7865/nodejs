// render-cart.test.js

import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import renderCartItems from './render-cart';

test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Créez un élément de conteneur factice pour le test
  document.body.innerHTML = '<div id="cart-container"></div>';

  // Mock des données du panier
  const mockCart = [
    { name: 'Produit 1', price: 10, quantity: 2 },
    { name: 'Produit 2', price: 15, quantity: 1 },
  ];

  // Exécutez la fonction à tester
  renderCartItems(mockCart);

  // Vérifiez que le contenu du conteneur est correct
  expect(screen.getByText('Nom: Produit 1')).toBeInTheDocument();
  expect(screen.getByText('Nom: Produit 2')).toBeInTheDocument();
});
