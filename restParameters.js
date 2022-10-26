console.clear();
const mSum = (num1,num2) => console.log(num1+num2);
mSum(3,4);

let restOperator = (...args) => console.log(args);
restOperator(1,2,3,4,5);

const roSum = (...args) => {
    let sum = 0;
    for(let i = 0;i<=args.length;i++)
    {
        sum += args[i];
    }

    console.log(sum);
}

roSum(5,6,7,8,9,3);