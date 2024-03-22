function concatenate(input) {
  let [firstName, lastName, age, town] = input;
  console.log(
    `You are ${firstName} ${lastName}, a ${age}-year-old person from ${town}.`
  );
}

concatenate(["Maria", "Ivanova", 20, "Sofia"]);
