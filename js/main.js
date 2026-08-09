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
  { number: '1', name: 'Rob Hamilton', iRacingId: '1049904', joinDate: '2025-05-14', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '2', name: 'Bob Redeker', iRacingId: '1443478', joinDate: '2026-06-15', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '3', name: 'Brandon Brock (A)', iRacingId: '397089', joinDate: '2025-02-24', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '4', name: 'Joshua P. Newman', iRacingId: '980360', joinDate: '2025-03-23', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '5', name: 'Michael  Stevens', iRacingId: '1023741', joinDate: '2026-05-20', discord: true, league: true, series: ["Next Gen", "Trucks"] },
  { number: '6', name: 'Ryan Eberhard', iRacingId: '475316', joinDate: '2025-10-21', discord: true, league: true, series: ["Trucks"] },
  { number: '7', name: 'Chrissy Franklin', iRacingId: '1537478', joinDate: '2026-08-01', discord: true, league: false, series: ["Trucks"] },
  { number: '8', name: 'John Kelly', iRacingId: '878206', joinDate: '2026-03-08', discord: true, league: true, series: ["Next Gen", "Gen 6"] },
  { number: '9', name: 'Jamie Bolton (A)', iRacingId: '720324', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '10', name: 'Iain Montrose', iRacingId: '442002', joinDate: '2026-01-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '11', name: 'Kyle Franklin (C)', iRacingId: '389820', joinDate: '2025-02-22', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '12', name: 'Micheal Prachick', iRacingId: '898430', joinDate: '2026-02-18', discord: true, league: true, series: ["Gen 6"] },
  { number: '13', name: 'Cody Sigle-Oliver', iRacingId: '288645', joinDate: '2025-12-11', discord: true, league: true, series: ["Trucks"] },
  { number: '14', name: 'Blair Jolie', iRacingId: '87053', joinDate: '2026-03-03', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '15', name: 'Ryan Fuchs (C)', iRacingId: '224916', joinDate: '2025-03-11', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '16', name: 'Carson Youngblood', iRacingId: '992960', joinDate: '2025-07-17', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '17', name: 'Adam Keen', iRacingId: '768673', joinDate: '2025-03-09', discord: true, league: true, series: ["Next Gen", "Gen 6"] },
  { number: '18', name: 'Erich Johnson (A)(C)', iRacingId: '693957', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '19', name: 'Robert Tibbs', iRacingId: '351164', joinDate: '2025-06-13', discord: true, league: true, series: ["Next Gen", "Trucks"] },
  { number: '20', name: 'Cale Petersohn', iRacingId: '316582', joinDate: '2025-03-08', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '21', name: 'Andrew Coon', iRacingId: '1164593', joinDate: '2/22/2025', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '22', name: 'Kevin Pavesic', iRacingId: '916644', joinDate: '2026-06-02', discord: true, league: true, series: ["Gen 6"] },
  { number: '23', name: 'Joel Kerth', iRacingId: '624276', joinDate: '2026-06-20', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '24', name: 'David Vodicka', iRacingId: '27156', joinDate: '2025-07-27', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '25', name: 'James Greany', iRacingId: '1010071', joinDate: '2025-05-05', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '26', name: 'Timothy Boyce', iRacingId: '668330', joinDate: '2026-03-05', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '28', name: 'Jeremy Ingold', iRacingId: '1331610', joinDate: '2026-02-26', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '29', name: 'Michael Richardson', iRacingId: '826383', joinDate: '2026-05-30', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '30', name: 'Shannon Donathan', iRacingId: '27434', joinDate: '2025-07-01', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '31', name: 'William Ligotti', iRacingId: '1441601', joinDate: '2026-06-03', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '33', name: 'Sean Roether', iRacingId: '812357', joinDate: '2025-04-05', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '34', name: 'Dalton Hall', iRacingId: '333163', joinDate: '2025-11-17', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '35', name: 'Kyle Barrington', iRacingId: '878766', joinDate: '2026-01-13', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '39', name: 'Christopher Jones', iRacingId: '1016061', joinDate: '2026-04-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '41', name: 'Marcus Monson', iRacingId: '87354', joinDate: '2026-06-06', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '42', name: 'Ben Dalton', iRacingId: '302746', joinDate: '2026-07-02', discord: true, league: true, series: ["Next Gen"] },
  { number: '43', name: 'Drew Calvert', iRacingId: '607444', joinDate: '2025-11-16', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '44', name: 'Jeremy Oliver', iRacingId: '1262653', joinDate: '2026-07-09', discord: true, league: true, series: ["Gen 6"] },
  { number: '47', name: 'Sean Wilson', iRacingId: '413816', joinDate: '2025-10-20', discord: true, league: true, series: ["Trucks"] },
  { number: '48', name: 'Bryan Matthews', iRacingId: '1146035', joinDate: '2026-06-09', discord: true, league: true, series: ["Trucks"] },
  { number: '49', name: 'David Forss', iRacingId: '236469', joinDate: '2026-06-09', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '51', name: 'Matthew Markland', iRacingId: '766082', joinDate: '2025-07-26', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '53', name: 'Brian Whelchel', iRacingId: '295481', joinDate: '2025-02-22', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '55', name: 'Brian Ziemer', iRacingId: '454936', joinDate: '2025-02-23', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '57', name: 'Charles Wilson (A)', iRacingId: '674446', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '60', name: 'Steve Giberson', iRacingId: '457981', joinDate: '2025-08-12', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '61', name: 'Rob Williams', iRacingId: '945236', joinDate: '2025-08-03', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '62', name: 'Ronnie Whelchel (A)', iRacingId: '487816', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '63', name: 'Robert Day', iRacingId: '694356', joinDate: '2026-03-23', discord: true, league: true, series: ["Trucks"] },
  { number: '66', name: 'Tim Friedt***', iRacingId: '524257', joinDate: '2025-08-06', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '68', name: 'Jordan Massey', iRacingId: '382986', joinDate: '2025-10-17', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '69', name: 'Charles Bagley***', iRacingId: '1239725', joinDate: '2026-02-09', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '71', name: 'Terry Litwiler (A)', iRacingId: '63414', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '72', name: 'Michael Cordray', iRacingId: '995831', joinDate: '2026-05-25', discord: true, league: true, series: ["Trucks"] },
  { number: '73', name: 'David Duvail', iRacingId: '56886', joinDate: '2025-08-01', discord: true, league: true, series: ["Next Gen", "Trucks"] },
  { number: '74', name: 'Jakob Ainsworth (A)', iRacingId: '1128559', joinDate: '2025-07-27', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '77', name: 'Joshua Yarbrough (C)', iRacingId: '338934', joinDate: '2025-02-22', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '78', name: 'James Watson***', iRacingId: '587702', joinDate: '2025-10-01', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '80', name: 'Scott Ford***', iRacingId: '959903', joinDate: '2026-03-13', discord: true, league: true, series: ["Gen 6"] },
  { number: '82', name: 'John Matteo', iRacingId: '518254', joinDate: '2025-06-04', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '87', name: 'Mark Kazin (A)', iRacingId: '659490', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '88', name: 'Aaron Sellers', iRacingId: '1018394', joinDate: '2025-08-19', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '89', name: 'Tim Fillmore (A)', iRacingId: '871154', joinDate: '2025-02-21', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '91', name: 'Chase Stempfley (A)(C)', iRacingId: '263051', joinDate: '2025-02-21', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '92', name: 'Dean Geer', iRacingId: '263694', joinDate: '2026-02-16', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '93', name: 'Jason Templeton', iRacingId: '400919', joinDate: '2026-07-01', discord: true, league: true, series: ["Trucks", "Gen 6"] },
  { number: '97', name: 'Anthony Bennett', iRacingId: '80697', joinDate: '2025-06-30', discord: true, league: true, series: ["Next Gen", "Trucks", "Gen 6"] },
  { number: '99', name: 'Chad Cook', iRacingId: '1362634', joinDate: '2026-05-14', discord: true, league: true, series: ["Gen 6"] }
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


function formatDriverName(name) {
  // (A) Admin = red, (C) Champion = light green
  return name
    .replace(/\(A\)/g, '<span style="color:#fc8181;font-weight:700;">(A)</span>')
    .replace(/\(C\)/g, '<span style="color:#68d391;font-weight:700;">(C)</span>');
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
      const url = `https://irstats.com/driver/${member.iRacingId}`;
      idCell = `<a href="${url}" target="_blank" rel="noopener" title="View iRacing Stats Profile">${member.iRacingId}</a>`;
    }

    tr.innerHTML = `
      <td class="car-number">#${member.number}</td>
      <td>${formatDriverName(member.name)}</td>
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
