		






// IP Validation
	function isValidIP(str) {
		let IP_array = str.split(".")
		let valid = IP_array.length == 4
		for (let value of IP_array) {
	    		if (/^\d+$/.test(value) == false) valid = false;
			else if (value > 255) valid = false;
			else if (value[0] == "0" && value.length > 1) valid = false;
		}
		return valid
	}

// Write a function that takes in a string, and calls console.log for every character in the string, 1 second after each call.
	function solution(string) {
		(function printLetter(n){
			setTimeout(() => {
				console.log(string[n]);
				n++;
				if (n < string.length) printLetter(n);
			}, 1000)
		})(0)
	}

// Reversing a Process //
// This one was a real struggle. I think I'll go take a nap now...
	function decode(encoded_string) {
		let encoding_number = encoded_string.match(/\d/g).join("");
		let encoded_chars = encoded_string.match(/[a-zA-Z]+/g).join("").toLowerCase().split("");
		let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
		let encoding_possible = true;
		let encoded = {};
		alphabet.forEach((char, i) => {
			if (encoded[alphabet[i * encoding_number % 26]]) encoding_possible = false;
			else encoded[alphabet[i * encoding_number % 26]] = char;
		})
		return encoding_possible ? encoded_chars.map(char => encoded[char]).join("") : "Impossible to decode"
	}


// Delete occurrences of an element if it occurs more than n times //
	function deleteNth(arr, n){
	  for (let setNumber of new Set(arr)){
	  	let count = 0;
	  	for (let i = 0; i < arr.length; i++){
	  		if (setNumber == arr[i]){
	  			if (count >= n) arr[i] = null;
	  			count++;
	  		}
	  	}
	  }
	  return arr.filter(n => n)
	}


// Sum without highest and lowest number //
	function sumArray(array) {
	  if (!array || array.length <= 1) return 0;
	  const sum = array.reduce((a, c) => a + c, 0);
	  return sum - (Math.min(...array) + Math.max(...array));
	}


// Polish alphabet //
	function correctPolishLetters (string) {
	  const polish_alphabet = {
	    "ą" : "a",
	    "ć" : "c",
	    "ę" : "e",
	    "ł" : "l",
	    "ń" : "n",
	    "ó" : "o",
	    "ś" : "s",
	    "ź" : "z",
	    "ż" : "z",
	  }
	  return string.split("").map(letter => polish_alphabet[letter] || letter).join("")
	}


// Does my number look big in this? //
	function narcissistic(value) {
		let digits = value.toString().split("")
		let raisedSum = digits.map(n => n ** digits.length).reduce((acc, cv) => acc + cv)
		return value === raisedSum
	}


// Highest Scoring Word //
	function high(x){
		const words = x.split(" ")
		const wordScores = words.map(word => {
			let wordScore = 0;
			for (let letter of word) wordScore += letter.charCodeAt(0) - 96;
			return wordScore
		})
		return words[wordScores.indexOf(Math.max(...wordScores))]
	}


// Write Number in Expanded Form //
	function expandedForm(num) {
		return num.toString().split("").reverse().map((n,i) => n*10**i).filter(n => n!=0).reverse().join(" + ")
	}


// Build Tower //
	function towerBuilder(nFloors) {
		let tower = new Array()
		for (let i = 1, blocks = 1; i < nFloors+1; i++, blocks += 2){
			let floor = new String()
			floor += " ".repeat(nFloors-i)
			floor += "*".repeat(blocks)
			floor += " ".repeat(nFloors-i)
			tower.push(floor)
		}
		return tower
	}


// Bouncing Balls //
	function bouncingBall(heightDrop,  bounce,  momWindow) {
		if (heightDrop<=0 || bounce<=0 || bounce>=1 || momWindow>=heightDrop) return -1
		let lectures_by_mom = 1
		let uhOh = heightDrop * bounce
		while (uhOh > momWindow){
			lectures_by_mom += 2;
			uhOh *= bounce;
		}
		return lectures_by_mom
	}


// Detect Pangram //
	function isPangram(string){
		string = string.toLowerCase()
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'
		for (const letter of alphabet){
			if (!string.includes(letter)) return false
		}
		return true
	}


// Vasya - Clerk //
	function tickets(peopleInLine){
		let bills25 = 0
		let bills50 = 0
		let bills100 = 0
		for (let i=0; i<peopleInLine.length; i++){
			let received_bill = peopleInLine[i];
			if (received_bill==25) {
				bills25++
			} else if (received_bill==50 && bills25) {
				bills25--
				bills50++
			} else if (received_bill==100 && bills25 && bills50) {
				bills25--
				bills50--
				bills100++
			} else if (received_bill==100 && bills25>=3) {
				bills25-=3;
				bills100++
			} else return "NO"
		} return "YES"
	}


