let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name);
let newPassport = passport;
newPassport.name = "Ivan";
console.log(newPassport.name);