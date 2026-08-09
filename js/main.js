// OutCast Motorsports - Main JS

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    // Close on link click (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});

// Sample roster data (replace with real data later)
// Format: { number: string, name: string, iRacingName: string, car?: string }
const SAMPLE_ROSTER = [
  { number: '07', name: 'Admin Example', iRacingName: 'Admin.OutCast', car: 'N/A' },
  { number: '14', name: 'Driver One', iRacingName: 'Driver1_iR', car: 'GT3' },
  { number: '22', name: 'Driver Two', iRacingName: 'Driver2_iR', car: 'NASCAR' },
  { number: '48', name: 'Driver Three', iRacingName: 'Driver3_iR', car: 'Formula' },
  { number: '69', name: 'Driver Four', iRacingName: 'Driver4_iR', car: 'Sports Car' },
];

// Taken numbers set from roster
function getTakenNumbers() {
  return new Set(SAMPLE_ROSTER.map(m => parseInt(m.number, 10)));
}

// Render number grid if element exists
function renderNumberGrid() {
  const grid = document.getElementById('number-grid');
  if (!grid) return;

  const taken = getTakenNumbers();
  // Common league numbers 1-99
  for (let i = 1; i <= 99; i++) {
    const cell = document.createElement('div');
    cell.className = 'num-cell';
    cell.textContent = String(i);
    
    if (taken.has(i)) {
      cell.classList.add('taken');
      cell.title = 'Taken';
    } else {
      cell.classList.add('available');
      cell.title = 'Available – click to request';
      cell.style.cursor = 'pointer';
      cell.addEventListener('click', () => {
        const input = document.getElementById('requested-number');
        if (input) {
          input.value = cell.textContent;
          input.focus();
          // Scroll to form
          document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    grid.appendChild(cell);
  }
}

// Render roster table if element exists
function renderRoster() {
  const tbody = document.getElementById('roster-body');
  if (!tbody) return;

  SAMPLE_ROSTER.forEach(member => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="car-number">#${member.number}</td>
      <td>${member.name}</td>
      <td>${member.iRacingName}</td>
      <td>${member.car || '—'}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Form success feedback (client-side demo)
function handleFormSubmit(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;
  
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Submitting...';
  
  // Simulate submission (replace with real endpoint later)
  setTimeout(() => {
    btn.textContent = '✓ Submitted!';
    btn.style.background = 'linear-gradient(135deg, #276749, #38a169)';
    
    // Show notice
    let notice = form.querySelector('.form-success');
    if (!notice) {
      notice = document.createElement('div');
      notice.className = 'notice form-success mt-2';
      notice.innerHTML = '<strong>Thank you!</strong> Your request has been received. An admin will review and respond via email or Discord.';
      form.appendChild(notice);
    }
    
    form.reset();
    
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      btn.style.background = '';
    }, 4000);
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
  renderNumberGrid();
  renderRoster();
  
  // Attach form handlers
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => handleFormSubmit(e, 'join-form'));
  }
  
  const requestForm = document.getElementById('number-request-form');
  if (requestForm) {
    requestForm.addEventListener('submit', (e) => handleFormSubmit(e, 'number-request-form'));
  }
  
  const changeForm = document.getElementById('change-number-form');
  if (changeForm) {
    changeForm.addEventListener('submit', (e) => handleFormSubmit(e, 'change-number-form'));
  }
});
