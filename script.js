var database = [
	{
		username:"turquhart",
		password:"choppy"
	},{
		username:"lurquhart",
		password:"haystack"
	},
	{
		username:"durquhart",
		password:"dizzle"
	},
	{
		username:"alurquhart",
		password:"alliroo"
	},
	{
		username:"jurquhart",
		password:"orriff"
	},
	{
		username:"asurquhart",
		password:"ash"
	},
	{
		username:"kurquhart",
		password:"prezney"
	},
	{
		username:"surquhart",
		password:"booey"
	}
]

var newsfeed = [
	{
		username: "peyton",
		timeline: "This is the Tooz\'s page!"
	},
	{
		username: "mac",
		timeline: "This is the Macster\'s page!"
	},
	{
		username: "dallas",
		timeline: "This is Big D\'s page!"
	}

]

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password){
	for (i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password===password){
				return true;
			}

		}
		return false;
	}

if (isUserValid(userNamePrompt, passwordPrompt)){
	console.log(newsfeed);
} 
else{
	alert("wrong password or username");
}
