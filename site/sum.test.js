const { JSDOM } = require('jsdom');
const { renderCartItems } = require('./sum'); // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de fichiers

test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Créez un élément de conteneur factice pour le test
  const dom = new JSDOM('<div id="cart-container"></div>');

  // Exécutez la fonction à tester
  renderCartItems(mockCart);

  // Vérifiez si le contenu a été correctement généré dans le conteneur
  const cartContainer = dom.window.document.getElementById('cart-container');
  expect(cartContainer.innerHTML).toMatchSnapshot();
});
