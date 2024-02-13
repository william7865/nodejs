const { JSDOM } = require('jsdom');
const { renderCartItems } = require('./sum');

test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Créez un élément de conteneur factice pour le test
  const dom = new JSDOM('<div id="cart-container"></div>');

  // Exécutez la fonction à tester avec des données fictives
  renderCartItems([{ name: 'Product 1', price: 10, quantity: 2 }]);

  // Vérifiez si le contenu a été correctement généré dans le conteneur
  const cartContainer = dom.window.document.getElementById('cart-container');
  expect(cartContainer.innerHTML).toContain('Product 1');
  expect(cartContainer.innerHTML).toContain('10');
  expect(cartContainer.innerHTML).toContain('2');
});
