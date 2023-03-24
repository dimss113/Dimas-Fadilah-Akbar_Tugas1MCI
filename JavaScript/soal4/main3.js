let action = (message, timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message}`);
    }, timer);
  })
}

async function goal(){
  try
  {
    let _1 =  await action("Diterima menjadi admin lab MCI", 1000);
    console.log(_1);
    let _2 = await action("IPS > 3.5", 1000);
    console.log(_2);
    let _3 = await action("Juara KRI Regional", 1000);
    console.log(_3);
    let _4 = await action("Juara KRI Nasional", 1000);
    console.log(_4);
    let _5 = await action("LIBURAN", 1000);
    console.log(_5);
  }
  catch (error)
  {
    console.log(error);
  }
}

goal();