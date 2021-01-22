
/*============ Problem-1 ============*/
function kilometerToMeter(kilometer){
    // 1 km = 1000 m
    var oneKilometer = 1000;
    if(kilometer > 0){
        var convertMeter = kilometer * oneKilometer;
    }
    // Exception Handling condition
    else{
        console.log("Distance cannot be Negative.");
    }
    return convertMeter;
}
var ans = kilometerToMeter(100);
console.log(ans);



/*============ Problem-2 ============*/
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){

    if(watchQuantity && phoneQuantity && laptopQuantity > 0){
        var totalBudget = watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500;
    }
    // Exception Handling condition
    if(watchQuantity && phoneQuantity && laptopQuantity < 0){
        console.log("Invalid Input Please provide valid input...");
    }    
    return totalBudget;
}
var ans = budgetCalculator(1, 1, 1);
console.log(ans);



/*============ Problem-3 ============*/
function hotelCost(days){

    var totalHotelCost = 0;
    // First 10 days Total Cost Condition
    if(days <= 10){
        totalHotelCost = days * 100;
    }
    // Second 10 days Total Cost Condition
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        totalHotelCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var thirdTenDays = remaining * 50;
        totalHotelCost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return totalHotelCost;
}
var total = hotelCost(20);
console.log(total);



/*============ Problem-4 ============*/
function  megaFriend(str){
    var longestWord = "";
    var words = str.split(" ");
    // Travarsing
    for(var i = 0; i < words.length; i++){
        var individualWord = words[i];
        // Longest Word Condition
        if(individualWord.length > longestWord.length){
            longestWord = individualWord;
        }
    }
    return longestWord;
}
console.log(megaFriend("Sabbir Komol Shafa Mizan Ashraful Abu-Salkin Zafrin Al-Maruf"));