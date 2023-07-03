function generateQRCode() {
  var inputData = document.getElementById("inputData").value;
  if (!inputData) {
    alert("Por favor, digite um texto ou link válido.");
    return;
  }
  var qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  var qrcode = new QRCode(qrcodeContainer, {
    text: inputData,
    width: 256,
    height: 256,
  });
}
