import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('main', {
  display: 'flex',
  padding: '40px',
  flexDirection: 'column',
  alignItem: 'center',
  justifyContent: 'center'
});

export const Spacer = styled('div', ({ $size }) => ({
  height: $size ==='bg' ? '80px' : '20px',
  widht: '100%'
}));

export const FormError = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: '500',
  lineHeight: '1.2em',
  padding: '20px',
  color: `${getColor('RED')}`
});
