import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '../context/CartContext';
import { VERIFIED_TEXTILES } from '../lib/seed-data';

describe('CartContext State & Business Logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
  );

  const mockTextile = VERIFIED_TEXTILES[0];

  it('starts with an empty cart and zero subtotal', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
    expect(result.current.itemCount).toBe(0);
    expect(result.current.subtotal).toBe(0);
  });

  it('adds an item to cart and calculates correct subtotal', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', mockTextile.variants[0]?.id, 1);
    });

    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0].textileId).toBe(mockTextile.id);
    expect(result.current.items[0].quantity).toBe(1);
    expect(result.current.subtotal).toBe(mockTextile.swatchPrice);
    expect(result.current.isCartOpen).toBe(true);
  });

  it('increments quantity when adding duplicate items rather than duplicating lines', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const variantId = mockTextile.variants[0]?.id;

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', variantId, 1);
    });

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', variantId, 2);
    });

    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0].quantity).toBe(3);
    expect(result.current.subtotal).toBe(mockTextile.swatchPrice * 3);
  });

  it('updates item quantity and removes item if quantity becomes zero or negative', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const variantId = mockTextile.variants[0]?.id;

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', variantId, 2);
    });

    const itemId = result.current.items[0].id;

    act(() => {
      result.current.updateQuantity(itemId, 5);
    });
    expect(result.current.items[0].quantity).toBe(5);

    // Setting quantity to 0 removes the item
    act(() => {
      result.current.updateQuantity(itemId, 0);
    });
    expect(result.current.items.length).toBe(0);
  });

  it('removes specific item using removeItem', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', mockTextile.variants[0]?.id, 1);
    });

    const itemId = result.current.items[0].id;

    act(() => {
      result.current.removeItem(itemId);
    });

    expect(result.current.items.length).toBe(0);
    expect(result.current.subtotal).toBe(0);
  });

  it('clears all items using clearCart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockTextile, 'SWATCH', undefined, 1);
      if (VERIFIED_TEXTILES[1]) {
        result.current.addItem(VERIFIED_TEXTILES[1], 'SAMPLE_CUT', undefined, 1);
      }
    });

    expect(result.current.items.length).toBeGreaterThan(0);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items.length).toBe(0);
    expect(result.current.subtotal).toBe(0);
  });
});
