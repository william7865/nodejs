// sum.test.js
const sum = require('./sum'); // Utilisation du chemin relatif sans extension
javascript
import { getCart, addToCart, removeFromCart, clearCart, getTotals } from './path/to/cartModule';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value;
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock
});

beforeEach(() => {
  localStorage.clear();
});

describe('Cart functionality', () => {
  test('getCart should return an empty array when the cart is empty', () => {
    expect(getCart()).toEqual([]);
  });

  test('addToCart should add a new product to the cart', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);

    expect(getCart()).toEqual([{ ...product, quantity: 1 }]);
  });

  test('addToCart should increment quantity for existing product', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);
    addToCart(product);

    expect(getCart()).toEqual([{ ...product, quantity: 2 }]);
  });

  test('removeFromCart should decrement product quantity', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);
    addToCart(product);
    removeFromCart(product);

    expect(getCart()).toEqual([{ ...product, quantity: 1 }]);
  });

  test('removeFromCart should remove product when quantity is 1', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);
    removeFromCart(product);

    expect(getCart()).toEqual([]);
  });

  test('removeFromCart should not modify cart if product is not found', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);
    removeFromCart({ id: 2 }); // Product with id 2 is not in the cart

    expect(getCart()).toEqual([{ ...product, quantity: 1 }]);
  });

  test('clearCart should remove all items from the cart', () => {
    const product = { id: 1, price: 10 };
    addToCart(product);
    clearCart();

    expect(getCart()).toEqual([]);
  });

  test('getTotals should return total price and total quantity of the cart', () => {
    const product1 = { id: 1, price: 10 };
    const product2 = { id: 2, price: 5, quantity: 2 };

    addToCart(product1);
    addToCart(product2); // Quantity is not provided here but should default to 1
    addToCart(product2);

    const totals = getTotals();
    expect(totals).toEqual({ total: 20, items: 3 });
  });

  test('getTotals should return zeros when the cart is empty', () => {
    expect(getTotals()).toEqual({ total: 0, items: 0 });
  });
});
