//this code is a filter application for the people who have salry lower to higher where its showing best and affordable trip for visitors by
//by filtering their salary//
//this is the customers requirments. we will suite him best trip with 5% of his salary//

let salary_rupees=30000
let elegibility_percent=5


//if the customers salarys 5% is comming up in the price of trip and ofcourse the duration is less than he will go o that place //

var goatrip_details ={
    price: '7000',
    traveling_hours:'2 hours',
    traveling_resourse: 'luxury bus',
    duration:'goa trip will be 2 days 1 night',
    hotel: '2 star',
    activity: 'bohot kuch',
    food: 'sab milega'
}
var manalitrip_details ={
    price: '15000',
    traveling_hours:'9 hours',
    traveling_resourse: 'luxury bus and mini train',
    duration:'manali trip will be 2 days 1 night',
    hotel: '3 star',
    activity: 'thodi bohot',
    food: 'sab milega'
}
var mahableshwar_details ={
    price: '11000',
    traveling_hours:'7 hours',
    traveling_resourse: 'luxury bus and mini train',
    duration:'mahableshwar trip will be 2 days 1 night',
    hotel: '3 star',
    activity: 'bohot kam',
    food: 'sab milega'
}



//for the person who can't go anywhere//
var elegibility='you are not eligible for this scheme you can switch to our no salary scheme'

//lets apply the condition //
 if (salary_rupees/elegibility_percent<=goatrip_details['price'] ) {
    console.log ('goa trip is the best option for you these are some details of your trip' )
    console.log (goatrip_details)
}
else if ( salary_rupees/elegibility_percent<=mahableshwar_details['price']) {
    console.log ('mahableshwar trip is the best option for you these are some details of your trip') 
    console.log (mahableshwar_details)
} else if (salary_rupees/elegibility_percent<= manalitrip_details['price']) {
    console.log ('manali trip is the best option for you these are some details of your trip')
    console.log (manalitrip_details)
}else {
    console.log (elegibility)
}


