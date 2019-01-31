const themes = [
  {
    backgroundColor: '#333333',
    fontColor: '#FCFAF9',
    colors: ['#FCFAF9', '#48E5C2', '#F3D3BD', '#dc6d6d'],
    particleColor: '#48E5C2'
  },
  {
    backgroundColor: '#1E1E1E',
    fontColor: '#64B6E7',
    colors: ['#64B6E7', '#337DD2', '#41AF7D', '#9A5984'],
    particleColor: '#64B6E7'
  },

  {
    backgroundColor: '#1E1E24',
    fontColor: '#FFF8F0',
    colors: ['#FFF8F0', '#FFF8F0', '#FFF8F0', '#FFF8F0'],
    particleColor: '#FFA400'
  },
  {
    backgroundColor: '#1C1C1C',
    fontColor: '#DADDD8',
    colors: ['#DADDD8', '#DADDD8', '#DADDD8', '#DADDD8'],
    particleColor: '#D33F49'
  },
  {
    backgroundColor: '#0C2231',
    fontColor: '#A5AED5',
    colors: ['#A5AED5', '#A5AED5', '#A5AED5', '#A5AED5'],
    particleColor: '#276D9B'
  }
];

const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

export { themes, hexToRGB };
