function herro() {
  this.make = "Ariesd Aries";
  return {
    make: "Ifa don",
  };
}

// returned obj has preference

const myhero = new herro();

console.log(myhero.make); // Ifa don
