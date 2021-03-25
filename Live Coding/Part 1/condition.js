if (1 === 1) {
    console.log(true)
} else {
    console.log(false)
}

const phone = 3;
switch (phone){
    case 1 : {
        console.log("1")
        break
    }
    case 2 : {
        console.log("2")
        break
    }
    default : {
        console.log("none")
    }
}

//TERNARY
if (harga >= 10000) {
    console.log("Mahal");
  } else if (harga > 5000) {
    console.log("Sedang");
  } else {
    console.log("Murah");
  }

  
harga > 10000 ?console.log("Mahal"):console.log("Murah")


