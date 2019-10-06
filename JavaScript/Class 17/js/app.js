function Factory(productName, price, type) {
  this.productName = productName;
  this.price = price;
  this.type = type;
  // this.calcAnnual = function(n1, n2) {
  //   return n1 + n2;
  // };
}

Factory.prototype.calcAnnual = function() {
  return 5 * 5;
};

Factory.prototype.flag = false;

// console.log("TCL: Factory -> Factory", Factory)

// var product1 = new Factory("Pepsi", 100, "Beverages");
// var product2 = new Factory("Pepsi", 100, "Beverages");
// var product3 = new Factory("Pepsi", 100, "Beverages");
// console.log("TCL: product1", product1);

// var methodProduct = new Factory("BlueBand", 40, "Butter");
// console.log("TCL: methodProduct", methodProduct)

// var result = methodProduct.calcAnnual(5, 10);
// console.log("TCL: result", result);

var prototypeObj = new Factory("a", 12, "xyz");
var res = prototypeObj.__proto__.calcAnnual();
// console.log("TCL: res", res)
// console.log("TCL: prototypeObj", prototypeObj)

var plan1 = {
  name: "Basic",
  price: 299,
  discounts: [2, 3]
};

var listOfProperties = [];
for (var prop in plan1) {
  if (prop == "discounts") {
    // console.log("yes");
  }
  listOfProperties.push(prop);
}
// console.log("TCL: listOfProperties", listOfProperties);

var plan1Result = plan1.hasOwnProperty("name"); // same as "name" in plan 1
// console.log("TCL: plan1Result", plan1Result)

var newObj = {
  name: "Ali",
  id: 123
};

var students = {
  name: true
};

var list = [];
for (var prop in newObj) {
  if (students.hasOwnProperty(prop)) {
    list.push(prop);
  }
}

// console.log("list", list);
