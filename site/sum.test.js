// sum.test.js
const sum = require('./sum'); // Utilisation du chemin relatif sans extension
javascript
import { getCart, addToCart, removeFromCart, clearCart, getTotals } from './cart'; // adjust the import path based on actual file structure
import localStorage from 'localStorage';

// Mock the console.log to keep test output clean
global.console = {
  log: jest.fn(),
};

// Mock the localStorage
jest.mock('localStorage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Tests for getCart
describe('getCart', () => {
  it('should return empty array when cart is null', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    expect(getCart()).toEqual([]);
  });

  it('should return content of the cart', () => {
    const cart = [{ id: 1, quantity: 2 }];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(cart));
    expect(getCart()).toEqual(cart);
  });
});

// Tests for addToCart
describe('addToCart', () => {
  const product = { id: 1, price: 10 };
  const extendedProduct = { ...product, quantity: 1 };

  it('should add new product to the empty cart', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    addToCart(product);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([extendedProduct]));
  });

  it('should increase the quantity if product already exists', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([extendedProduct]));
    addToCart(product);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ ...extendedProduct, quantity: 2 }]));
  });
});

// Tests for removeFromCart
describe('removeFromCart', () => {
  const product = { id: 1, price: 10, quantity: 2 };

  it('should do nothing if product is not in the cart', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
    removeFromCart(product);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('should decrease the quantity if quantity is more than 1', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([product]));
    removeFromCart(product);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ ...product, quantity: 1 }]));
  });

  it('should remove the product if quantity is 1', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ ...product, quantity: 1 }]));
    removeFromCart(product);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });
});

// Tests for clearCart
describe('clearCart', () => {
  it('should clear the cart', () => {
    clearCart();
    expect(localStorage.removeItem).toHaveBeenCalledWith('cart');
  });
});

// Tests for getTotals
describe('getTotals', () => {
  it('should return correct total price and quantity', () => {
    const cart = [
      { id: 1, price: 10, quantity: 2 },
      { id: 2, price: 20, quantity: 1 },
    ];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(cart));
    expect(getTotals()).toEqual({ total: 40, items: 3 });
  });

  it('should return zeros when cart is empty', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    expect(getTotals()).toEqual({ total: 0, items: 0 });
  });
});
