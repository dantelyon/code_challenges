		




// 14/1/20 //
	function isValidWalk(walk) {
		if (walk.length != 10) return false
		let coords = {"n":0, "s":0, "w":0, "e":0}
		walk.forEach(c => coords[c]++)
		return (coords["w"]-coords["e"]==0) && (coords["n"]-coords["s"]==0)
	}


// 13/1/20 //
	function persistence(num) {
		for (let sum=1, i=0; ; i++){
			if (String(num).length === 1) return i;
			for (let n of String(num)) sum*=n;
			num=sum; sum=1;
		}
	}


// 11/1/20 //
	function spinWords(string){
		let arr = string.split(" ")
		let spin = arr.map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
		return spin.join(" ")
	}


// 10/1/20 //
	var subtractProductAndSum = function(n) {
		const digits = Array.from(n.toString()).map(Number); 
		let product = digits.reduce((acc, curr) => acc * curr)
		let sum = digits.reduce((acc, curr) => acc + curr)
		return product - sum
	};


// 9/1/20 //
	function minSum(arr) {
		arr.sort((a, b) => a - b)
		let sum = 0
		for (let n in arr){
			sum += arr[n] * arr[arr.length-1];
			arr.pop()
		}
		return sum
	}


// 8/1/20 //
	function getSum(a, b){
		let sum = 0
		for (let i=Math.min(a, b); i<=Math.max(a, b); i++) 
			sum+=i
		return sum
	}

// 8/1/20 //
	String.prototype.toJadenCase = function () {
		let capitalizedWords = this.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
		return capitalizedWords.join(" ")
	};


// 7/1/20 //
	function duplicateCount(text){
	  let duplicates = new Set()
	  text = text.toLowerCase()
	  for (let i=0; i < text.length; i++){
	  	if (text.split(text[i]).length-1 > 1){
	  		duplicates.add(text[i])
	  	}
	  }
	  return duplicates.size
	}


// 7/1/20 //
	function digital_root(n) {
		let root = Math.abs(n) 
		while (root > 9){
			root = root.toString().split("").reduce((a, b) => Number(a) + Number(b), 0)
		} 
		return root
	}


// 6/1/20 //
	function socialistDistribution(pop, minimum){
		let needs = 0
		pop.forEach(n => {if (n < minimum) needs += minimum-n})
		for(let i=0; i<needs; i++){
			if (Math.max(...pop) <= minimum){pop=[];break}
			pop[pop.indexOf(Math.max(...pop))] -= 1
		}
		return pop.map(n => n<minimum ? n=minimum : n)
	}


// 3/1/20 //
	function positiveSum(arr) {
		let sum = 0
		arr.forEach(n => {if (n>0) sum+=n})
		return sum 
	}


// 28/12/19 //
	function cleanString(s) {
		let t = []
		s.split("").forEach(char => char=="#" ? t.pop() : t.push(char))
		return t.join("")
	};


// 28/12/19 //
	function solution(number){
		let sum = 0
		for (let i=0; i<number; i++){
			if (i%3==0 || i%5==0) sum+=i
		}
		return sum
	}


// 27/12/19 //
	function descendingOrder(n){
		return Number( n.toString().split("").sort((a, b)=>{return b-a}).join("") )
	}


// 25/12/19 //
	function findShort(string){
	  return Math.min(...string.split(" ").map(word => word.length))
	}


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