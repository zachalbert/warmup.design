Template.registerHelper( 'formatDate', ( date ) => {
  if( date ) {
    return moment(date).format('MMMM Do, YYYY');
  }
});

Template.registerHelper( 'formatNumber', ( num, digits ) => {
  let si = [
    { value: 1E18, symbol: "E" },
    { value: 1E15, symbol: "P" },
    { value: 1E12, symbol: "T" },
    { value: 1E9,  symbol: "G" },
    { value: 1E6,  symbol: "M" },
    { value: 1E3,  symbol: "k" }
  ];
  
  for( let i = 0; i < si.length; i++ ) {
    if( num >= si[i].value ) {
      return ( num / si[i].value ).toFixed( digits ).replace(/\.?0+$/, "") + si[i].symbol;
    }
  }
  
  return num;
});
