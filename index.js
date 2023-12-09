
let msgPrint = ""
function addSelb (ev) {
    const lista = document.getElementById('lista')
    const li = document.createElement ("li")
    const addInfo = ev.currentTarget.parentNode;
    const selb = addInfo.children.SELB.value
    const contador = addInfo.children.CONTADOR.value
    li.innerText = (`SELB: ${selb} Contador: ${contador}\n`)
    msgPrint += (`SELB: ${selb} Contador: ${contador}\n `)
    lista.appendChild(li)
    document.getElementById('SELB').value = ""
    document.getElementById('CONTADOR').value = ""
    return msgPrint
    
}

function sendMensage (ev) {
    const addMensage = ev.currentTarget.parentNode;
    const nomeInput = addMensage.children.NAME.value
    let msgSend = ("Olá, me chamo " +  nomeInput + " do H Mil A CG e solicito reposição de toners, segue abaixo os dados: \n" + msgPrint)

    if (nomeInput) {
        const linkWhatsapp = `https://wa.me/${556799732666}?text=${encodeURIComponent(msgSend)}`;
        window.open(linkWhatsapp, '_blank');
    
    } else {
        alert ("Campo 'nome' não encontrado.");
    }

}


function clear () {
    const lista = document.getElementById('lista');
    document.getElementById('NAME').value = ""

    if (lista) {
        // Remova todas as <li> dentro do <ul>
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }

        console.log("Todas as <li> foram removidas com sucesso.");
    } else {
        console.error("Elemento <ul> não encontrado.");
    }


}
console.log (lista)


const buttonListar = document.getElementById ('addLista')
const buttonSend = document.getElementById('send')
const buttonclear = document.getElementById('clear')

buttonListar.addEventListener('click', addSelb)
buttonSend.addEventListener('click', sendMensage)
buttonclear.addEventListener('click', clear)