		













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
			if (arr.length%2==false){
				return (middle + middle2) / 2
			}else{
				return middle
			}
		}