import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SpecificationMatrix } from '../components/ui/SpecificationMatrix';
import { ProcessSteps } from '../components/ui/ProcessSteps';
import { VERIFIED_TEXTILES } from '../lib/seed-data';

describe('UI Components', () => {
  it('renders SpecificationMatrix with verified textile attributes', () => {
    const textile = VERIFIED_TEXTILES[0];
    render(<SpecificationMatrix textile={textile} />);

    expect(screen.getByText(textile.code)).toBeDefined();
    expect(screen.getByText(textile.yarnCount)).toBeDefined();
    expect(screen.getByText(textile.weave)).toBeDefined();
    expect(screen.getByText(textile.width)).toBeDefined();
  });

  it('renders 4-stage process steps (Cotton -> Yarn -> Weaving -> Cloth)', () => {
    render(<ProcessSteps />);

    expect(screen.getByText('Cotton')).toBeDefined();
    expect(screen.getByText('Yarn')).toBeDefined();
    expect(screen.getByText('Weaving')).toBeDefined();
    expect(screen.getByText('Cloth')).toBeDefined();
  });
});
