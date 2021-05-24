export const findPrevFromUndo=n=>{const{past:o,future:e}=n;console.log("future:"),console.log(e),console.log("past: "),console.log(o);let l={};return e.length?l=e[0]:l=o.length?o[o.length-1]:{},l};
