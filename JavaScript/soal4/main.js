function targetHidup() {
 setTimeout(
  function() {
   console.log("Diterima di lab MCI")
   setTimeout(() => {
     console.log("IPS > 3.5");
     setTimeout(() => {
       console.log("Juara di KRI REGIONAL");
       setTimeout(() => {
         console.log("Juara di KRI NASIONAL");
         setTimeout(() => {
           console.log("Liburan");
         }, 1000);
       }, 1000);
     }, 1000);
   }, 1000);
  },1000)
}
 
targetHidup()