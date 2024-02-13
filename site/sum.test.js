const { renderCartItems } = require('./sum');
const { JSDOM } = require('jsdom');

describe('renderCartItems', () => {
  test('affiche correctement les articles dans le panier', () => {
    // Créez un DOM factice pour le test
    const dom = new JSDOM('<!DOCTYPE html><div id="cart-container"></div>');

    // Attachez le DOM factice à la variable globale
    global.document = dom.window.document;

    // Mock des données du panier
    const mockCart = [
      { name: 'Article 1', price: 10, quantity: 2 },
      { name: 'Article 2', price: 15, quantity: 1 },
    ];

    // Exécutez la fonction à tester avec les données factices
    renderCartItems(mockCart);

    // Vérifiez si le contenu a été correctement généré dans le conteneur
    const cartContainer = document.getElementById('cart-container');
    expect(cartContainer.innerHTML).toContain('Article 1');
    expect(cartContainer.innerHTML).toContain('Article 2');
    expect(cartContainer.innerHTML).toContain('10');
    expect(cartContainer.innerHTML).toContain('15');
    expect(cartContainer.innerHTML).toContain('2');
    expect(cartContainer.innerHTML).toContain('1');
  });
});
