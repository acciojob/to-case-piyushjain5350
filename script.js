function toCase(text) {
  // write your code here
	let ans=text+"-";
	let uppercase=text.toUpperCase();
	ans+=uppercase;

	return ans;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
