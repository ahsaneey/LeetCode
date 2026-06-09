let friends=[3,1,2,5,4];
let order=[1,3,4]
var recoverOrder = function(order, friends) {
    return result=order.filter(id=>friends.includes(id))
    
};
console.log(recoverOrder(friends,order))