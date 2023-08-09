//Discount Chain
// If a customer has a subscription 
//the customer will receive a 25% discount 
//after the refill total has been calculated.

// If the customer has a coupon, 
//the customer will receive a $10 discount 
//after the subscription discount has been calculated.

// At the end of the script, 
//you should return and log the string 
//"Your grand total is ${finalAmount}." 

//copy and paste the objects

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// If a customer has a subscription 
//the customer will receive a 25% discount 
//after the refill total has been calculated.

// If the customer has a coupon, 
//the customer will receive a $10 discount 
//after the subscription discount has been calculated.

// At the end of the script, 
//you should return and log the string 
//"Your grand total is ${finalAmount}." 

//create a fuction calculating the refill total

//function keyword
// function refillTotal(pricePerRefill,refills){
//     return pricePerRefill * refills;
// }

//arrow function
const refillTotal = (pricePerRefill, refills) => pricePerRefill *refills;

//create a subscription function
// the customer will receive a 25% discount 
//after the refill total has been calculated.

//function keyword
function hasSubscription(customer){
    const totalAmount = refillTotal
    (customer.pricePerRefill, customer.refills);
    if(customer.subscription=== true){
        return totalAmount - (totalAmount * .25);
    }else {
        return totalAmount;
    }
}

//arrow function 
//const hasSubscribtion = customer => {
//     const totalAmount = refillTotal
//     (customer.pricePerRefill, customer.refills);
//     if(customer.subscription=== true){
//         return totalAmount - (totalAmount * .25);
//     }else {
//         return totalAmount;
//     }
// }


//create coupon funciton
//the customer will receive a $10 discount 
//after the subscription discount has been calculated

//function keyword
// function hasCoupon(customer){
//     const subcriptonAmount = hasSubscription(customer);
//     if(customer.coupon === true){
//         return subcriptonAmount - 10;
//     } else{
//         return subcriptonAmount;
//     }
// }

const hasCoupon = customer => {
    const subcriptonAmount = hasSubscription(customer);
    if(customer.coupon === true){
        return subcriptonAmount - 10;
    } else{
        return subcriptonAmount;
    }
}
//create checkout function
//to help filter the subcripton
//and coupon
//return string 
//you should return and log the string 
//"Your grand total is ${finalAmount}." 

//function keyword
function checkout(customer){
    if(customer.subscription === true){
        return hasSubscription(customer);
    } else if(customer.coupon === true){
        return hasCoupon(customer);
    } else{
        return refillTotal(pricePerRefill,refills);
    }
}

//arrow function
// const checkout = customer => {
//     if(customer.subscription === true){
//         return hasSubscription(customer);
//     } else if(customer.coupon === true){
//         return hasCoupon(customer);
//     } else{
//         return refillTotal(pricePerRefill,refills);
//     }
// }


////return string with grand total amount for each customer
//you should return and log the string 
//"Your grand total is ${finalAmount}." 

//fuction keyword
// function grandTotal(customer){
//     return console.log("Your grand total is $" + checkout(customer));
// }

//arrow function
const grandTotal = customer => console.log(`Your grand total is $${checkout(customer)}`);

grandTotal(timmy);

grandTotal(sarah);

grandTotal(rocky);


