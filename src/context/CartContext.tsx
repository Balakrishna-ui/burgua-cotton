'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { VerifiedTextile } from '@/lib/seed-data';

export type CartItemType = 'SWATCH' | 'SAMPLE_CUT' | 'FABRIC_METER';

export interface CartItem {
  id: string; // unique item composite key
  textileId: string;
  code: string;
  name: string;
  slug: string;
  variantId?: string;
  variantColor?: string;
  itemType: CartItemType;
  unitPrice: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (textile: VerifiedTextile, itemType: CartItemType, variantId?: string, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('burgula_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart storage', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('burgula_cart', JSON.stringify(items));
    }
  }, [items, mounted]);

  const addItem = (
    textile: VerifiedTextile,
    itemType: CartItemType,
    variantId?: string,
    quantity: number = 1
  ) => {
    const variant = textile.variants.find((v) => v.id === variantId);
    let unitPrice = 0;

    if (itemType === 'SWATCH') unitPrice = textile.swatchPrice;
    else if (itemType === 'SAMPLE_CUT') unitPrice = textile.samplePrice;
    else unitPrice = textile.basePrice || 600;

    const compositeId = `${textile.id}-${itemType}-${variantId || 'default'}`;

    setItems((prev) => {
      const existing = prev.find((it) => it.id === compositeId);
      if (existing) {
        return prev.map((it) =>
          it.id === compositeId ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [
        ...prev,
        {
          id: compositeId,
          textileId: textile.id,
          code: textile.code,
          name: textile.name,
          slug: textile.slug,
          variantId: variant?.id,
          variantColor: variant?.colorName || 'Standard Loom-State',
          itemType,
          unitPrice,
          quantity,
          image: textile.heroImage,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((it) => it.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, quantity } : it))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((sum, it) => sum + it.quantity, 0);
  const subtotal = items.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
