let action = (message, timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${message}`);  
    }, timer);
  })
}

action("Diterima menjadi admin MCI", 1000)
  .then(action("IPS > 3.5", 2000))
  .then(action("Juara KRI Regional",3000))
  .then(action("Juara KRI Nasional",4000))
  .then(action("LIBURAN",5000))
  .catch((error) => {
    console.log(error);
  })


