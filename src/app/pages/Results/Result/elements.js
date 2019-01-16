import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: `${getColor('WHITE')}`,
  background: `${getColor('GREY').darken(20)}`
});

export const Logo = styled('img',  {
  maxWidth: '40%',
  height: 'auto'
});

export const Content = styled('div', {
  padding: '10px 20px'
});

export const Link = styled('a', {
  color: `${getColor('WHITE')}`
});

export const Row = styled('div', {
  marginBottom: '6px'
});

export const Label = styled('span', {
  fontWeight: '500'
});

export const Name = styled('div', {
  fontSize: '1.2em',
  fontWeight: '700',
  marginBottom: '15px'
});
