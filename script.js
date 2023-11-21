function firstNonRepeatedChar(str) {
 // Write your code here
const charCount = new Map();
	for (let char of str) {
		charCount.set(char,(charCount.get(char)||0)+1);
	}
	//find the first nonRepeating character in the orignal order
	for (let char of str) {
		if (charCount.get(char)===1){
			return char;
		}
	}
	return null;
		
	}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
