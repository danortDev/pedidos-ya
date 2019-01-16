import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Ring = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '64px',
  height: '64px'
});

export const Segment = styled('div', ({ $color }) => ({
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  width: '51px',
  height: '51px',
  margin: '6px',
  border: `6px solid ${getColor($color)}`,
  borderRadius: '50%',
  borderColor: `${getColor($color)} transparent transparent transparent`,
  animation: '1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
  animationName: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
}));

export const First = styled(Segment, {
  animationDelay: '-0.45s'
});

export const Second = styled(Segment, {
  animationDelay: '-0.3s'
});

export const Third = styled(Segment, {
  animationDelay: '-0.15s'
});
