let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let output = document.getElementById('main').innerText;
        let result = document.getElementById("main").innerText = output + this.id;

        let history = document.getElementById("history").innerText;
        document.getElementById("history").innerText = history;
    })
}

let operators = document.getElementsByClassName('operator');

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if (this.id == 'C') {
            document.getElementById("main").innerText = "";
            document.getElementById("history").innerText = "";
        } else if (this.id == 'CE') {
            let data = document.getElementById("main").innerText;
            let result = data.substring(0, data.length - 1);
            document.getElementById("main").innerText = result;

            let history = document.getElementById("history").innerText;
            let ret = data.substring(0, history.length - 1)
            document.getElementById("history").innerText = ret;
        } else {
            if (this.id == "=") {
                let data = document.getElementById("main").innerText;
                let history = document.getElementById("history").innerText;
                document.getElementById("history").innerText = history + data;
                console.log(history + data);
                let val = eval(history + data);
                document.getElementById("main").innerText = val;

            } else {
                let data = document.getElementById("main").innerText;
                document.getElementById('history').innerText = data + this.id;
                document.getElementById("main").innerText = " ";
            }
        }
    })
}