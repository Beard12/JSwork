function personConstructor(name){
	var person = {	
		name : name,
		distance_traveled : 0,
		say_name : function(){
			alert(person.name)
			return person;
		},
		say_something: function(string){
			alert(person.name + "says" + string)
			return person;
		},
		walk : function(){
			alert(person.name + ' is walking');
			person.distance_traveled += 3;
			return person;
		},
		run : function(){
			alert(person.name + ' is running');
			person.distance_traveled += 10;
			return person;
		},
		crawl : function(){
			alert(person.name + ' is crawling');
			person.distance_traveled += 1;
			return person;
		}

	}
}

function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		beltlevel: 'yellow-belt',
		level_up : function(){
			if (ninja.beltlevel == 'yellow-belt'){
				ninja.beltlevel = 'red-belt';
			}
			else if (ninja.beltlevel == 'red-belt'){
				ninja.beltlevel = 'black-belt';
			}
			else{
				alert(ninja.name + ' you are already a black-belt');
			}
			return ninja;
		}
	}
	return ninja;
}

ninja = ninjaConstructor('Wayne', 'DC')
console.log(ninja.beltlevel)

ninja.level_up().level_up()
console.log(ninja.beltlevel)
console.log(ninja.cohort)
console.log(ninja.name)

