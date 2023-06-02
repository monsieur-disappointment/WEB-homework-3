import './styles.css';

var typeSelect = document.getElementById("depositeType");

typeSelect.addEventListener("change", function() {
    if (typeSelect.value == "Пополняемый") {
        document.getElementById("depositeTerm2").style.display = "none";
        document.getElementById("depositeTerm").style.display = "block";
    }
    if (typeSelect.value == "Срочный") {
        document.getElementById("depositeTerm2").style.display = "block";
        document.getElementById("depositeTerm").style.display = "none";
    }
});

getResult.addEventListener("click", getFormValue);

function getFormValue(event) {
    
    const depositeType = window.document.querySelector("#depositeType").value;

    const depositeTerm = window.document.querySelector("#depositeTerm").value;

    const depositeTerm2 = window.document.querySelector("#depositeTerm2").value;

    const depositeSum = window.document.querySelector("#depositeSum").value;

    let result;

    document.getElementById("depositeTypeOutput").innerHTML = depositeType;
    
    document.getElementById("depositeSumOutput").innerHTML = depositeSum;

    if (depositeType == "Пополняемый") {
        document.getElementById("depositeTermOutput").innerHTML = depositeTerm;
        if (depositeTerm == "6 месяцев - 20%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.2 / 12 * 6;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm == "1 год - 22%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.22;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm == "1.5 год - 15%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.15 / 12 * 18;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm == "2 года - 10%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.1 * 2;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
    } else {
        document.getElementById("depositeTermOutput").innerHTML = depositeTerm2;
        if (depositeTerm2 == "3 месяца - 20%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.2 / 12 * 3;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm2 == "6 месяцев - 22%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.22 / 12 * 6;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm2 == "9 месяцев - 23%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.23 / 12 * 9;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm2 == "1 год - 24%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.24;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm2 == "1.5 года - 18%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.18 / 12 * 18;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
        if (depositeTerm2 == "2 года - 15%") {
            result = Number(depositeSum) + Number(depositeSum) * 0.15 * 2;
            document.getElementById("depositeResultOutput").innerHTML = result;
        }
    }
    console.log(depositeType, depositeTerm, depositeSum);
}