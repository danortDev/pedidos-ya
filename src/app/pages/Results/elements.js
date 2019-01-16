import { styled } from 'styletron-react';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 20px'
});

export const Title = styled('h1', {
  fontSize: '1.2em',
  fontWeigth: '500',
  margin: '20px 0'
});

export const ButtonWrapper = styled('div', {
  display: 'flex',
  padding: '40px',
  justifyContent: 'center'
});
