// Importez la fonction à tester
const { renderCartItems } = require('./sum'); // Ajustez le chemin d'importation en fonction de la structure réelle de vos fichiers

// Créez un conteneur factice pour le test
document.body.innerHTML = '<div id="cart-container"></div>';

// Mock des données du panier
const mockCart = [
  { id: '1', name: 'Produit 1', price: 10, quantity: 2 },
  { id: '2', name: 'Produit 2', price: 20, quantity: 1 },
];

// Testez la fonction renderCartItems
test('renderCartItems affiche correctement les articles dans le panier', () => {
  // Appelez la fonction avec les données du panier simulées
  renderCartItems(mockCart);

  // Vérifiez si les éléments ont été correctement ajoutés au conteneur
  expect(document.getElementById('cart-container').childElementCount).toBe(mockCart.length);

  // Vérifiez si le contenu HTML des éléments correspond aux données du panier
  mockCart.forEach((item) => {
    const itemElement = document.querySelector(`#cart-container div:contains("${item.name}")`);
    expect(itemElement).toBeTruthy();
    expect(itemElement.innerHTML).toContain(`Prix: ${item.price}`);
    expect(itemElement.innerHTML).toContain(`Quantité: ${item.quantity}`);
  });
});
