const alertCon = document.getElementById("alert-container")
function showAlert(message, type="danger") {
  alertCon.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}
function reserve() {
showAlert("Want a table? Call us now and secure your spot: +44 20 7946 0123" ,"success")
}