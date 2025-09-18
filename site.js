document.getElementById && (document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear()));
function sendDemo(e){e.preventDefault(); alert('Demo form: message sent. Replace with real backend.'); return false;}
window.sendDemo = sendDemo;
