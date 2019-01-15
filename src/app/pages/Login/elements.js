import { styled } from 'styletron-react';

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
