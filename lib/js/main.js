// 1. get value from input[text]
// 2. Click button Generate
// 3. use for to loop value from input
// 4. if it is odd, it will be Yellow, if(Even) is green, if(Prime) is red
var numberText = document.getElementById("myInput");

document.getElementById('generate').addEventListener('click', event => {
    var num = numberText.value;
    var listbtn = document.querySelector('.listbtn')
    var namebtn = document.querySelectorAll('.btn')
    let btn;
    if (getInputType(num) === 'number') {
        while (listbtn.firstChild) {
            listbtn.removeChild(listbtn.firstChild);
        }
        for (let index = 1; index <= num; index++) {
            if (isPrime(index)) {
                btn = document.createElement('button');
                btn.textContent = index;
                btn.className = 'btn'
                btn.style.backgroundColor = 'green'
                listbtn.appendChild(btn);
            } else if (index % 2 != 0) {
                btn = document.createElement('button');
                btn.textContent = index;
                btn.className = 'btn'
                btn.style.backgroundColor = 'red'
                listbtn.appendChild(btn);
            } else if (index % 2 == 0) {
                btn = document.createElement('button');
                btn.textContent = index;
                btn.className = 'btn'
                btn.style.backgroundColor = 'Yellow'
                listbtn.appendChild(btn);
            }
        }
    } else {
        alert('Input only number');
    }
})

function getInputType(value) {
    if (value === "")
        return "";
    else if (value === "true" || value === "false")
        return "boolean";
    else if (!Number.isNaN(Number(value)))
        return "number";
    else
        return typeof value;
}

function deleteBtn(idparent, listbutton) {
    for (const list of listbutton) {
        idparent.remove();
    }
}

function isPrime(num) {
    for (let index = 2, s = Math.sqrt(num); index <= s; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return num >= 2;
}
// function getInputValue() {
//     // Selecting the input element and get its value
//     var inputVal = document.getElementById("myInput").value;
//     console.log(inputVal)

// }