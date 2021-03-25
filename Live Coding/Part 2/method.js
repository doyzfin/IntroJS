const biodata = {
  firstName: "Alfin",
  lastName: "Ramadhan",
  fullName: function () {
    const setName = this.firstName + this.lastName;
    return setName;
  },
};
console.log(biodata.fullName());
