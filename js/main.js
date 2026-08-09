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

/*
  Roster data structure:
  number      - car number (1-99, no leading zero)
  name        - driver display name
  iRacingId   - Customer ID (clickable profile link; leave blank until known)
  joinDate    - e.g. "2025-03-15" or "Mar 2025"
  discord     - true/false
  league      - true/false
  series      - array of series the driver is in: "Next Gen", "Trucks", "Gen 6"
*/
const SAMPLE_ROSTER = [
  { number: '7',  name: 'Admin Example', iRacingId: '', joinDate: '2024-01-10', discord: true,  league: true,  series: ['Next Gen', 'Trucks', 'Gen 6'] },
  { number: '14', name: 'Driver One',    iRacingId: '', joinDate: '2024-06-22', discord: true,  league: true,  series: ['Next Gen'] },
  { number: '22', name: 'Driver Two',    iRacingId: '', joinDate: '2025-01-05', discord: true,  league: false, series: ['Trucks'] },
  { number: '48', name: 'Driver Three',  iRacingId: '', joinDate: '2025-02-18', discord: false, league: true,  series: ['Gen 6'] },
  { number: '69', name: 'Driver Four',   iRacingId: '', joinDate: '2025-03-01', discord: true,  league: true,  series: ['Next Gen', 'Trucks'] },
];

function getTakenNumbers(seriesName) {
  const taken = new Set();
  SAMPLE_ROSTER.forEach(m => {
    if (m.series && m.series.includes(seriesName)) {
      taken.add(parseInt(m.number, 10));
    }
  });
  return taken;
}

function renderNumberGrid(gridId, seriesName) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const taken = getTakenNumbers(seriesName);
  grid.innerHTML = '';

  for (let i = 1; i <= 99; i++) {
    const cell = document.createElement('div');
    cell.className = 'num-cell';
    cell.textContent = String(i);

    if (taken.has(i)) {
      cell.classList.add('taken');
      cell.title = 'Taken – ' + seriesName;
    } else {
      cell.classList.add('available');
      cell.title = 'Available – ' + seriesName + ' (click to request)';
      cell.style.cursor = 'pointer';
      cell.addEventListener('click', () => {
        // Check the matching series checkbox
        const map = {
          'Next Gen': 'series-nextgen',
          'Trucks': 'series-trucks',
          'Gen 6': 'series-gen6'
        };
        const cb = document.getElementById(map[seriesName]);
        if (cb) cb.checked = true;

        const numberInput = document.getElementById('requested-number');
        if (numberInput) {
          numberInput.value = String(i);
          numberInput.focus();
        }
        document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
    grid.appendChild(cell);
  }
}

function yesNoBadge(val) {
  if (val === true)  return '<span class="badge" style="background:rgba(56,161,105,0.25);color:#68d391;">Yes</span>';
  if (val === false) return '<span class="badge" style="background:rgba(229,62,62,0.2);color:#fc8181;">No</span>';
  return '—';
}

function seriesBadges(seriesArr) {
  if (!seriesArr || !seriesArr.length) return '—';
  return seriesArr.map(s => {
    // Match Car Numbers page colors
    let color = '#68d391';      // Next Gen - green
    let bg = 'rgba(104,211,145,0.15)';
    if (s === 'Trucks') {
      color = '#fc8181';    // red
      bg = 'rgba(252,129,129,0.15)';
    }
    if (s === 'Gen 6') {
      color = '#63b3ed';     // light blue
      bg = 'rgba(99,179,237,0.15)';
    }
    return `<span class="badge" style="margin:2px;background:${bg};color:${color};">${s}</span>`;
  }).join(' ');
}

function renderRoster() {
  const tbody = document.getElementById('roster-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  SAMPLE_ROSTER.forEach(member => {
    const tr = document.createElement('tr');
    let idCell = '—';
    if (member.iRacingId) {
      const url = `https://members.iracing.com/membersite/member/Profile.do?custid=${member.iRacingId}`;
      idCell = `<a href="${url}" target="_blank" rel="noopener" title="View iRacing Profile">${member.iRacingId}</a>`;
    }

    tr.innerHTML = `
      <td class="car-number">#${member.number}</td>
      <td>${member.name}</td>
      <td>${idCell}</td>
      <td>${member.joinDate || '—'}</td>
      <td>${yesNoBadge(member.discord)}</td>
      <td>${yesNoBadge(member.league)}</td>
      <td>${seriesBadges(member.series)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function handleFormSubmit(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Submitting...';

  setTimeout(() => {
    btn.textContent = '✓ Submitted!';
    btn.style.background = 'linear-gradient(135deg, #276749, #38a169)';

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
  renderNumberGrid('number-grid-nextgen', 'Next Gen');
  renderNumberGrid('number-grid-trucks', 'Trucks');
  renderNumberGrid('number-grid-gen6', 'Gen 6');
  renderRoster();

  const joinForm = document.getElementById('join-form');
  if (joinForm) joinForm.addEventListener('submit', (e) => handleFormSubmit(e, 'join-form'));

  const requestForm = document.getElementById('number-request-form');
  if (requestForm) requestForm.addEventListener('submit', (e) => handleFormSubmit(e, 'number-request-form'));

  const changeForm = document.getElementById('change-number-form');
  if (changeForm) changeForm.addEventListener('submit', (e) => handleFormSubmit(e, 'change-number-form'));
});
