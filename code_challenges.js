		






// 24/12/19 //
	let foodQuantity = {
		"sandwiches" : 4,
		"salads" : 6,
		"wraps" : 5,
		"frenchFries" : 10,
	}
	let foodPrices = {
		"sandwiches" : 8,
		"salads" : 7,
		"wraps" : 6.5,
		"frenchFries" : 1.2,
	}
	function totalPrice(quantity, prices){
		let total = 0
		const keys = [...Object.keys(quantity)].map(key => total += quantity[key] * prices[key])
		return total
	}


// 23/12/19 //
	function dontGiveMeFive(start, end){
		let count = 0
		for (let i=start; i<end+1; i++){
			if (!i.toString().match(/[5]/gi)) count++
		}
		return count
	}


// 23/12/19 //
	function getCount(str) {
	  var vowelsCount = 0;
	  [...str].map(char => {if (char.match(/[aeiou]/)) vowelsCount++})
	  return vowelsCount;
	}


// 23/12/19 //
	function squareDigits(num){
	  return Number(Array.from(String(num), Number).map(n => Math.pow(n, 2)).join(""));
	}


// 22/12/19 //
	function disemvowel(str) {
		let noVowels = ""
		for(let i=0; i<str.length; i++){
			if (!str[i].match(/[aeiou]/gi)) noVowels += str[i]
		};
		return noVowels
	}


// 22/12/19 //
	function highAndLow(numbers){
		let orderedNumbers = numbers.split(" ").map(Number).sort((a, b) => a - b);
		return `${orderedNumbers[orderedNumbers.length -1]} ${orderedNumbers[0]}`
	} 
	/** Two lessons learned:
		a) by default the sort method sorts alphabetically, and so to sort numerically a compare function is needed.
		b) could've just skipped sorting the array, and just used Math.max and Math.min **/


// 21/12/19 //
	function getMiddle(s){
		let stringFloor = Math.floor(s.length/2)
		return s.length%2 ? s[stringFloor]  : s[stringFloor-1] +s[stringFloor]
	}


// 20/12/19 //
	function colorOf(r,g,b){
		const hex = d => Number(d).toString(16).padStart(2, '0')
	  	return "#" + hex(r) + hex(g) + hex(b)
	}


// 20/12/19 //
	function tailSwap(arr){
		let firstString = 
			arr[0].slice(0, arr[0].indexOf(":")) + 
			arr[1].slice(arr[1].indexOf(":"))
		let secondString = 
			arr[1].slice(0, arr[1].indexOf(":")) +
			arr[0].slice(arr[0].indexOf(":"))
		return [firstString, secondString]
	}


// 19/12/19 //
	const myarray = [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060]
	function mean(input1, input2){
			return input2.reduce((a, b) => a + b, 0) / input1
		}
	function median(arr){
			arr = arr.sort((a, b) => a - b);
			var middle = arr[Math.floor(arr.length / 2)];
			var middle2 = arr[Math.floor((arr.length - 1) / 2)];
			if (arr.length%2==false){ //yikes
				return (middle + middle2) / 2
			}else{
				return middle
			}
		}