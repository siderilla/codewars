function likes(names) {

	if (!names) {
		return console.log("no one likes this");
	}
	for (let i = 0; i < names.length; i++) {
		const element = names[i];
		if (names.length == 1) {
			console.log(names[0], "likes this")
		} else if (names.length == 2) {
			console.log(names[0], "and", names[1], "like this")
		} else if (names.length == 3) {}

	}

}

console.log(likes());
console.log(likes(["Peter"]));
console.log(likes(['Jacob', 'Alex']));
console.log(likes())
console.log(likes())
console.log(likes())