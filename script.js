function login() {
  let e = email.value;
  let p = password.value;

  if (e === "narnenani99@gmail.com" && p === "nani0909") {
    location.href = "loan.html";
  } else {
    msg.innerText = "Unauthorized Access";
  }
}

function predictLoan() {
  let i = +income.value;
  let l = +loan.value;
  let c = +credit.value;

  let h = JSON.parse(localStorage.getItem("history")) || [];

  if (i >= 50000 && c >= 720) {
    result.innerText = "Loan Approved";
    h.push("Approved Loan: " + l);
  } else {
    result.innerText = "Loan Rejected";
    h.push("Rejected Loan: " + l);
  }

  localStorage.setItem("history", JSON.stringify(h));
}
if (approved) {
  alert("Loan Approved!");
  window.location.href = "rules.html";
} else {
  alert("Loan Rejected due to low score or income");
}
