function mudar() {
    let cor = document.getElementById("cor").value;

    if (cor == "" || null) {
        let p = document.getElementById("campo_p");
        p.innerHTML = "Digite uma cor para que aconteça o efeito.";
        p.style.color = "red";
    } else {
        let p = document.getElementById("campo_p");
        p.innerHTML = null;
        let cor = document.getElementById("cor").value;
        cor = cor.toLowerCase();
        switch (cor) {
            case "amarelo":
                document.body.style.background = "yellow";
                break;
            case "vermelho":
                document.body.style.background = "red";
                break;
            case "azul":
                document.body.style.background = "blue";
                break;
            case "laranja":
                document.body.style.background = "orange";
                break;
            default:
                let p = document.getElementById("campo_p");
                p.innerHTML = "Não há aplicação para essa cor.";
                p.style.color = "black";
        }
    }
}

function diaSemana() {
    var dia = new Date().getDay();
    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("campop").innerHTML = "Hoje é Domingo.";
            break;
        case 1:
            document.getElementById("campop").innerHTML = "Hoje é segunda-feira.";
            break;
        case 2:
            document.getElementById("campop").innerHTML = "Hoje é terça-feira.";
            break;
        case 3:
            document.getElementById("campop").innerHTML = "Hoje é quarta-feira.";
            break;
        case 4:
            document.getElementById("campop").innerHTML = "Hoje é quinta-feira.";
            break;
        case 5:
            document.getElementById("campop").innerHTML = "Hoje é sexta-feira.";
            break;
        case 6:
            document.getElementById("campop").innerHTML = "Hoje é sábado";
            break;
        default:
            document.getElementById("campop").innerHTML = "Não sei que dia é hoje";
    }
}