// Find the unique number //
	function findUniq(arr) {
		let theEqualNumber
		if (arr[0] == arr[1] || arr[0] == arr[2]){
			theEqualNumber = arr[0]
		} else {theEqualNumber = arr[1]}
		for (let i=0; i<arr.length; i++){
			if (theEqualNumber != arr[i]) return arr[i]
		}
	}


// Calculate Variance //
	var variance = function(numbers) {
		let mean = 0
		numbers.forEach(n => mean += n)
		mean /= numbers.length
		
		let variance = 0
		numbers.forEach(n => variance += Math.pow(n - mean, 2))
		variance /= numbers.length

		return variance
	}


// Find the divisors! //
	function divisors(integer) {
		let divisors = []
		for (let i=2; i<integer; i++)
			if (integer%i==0) divisors.push(i);
		return divisors.length? divisors : integer+" is prime"
	}


// Regex validate PIN code //
	function validatePIN (pin) {
		let isPINdigits = /^\d+$/.test(pin);
		let isPIN4or6 = pin.length == 4 || pin.length == 6;
		return isPINdigits && isPIN4or6
	}


// Rot13 //
	function rot13(message){
		const cipher = (num) => {
			if (num>=65 && num<=77) return num+13;
			if (num>=78 && num<=90) return 13-(90-num)+64;
			if (num>=97 && num<=109) return num+13;
			if (num>=110 && num<=122) return 13-(122-num)+96;
			return num
		}
		let utfCodes = message.split("").map(char => char.charCodeAt(0))
		return String.fromCharCode(...utfCodes.map(cipher))
	}


// 6/2/20 //
	var moveZeros = function (arr) {
		let nozeros = arr.filter(i => i!==0)
		let zeros = Array(arr.length - nozeros.length).fill(0)
		return nozeros.concat(zeros)
	}


// 3/2/20 //
	function validParentheses(parens){
		let forward = 0
		let backward = 0
		for (let char of parens){
			if (backward > forward) return false;
			char == "(" ? forward++ : backward++
		}
		return backward == forward
	}
	

// 2/2/20 //
	function humanReadable(seconds) {
		let hours = "0" + parseInt(seconds/3600)
		seconds -= hours * 3600
		let minutes = "0" + parseInt(seconds/60)
		seconds = "0" + (seconds - minutes*60)
	 	return `${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}` 
	}


// 2/2/20 //
	function toCamelCase(str){
		let camelString = ""
		for (let i=0; i<str.length; i++){
			if (str[i]=="_" || str[i]=="-"){
				camelString += str[i+1].toUpperCase(); i++
			} else camelString += str[i];
		}
		return camelString
	}


// 29/1/20 //
	function list(names){
		names = names.map(n => n.name)
		switch (names.length) {
			case 0: return '';
			case 1: return names[0];
			case 2: return `${names[0]} & ${names[1]}`;
		  	default: 
		  		let names1 = names.slice(0, names.length-2).join(", ");
		  		let last2Names = `, ${names[names.length-2]} & ${names[names.length-1]}`;
		  		return names1 + last2Names;
		}
	}


// 27/1/20 //
	function findNb(m) {
		let n = 0
		let total = 0
		while (total < m){
			total += n**3;
			if (total == m) return n;
			n++;
		}
		return -1
	}


// 22/1/20 //
	function alphabetPosition(text) {
		const alphabet = "abcdefghijklmnopqrstuvwxyz"
		return text
				.toLowerCase()
				.split("")
				.filter(char => alphabet.includes(char))
				.map(letter => alphabet.indexOf(letter)+1)
				.join(" ")
	}


// 18/1/20 //
	function songDecoder(song){
		return song.replace(/WUB/g, " ").replace(/\s+/g, " ").trim()
	}


// 16/1/20 //
	function duplicateEncode(word){
		word = word.toLowerCase().split("")
		word = word.map(item => word.filter(i => i == item).length > 1 ? ")" : "(" )
		return word.join("")
	}


// 15/1/20 //
	function calculateTip(amount, rating) {
		switch(rating.toLowerCase()) {
		  case "terrible": return Math.ceil(amount * 0/100)
		  case "poor": return Math.ceil(amount * 5/100)
		  case "good": return Math.ceil(amount * 10/100)
		  case "great": return Math.ceil(amount * 15/100)
		  case "excellent": return Math.ceil(amount * 20/100)
		  default: return "Rating not recognised"
		}
	}


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
	}


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
	}


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
	}


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
