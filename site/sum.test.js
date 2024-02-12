// Importez la fonction à tester
const { renderCartItems } = require('./sum');

// Testez la fonction renderCartItems
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
  const cartContainer = document.getElementById('cart-container');
  expect(cartContainer.innerHTML).toMatchSnapshot();
});
