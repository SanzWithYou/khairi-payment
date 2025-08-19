// --- Logika pilih metode pembayaran ---
const buttons = document.querySelectorAll('.pay-btn');
const displays = {
  tng: document.getElementById('tngDisplay'),
  qris: document.getElementById('qrisDisplay'),
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // reset semua tombol & display
    buttons.forEach((b) => b.classList.remove('active'));
    Object.values(displays).forEach((d) => (d.style.display = 'none'));

    // aktifkan tombol & tampilkan display
    btn.classList.add('active');
    displays[btn.id].style.display = 'block';
  });
});

// --- Logika tombol Salin ---
const copyButtons = document.querySelectorAll('.copyBtn');
const toast = document.getElementById('toast');

copyButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const textToCopy = document.getElementById(targetId).innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // tampilkan toast modern
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);
      })
      .catch((err) => {
        console.error('Gagal menyalin:', err);
      });
  });
});
