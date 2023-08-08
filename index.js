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
function refillTotal(pricePerRefill,refills){
    return pricePerRefill * refills;
}

//create a subscription function
function subscription(customer){
    if(customer.subscription=== true){
        return refillTotal - (refillTotal * .25);
    }else {
        return refillTotal;
    }
}

//create coupon funciton
function coupon(customer){
    if(customer.coupon === true){
        return subscription - 10;
    } else{
        return subscription;
    }
}
//create checkout function
//to help filter the subcripton
//coupon
//return string 

function checkout(customer){
    if(customer.subscription === true){
        return subscription(customer);
    } else if(customer.coupon === true){
        return coupon(customer);
    } else {
        return refillTotal(pricePerRefill,refills);
    }
    return ("Your grand total is $(finalAmount)");
}

const timmyTotal = checkout(timmy);
console.log(timmyTotal);

const sarahTotal = checkout(sarah);
console.log(sarahTotal);

const rockyTotal = checkout(rocky);
console.log(rockyTotal);