var view = window.document.getElementById('txtn1')
var v1 = 0
var v2 = 0
var s = ''
var p = false
var sv = 0
var pvalor= ''
var action = ''
var ponto = false

function add(valor){
    if (view.value == s) {
        limpar()    
        s = ''
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
    limpar()

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
    ponto = false
    p = false
    
    sv = 0
}

function resultado(){
    v2 = view.value

    limpar ()

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