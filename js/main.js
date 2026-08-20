// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Education / timeline accordion
  document.querySelectorAll('.timeline-head').forEach((head) => {
    head.addEventListener('click', () => {
      head.closest('.timeline-item').classList.toggle('open');
    });
  });
});
