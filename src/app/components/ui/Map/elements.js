// @flow
import { styled } from 'styletron-react'
import getColor from 'app/palette';

export const MapWrapper = styled('div', {
  width: '100%',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MarkerWrapper = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  width: '18px',
  height: '12px',
  borderRadius: '50%',
  zIndex: '20',
  background: `${getColor('BLACK')}`,
});

export const MarkerCenter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  transform: 'rotate(45deg)',
  fontSize: '1.7em',
  background: `${getColor('PRIMARY')}`,
});

export const Marker = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  borderRadius: '50% 50% 50% 0',
  border: `4px solid ${getColor('PRIMARY').darken(20)}`,
  width: '40px',
  height: '40px',
  transform: 'translate(-50%,-50%) rotate(-45deg)',
  left: '50%',
  top: '-246%',
  background: `${getColor('PRIMARY').darken(20)}`,
})
