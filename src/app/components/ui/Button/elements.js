import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  padding: '10px 20px',
  borderRadius: '4px',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY')}`
});
