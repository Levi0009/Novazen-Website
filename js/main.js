document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('leadForm');
  const confirmation = document.getElementById('confirmation');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.style.display = 'none';
      confirmation.classList.remove('hidden');
    });
  }
});
