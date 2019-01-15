import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const FieldWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap'
});

export const Error = styled('div', {
  alignSelf: 'flex-end',
  marginTop: '4px',
  fontSize: '0.7em',
  color: `${getColor('RED')}`
})
