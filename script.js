// Начальник цеха пригласил на совещание несколько человек.
// Каждый участник совещания, входя в кабинет начальника цеха, обменивался рукопожатием со всеми присутствующими.
// Сколько было участников совещания, если было зафиксировано 120 рукопожатий?

function getPeople(handshake) {
  // return Math.round((Math.sqrt(8 * handshake) + 1) / 2); // mathematical solution of the task

  let handshakes = 0;
  let people = 1;

  for (people; handshakes < handshake; people++) {
    handshakes = handshakes + people;
    // handshakes = handshakes + people - 1; // If I'm cocncerned this should be the right way of calculating the amount of ppl

    // TESTS
    // console.log('handshake:', handshake);
    // console.log('handshakes: ', handshakes);
    // console.log('people:', people);
    // console.log('---');
  }

  return people - 1;
}

console.log(getPeople(1)); //1
console.log(getPeople(3)); //2
console.log(getPeople(6)); //3
console.log(getPeople(10)); //4
console.log(getPeople(15)); //5
console.log(getPeople(120)); //
