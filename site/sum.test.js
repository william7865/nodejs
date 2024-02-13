// sum.test.js
const { renderCartItems } = require('./sum');
const { JSDOM } = require('jsdom');

describe('renderCartItems', () => {
  test('affiche correctement les articles dans le panier', () => {
    // Créez un élément de conteneur factice pour le test
    const dom = new JSDOM('<body><div id="cart-container"></div></body>');
    global.document = dom.window.document;

    // Mock des données du panier
    const mockCart = [
      { name: 'Article 1', price: 10, quantity: 2 },
      { name: 'Article 2', price: 15, quantity: 1 },
    ];

    // Exécutez la fonction à tester avec les données factices
    renderCartItems(mockCart);

    // Vérifiez si le contenu a été correctement généré dans le conteneur
    const cartContainer = dom.window.document.getElementById('cart-container');

    // Vérifiez si le contenu contient les informations des articles du panier
    expect(cartContainer.innerHTML).toContain('Article 1');
    expect(cartContainer.innerHTML).toContain('Article 2');
    expect(cartContainer.innerHTML).toContain('10');
    expect(cartContainer.innerHTML).toContain('15');
    expect(cartContainer.innerHTML).toContain('2');
    expect(cartContainer.innerHTML).toContain('1');
  });
});
