/**
 * Change the code below so that when I do this:
 * ```
 * getCarBrand();
 * ```
 * it will return "Nissan"
 */
var car = {
  brand: "Nissan",
  getBrand: function() {
<<<<<<< HEAD
    return car.brand;
=======
    return this.brand;
>>>>>>> 6ea895904a829614ed1e525a11023455cbd61cb7
  }
};
var getCarBrand = car.getBrand;

/**
 * Change the code below so that when I do this:
 * ```
 * motorcycle.getMotorcyleBrand();
 * ```
 * it will return "Harley Davidson"
 */
var motorcycle = {
  brand: "Harley Davidson",
  getMotorcyleBrand: function() {
    var closure = function() {
<<<<<<< HEAD
      return motorcycle.brand;
=======
      return this.brand;
>>>>>>> 6ea895904a829614ed1e525a11023455cbd61cb7
    };
    return closure();
  }
};

module.exports = {
  getCarBrand,
  motorcycle
};
