import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Bar = styled('navbar', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  background: `${getColor('PRIMARY')}`
});

export const Text = styled('p', {
  margin: '0 20px',
  fontWeight: '500',
  color: `${getColor('WHITE')}`
});
