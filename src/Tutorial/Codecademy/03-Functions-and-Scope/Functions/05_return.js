/**
 * Created by habibun on 12/18/16.
 */
var orderCount = 0;

function takeOrder(topping, crustType)
{
    orderCount = orderCount + 1;
    console.log('Order: '+ crustType +' '+ topping);
}

function getSubTotal(itemCount)
{
    return itemCount * 7.5;
}

takeOrder("pizza topped with bacon", "thin crust");
takeOrder("pizza topped with bacon", "thin crust");
takeOrder("pizza topped with bacon", "thin crust");

console.log(getSubTotal(orderCount));