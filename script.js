var view = window.document.getElementById('txtn1')
var v1 = 0
var v2 = 0
var s = ''
var sv = 0
var pvalor= ''
var action = ''
var p = false
var ponto = false
var igual = ''

function add(valor){
    if (igual == 1) {
        limpar()
    }

    /* Estrutura para verificar o primeiro valor adicionado */

    if (p == false){
        pvalor = valor
        p = true
    }


    /* Estrutura para adicionar números */

    if (valor == '.' && ponto == false) {
        if (pvalor == '.') {
            view.value += `0${valor}`
        } else {
            view.value += valor
        }
        
        ponto = true

    }else if (valor == '.' && ponto == true){
        view.value += ''

    } else if(valor != '.'){

        if (pvalor == 0 && sv == 0 || sv == 1 && ponto == false) {
            view.value = valor  
            sv ++        
        }  else {
            view.value += valor
        }
    } 

}

function acoes(sinal){
    v1 = view.value
    action = sinal
    view.value = ''
    ponto = false
    p = false

    if (sinal == 'raiz') {
        var s = Math.sqrt(v1)
        view.value = s
    }

}

function porcentagem(){
    if (action == ''){
        v1 = view.value;
        var s = v1 / 100;
        view.value = s;
    } else {
        v2 = view.value

        if (action == 'soma') {
            s = Number(v1) + (Number(v1) * (Number(v2)/100) )
            view.value = s;
        } else if (action == 'diminuir') {
            s = Number(v1) - (Number(v1) * (Number(v2)/100) )
            view.value = s;
        } else if (action == 'multiplicar') {
            s = Number(v1) * (Number(v1) * (Number(v2)/100) )
            view.value = s;
        } else if (action == 'dividir') {
            s = Number(v1) / (Number(v1) * (Number(v2)/100) )
            view.value = s;
        }
    }
}

function limpar(){
    view.value = ''
    v1 = 0
    v2 = 0
    s = ''
    sv = 0
    pvalor= ''
    action = ''
    igual = ''
    p = false
    ponto = false
}

function resultado(){
    igual = 1
    v2 = view.value

    view.value = ''

    if (action == 'soma') {
        s = Number(v1) + Number(v2)
    } else if (action == 'diminuir') {
        s = Number(v1) - Number(v2)
    } else if (action == 'multiplicar') {
        s = Number(v1) * Number(v2)
    } else if (action == 'dividir') {
        s = Number(v1) / Number(v2)
    }

    view.value = s
}



/*
function limpar(){
    view.value = ''
    ponto = false
    p = false
    
    sv = 0
}
 */