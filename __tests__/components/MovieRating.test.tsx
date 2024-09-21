import '@testing-library/jest-dom';

import { MovieRating } from '@/app/components/MovieRating';
import { render, screen } from '@testing-library/react';

describe('MovieRating', () => {
  it('should render correctly', () => {
    render(<MovieRating rating='pg' />);
    expect(screen.getByText('pg')).toBeInTheDocument();
  });

  describe('borderColor', () => {
    it('should apply correct border color for pg', () => {
      render(<MovieRating rating='pg' />);
      expect(screen.getByText('pg')).toHaveClass('border-green-500');
    });

    it('should apply correct border color for pg-13', () => {
      render(<MovieRating rating='pg-13' />);
      expect(screen.getByText('pg-13')).toHaveClass('border-yellow-500');
    });

    it('should apply correct border color for r', () => {
      render(<MovieRating rating='r' />);
      expect(screen.getByText('r')).toHaveClass('border-red-500');
    });

    it('should apply correct border color for nc-17', () => {
      render(<MovieRating rating='nc-17' />);
      expect(screen.getByText('nc-17')).toHaveClass('border-purple-500');
    });
  });
});
