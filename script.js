
function generate() {
  const name = document.getElementById('name').value;
  const inst = document.getElementById('institute').value;
  const course = document.getElementById('course').value;
  const code = document.getElementById('code').value;
  const date = document.getElementById('date').value;
  const logoInput = document.getElementById('logoInput');
  const coverPage = document.getElementById('coverPage');
  const reader = new FileReader();

  reader.onload = function(e) {
    coverPage.innerHTML = `
      <img src="${e.target.result}" class="logo" alt="Logo"/>
      <h1>${inst}</h1>
      <h2>${course} (${code})</h2>
      <h3>Submitted by: ${name}</h3>
      <h3>Date: ${date}</h3>
    `;
    coverPage.style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
  };

  if (logoInput.files.length > 0) {
    reader.readAsDataURL(logoInput.files[0]);
  } else {
    coverPage.innerHTML = `
      <h1>${inst}</h1>
      <h2>${course} (${code})</h2>
      <h3>Submitted by: ${name}</h3>
      <h3>Date: ${date}</h3>
    `;
    coverPage.style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
  }
}

function downloadPDF() {
  const element = document.getElementById('coverPage');
  html2pdf().from(element).save('cover_page.pdf');
}
