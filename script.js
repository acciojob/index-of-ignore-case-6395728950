function indexOfIgnoreCase(s1, s2) {

	for(let i=0;i<s1.length;i++){
		let j =i;
		let  k=0;
		while( k <s2.length && i<s1.length && s1[i].toLowerCase()==s2[k].toLowerCase() ){
			 k++;
			i++;
		}
		if(k==s2.length){
			return j;
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
