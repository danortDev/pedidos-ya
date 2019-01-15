import tinycolor from 'tinycolor2';

const COLOURS = {
  PRIMARY: '#F52F41',
  GREY: '#616161',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LIGHTGREY: '#F8F7F6',  
  TRANSPARENT: tinycolor({ r: 0, g: 0, b: 0, a: 0 })
};

const getColor = (colorName) => {
  const color = COLOURS[colorName] || COLOURS['PRIMARY'];
  return tinycolor(color).clone();
};

export default getColor;
