const { JSDOM } = require('jsdom');
const { renderCartItems } = require('./sum');

test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Créez un élément de conteneur factice pour le test
  const dom = new JSDOM('<div id="cart-container"></div>');

  // Mock des données du panier
  const mockCart = [
    { name: 'Article 1', price: 10, quantity: 2 },
    { name: 'Article 2', price: 20, quantity: 1 },
    // ... ajoutez d'autres articles au besoin
  ];

  // Exécutez la fonction à tester
  renderCartItems(mockCart);

  // Vérifiez si le contenu a été correctement généré dans le conteneur
  const cartContainer = dom.window.document.getElementById('cart-container');
  expect(cartContainer.innerHTML).toMatchSnapshot();
});
