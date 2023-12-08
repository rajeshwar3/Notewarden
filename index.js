const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

let totalCount = localStorage.getItem('totalCount');
if (!totalCount) {
  localStorage.setItem('totalCount', '0');
  totalCount = 0;
}

document.getElementById('totalCount').textContent = totalCount;

function updateCount() {
  totalCount++;
  localStorage.setItem('totalCount', totalCount);
  document.getElementById('totalCount').textContent = totalCount;
}

document.getElementById('button1').addEventListener('click', updateCount);

document.getElementById('button2').addEventListener('click', updateCount);
