const buttonabrirhtml = document.getElementById("abrir-modalhtml");
const buttonfecharhtml = document.getElementById("fechar-modalhtml");
const buttonmateriaishtml = document.getElementById("acessarmateriais-modalhtml");
const buttonabrircss = document.getElementById("abrir-modalcss");
const buttonmateriaiscss = document.getElementById("acessarmateriais-modalcss");
const buttonfecharcss = document.getElementById("fechar-modalcss");
const buttonabrirjs = document.getElementById("abrir-modaljs");
const buttonmateriaisjs = document.getElementById("acessarmateriais-modaljs");
const buttonfecharjs = document.getElementById("fechar-modaljs");
const modal1 = document.querySelector("#dialoghtml");
const modal2 = document.querySelector("#dialogcss");
const modal3 = document.querySelector("#dialogjs");


buttonfecharjs.onclick = function () {
    modal3.close()
}

buttonmateriaisjs.onclick = function () {
    modal3.close()
}

buttonabrirjs.onclick = function () {
    modal3.showModal()
}

buttonfecharcss.onclick = function () {
    modal2.close()
}

buttonabrircss.onclick = function () {
    modal2.showModal()
}

buttonmateriaiscss.onclick = function () {
    modal2.close()
}

buttonabrirhtml.onclick = function () {
    modal1.showModal()
}

buttonfecharhtml.onclick = function () {
    modal1.close()
}

buttonmateriaishtml.onclick = function () {
    modal1.close()
}