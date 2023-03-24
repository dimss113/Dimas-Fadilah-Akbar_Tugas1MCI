export const calculate = (input) => 
{
  let calc = input.split(" ");
  let size = calc.length;
  let operator = [];
  let num = [];
  let next = checkInput(calc);

  if (next == true)
  {
      for (let i = 0 ; i < size; i++)
      {
        if (calc[i] === "/" || calc[i] === "*" || calc[i] === "+" || calc[i] === "-")
        {
          operator.push(calc[i]);
        }
        else {
          num.push(parseInt(calc[i]));
        }
      }
      let output = num[0];
      for (let i = 0; i < operator.length; i++)
      {
        if(operator[i] === "/")
        {
          output /= num[i+1];
        }
        else if(operator[i] === "*")
        {
          output *= num[i+1];
        }
        else if(operator[i] === "+")
        {
          output += num[i+1];
        }
        else if(operator[i] === "-")
        {
          output -= num[i+1];
        }
      }
      console.log(`${input} = ${output}`);
  }
  else {
    console.log("use /*-+ for operator");
  }

}

let checkInput = (arr) => {
  for (let i = 0; i < arr.length; i++)
  {
    let temp = 99;
    let numtemp = 99;
    if(i === 0 && isNaN(parseInt(arr[0])))
    {
      console.log("Wrong input");
      return false;
    }
    if(arr[i] === "/" || arr[i] === "*" || arr[i] === "+" || arr[i] === "-")
    {
      if((i - temp) === 1)
      {
        console.log("Wrong input");
        return false;
      }
      temp = i;
    }
    else 
    {
      if(isNaN(parseInt(arr[i])))
      {
        return false;
      }
    }
    if(!isNaN(parseInt(arr)))
    {
      if((i - numtemp) === 1)
      {
        console.log("wrong input");
        return false;
      }
      numtemp = i;
    } 
  }
  return true;
}
