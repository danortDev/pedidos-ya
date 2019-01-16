import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('button', {
  display: 'flex',
  outline: 'none',
  border: 'none',
  justifyContent: 'center',
  fontSize: '1.2em',
  alignItem: 'center',
  padding: '10px 20px',
  borderRadius: '4px',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY')}`,
  ':disabled': {
    color: `${getColor('GREY')}`,
    background: `${getColor('LIGHTGREY').darken(20)}`
  }
});
