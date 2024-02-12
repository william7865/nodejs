// renderCartItems.test.js
const { JSDOM } = require('jsdom');
const { renderCartItems } = require('./sum'); // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de fichiers

test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Créez un élément de conteneur factice pour le test
  const dom = new JSDOM('<div id="cart-container"></div>');
  global.document = dom.window.document;

  // Mock des données du panier
  const mockCart = [
    { name: 'Article 1', price: 10, quantity: 2 },
    { name: 'Article 2', price: 15, quantity: 1 },
  ];

  // Exécutez la fonction à tester
  renderCartItems(mockCart);

  // Vérifiez si le contenu a été correctement généré dans le conteneur
  const cartContainer = dom.window.document.getElementById('cart-container');
  expect(cartContainer.innerHTML).toMatchSnapshot(); // Vous pouvez utiliser toEqual pour une correspondance exacte
});
