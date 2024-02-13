// sum.test.js
const { renderCartItems } = require('./sum');

describe('renderCartItems', () => {
  test('affiche correctement les articles dans le panier', () => {
    // Créez un élément de conteneur factice pour le test
    document.body.innerHTML = '<div id="cart-container"></div>';

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
