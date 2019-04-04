var superHeroes = [
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
];

var secretIdentity = superHeroes.map(function(revealArray){//anonymous function
        return revealArray.join(" is "); 
})

console.log(secretIdentity.join("\n"));


  
var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var player1 = players.find(function(players){
    return players.firstName === 'Mike';
});
console.log(player1);

var rb = players.filter(function(players){
    return players.position === 'RB';
});

console.log(rb);

var names = players.map(function(players){
    return players.lastName;
})

console.log(names);

var touchdowns = players.filter(function(players){
    return players.touchdowns > 5 && players.position === 'RB';
    }) .map(function(players){
    return players.firstName+' '+ players.lastName; 
    });
    
    console.log(touchdowns);
  
 var total = players.filter(function(players){
    // return players.touchdowns && players.position == 'RB';
    return players.position == 'RB';
}) .reduce(function(sum, players){
    return sum + players.touchdowns; 
}, 0);

console.log(total);



