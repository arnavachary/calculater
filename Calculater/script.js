let input = "";

function clicked(e) {
    input = input + e.innerText
    console.log(input)


    let search = document.getElementById("search")
     search.value = input
    
    

}

function sum(a,b) {
    return a + b
    
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function equals() {
    if (input.includes("+")) {
        let a = input.split("+")[0]
        let b = input.split("+")[1];
        let result = sum(parseInt(a), parseInt(b));
        document.getElementById("search").value = result;
  }
  if (input.includes("-")) {
     let a = input.split("-")[0];
     let b = input.split("-")[1];
     let result = subtraction(parseInt(a), parseInt(b));
     document.getElementById("search").value = result;
  }

  if (input.includes("*")) {
    let a = input.split("*")[0];
    let b = input.split("*")[1];
    let result = multiplication(parseInt(a), parseInt(b));
    document.getElementById("search").value = result;
  }
  if (input.includes("/")) {
    let a = input.split("/")[0];
    let b = input.split("/")[1];
    let result = division(parseInt(a), parseInt(b));
    document.getElementById("search").value = result;
  }
}