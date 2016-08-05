function avgval(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}

	var avg = sum/arr.length;
	return avg;

}

function minval(arr){
	var min = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]< min){
			min = arr[i];
		}
	}
	return min;
}

function sumvals(val,val2){
	var sum = 0;
	for(var i = val; i <= val2; i++){
		sum += i;
	}
	return sum;

}

var sumvals = function(val, val2){
	var sum = 0;
	for(var i = val; i <= val2; i++){
		sum += i;
	}
	return sum;
}

var minval = function(arr){
	var min = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]< min){
			min = arr[i];
		}
	}
	return min;
}

var avgval = function(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}

	var avg = sum/arr.length;
	return avg;
}

var Object = {
	avgval : function(arr){
		var sum = 0;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i];
		}

		var avg = sum/arr.length;
		return avg;
	},
	minval : function(arr){
		var min = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i]< min){
				min = arr[i];
			}
		}
		return min;
	},
	sumvals : function(val, val2){
		var sum = 0;
		for(var i = val; i <= val2; i++){
			sum += i;
		}
		return sum;
	}	
}

var person = {
	name : 'Johnny',
	distance_traveled : 0,
	say_name : function(){
		alert(this.name)
		return this;
	},
	say_something: function(string){
		alert(this.name + "says" + string)
		return this;
	},
	walk : function(){
		alert(this.name + ' is walking');
		this.distance_traveled += 3;
		return this;
	},
	run : function(){
		alert(this.name + ' is running');
		this.distance_traveled += 10;
		return this;
	},
	crawl : function(){
		alert(this.name + ' is crawling');
		this.distance_traveled += 1;
		return this;
	}

}

person.run().walk()

console.log(person.distance_traveled)
