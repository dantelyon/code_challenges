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