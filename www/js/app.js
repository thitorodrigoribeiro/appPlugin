document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
var divApar = document.querySelector("#aparelho");
divApar.innerHTML = "<BR>Fabricante: " +
device.manufacturer;
divApar.innerHTML += "<BR>Modelo: " + device.model;
divApar.innerHTML += "<BR>Plataforma: " + device.platform;
divApar.innerHTML += "<BR>UUID: " + device.uuid;
divApar.innerHTML += "<BR>Aparelho Virtual?: " +
device.isVirtual;
divApar.innerHTML += "<BR>Cordova: " + device.cordova;
}