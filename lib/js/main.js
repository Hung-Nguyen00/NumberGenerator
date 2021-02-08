// 1. get value from input[text]
// 2. Click button Generate
// 3. use for to loop value from input
// 4. if it is odd, it will be Yellow, if(Even) is green, if(Prime) is red
var numberText = document.getElementById("myInput");
document.getElementById('generate').addEventListener('click', event => {
        // get value from input element
        var num = numberText.value;
        // use to get class name.
        var listbtn = document.querySelector('.listbtn')
            // get Node (button) at all
        var namebtn = document.querySelectorAll('.btn')
        let btn;
        // check value from input
        if (getInputType(num) === 'number') {
            // if childnode exist, it will remove
            while (listbtn.firstChild) {
                listbtn.removeChild(listbtn.firstChild);
            }
            for (let index = 1; index <= num; index++) {
                // check Prime
                if (isPrime(index)) {
                    btn = document.createElement('button');
                    // set content of Node Element
                    btn.textContent = index;
                    // add classname
                    btn.className = 'btn'
                    btn.style.backgroundColor = 'green'
                        // add Child node in Parent Node
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
    // check value 
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