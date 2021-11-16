// First problem ! seerToMon
function seerToMon (ser) {
    if (ser >= 0){
    let mon = ser / 40 ;
    return mon
    }
    else{
    return "Invalid number";
    }
    }
    const result = seerToMon(120) ;
    console.log (result);
    
    // Second problem ! totalSales
    function totalSales (t, p, s) {
    if ( t >= 0 && p >= 0 && s >= 0){
    const tshirt = t * 100;
    const pant = p * 200;
    const shoes = s * 500;
    const total = tshirt + pant + shoes;
    return total;
    }
    else {
    return "Invalid Input. Type right input";
    }
    }
    const result = totalSales (1,-1,1);
    console.log (result) ;
    
    
    // Third problem ! perfectFriend
    function perfectFriend (friendNames){
    let largestName = friendNames[0];
    for(elements of friendNames){
    if ( elements.length > largestName.length){
    largestName = elements;
    }
    }
    return largestName;
    }
    const friendNames =["Tamim", "Sakib", "Rubel", "Mashrafi Captain", "kubra", "Bangladeshi - Sakib al Hasan"]
    const result = perfectFriend(friendNames);
    console.log(result);
    
    
    // Final problem ! deliveryCost
    function deliveryCost (tshirt) {
    const first100Tshirt = 100;
    const second100Tshirt = 80;
    const restTshirt = 50;
    if (tshirt <= 100 ){
    let cost = tshirt * first100Tshirt;
    return cost;
    }
    else if (tshirt <= 200) {
    let cost1 = 100 * first100Tshirt;
    let restcost = tshirt - 100;
    let cost2 = restcost * 80;
    let finalcost2 = cost2 + cost1;
    return finalcost2;
    }
    else if (tshirt > 200) {
    let cost1 = 100 * first100Tshirt ;
    let cost2 = 100 * second100Tshirt ;
    let restcost = tshirt - 200 ;
    let cost3 = restcost * 50;
    const finalcost3 = cost1 + cost2 + cost3;
    return finalcost3;
    }
    }
    const final = deliveryCost(210);
    console.log(final);