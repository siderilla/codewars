function friend(friends){
  const result = friends.filter((friend) => friend.length === 4)
  return result;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));