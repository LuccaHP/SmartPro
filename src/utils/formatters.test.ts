import { describe, it, expect } from 'vitest';
import { formatPrice, formatInstallment, formatNumber } from './formatters';

describe('formatters', () => {
  describe('formatPrice', () => {
    it('should format Brazilian currency correctly', () => {
      expect(formatPrice(1000)).toBe('R$ 1.000,00');
      expect(formatPrice(25.50)).toBe('R$ 25,50');
      expect(formatPrice(0)).toBe('R$ 0,00');
    });
  });

  describe('formatInstallment', () => {
    it('should calculate installments correctly', () => {
      expect(formatInstallment(1200, 12)).toBe('12x de R$ 100,00');
      expect(formatInstallment(500, 10)).toBe('10x de R$ 50,00');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers for Brazilian locale', () => {
      expect(formatNumber(1000)).toBe('1.000');
      expect(formatNumber(1234567)).toBe('1.234.567');
    });
  });
});
</parameter>