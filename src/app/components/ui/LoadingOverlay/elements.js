import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: `${getColor('BLACK').setAlpha(.8)}`,
  zIndex: 2000
});

export const SpinnerWrapepr = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
