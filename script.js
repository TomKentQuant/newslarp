const button = document.getElementById('copyLink');
button.addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try { await navigator.clipboard.writeText(window.location.href); status.textContent = 'Link copied!'; }
  catch { status.textContent = 'Copy the URL from your address bar.'; }
});
