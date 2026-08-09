# OutCast Motorsports Website

Professional dark-themed static website for the OutCast Motorsports iRacing league.

## What’s Included

| Page | File | Status |
|------|------|--------|
| Home | `index.html` | Complete with logo + welcome text |
| Rules & Points | `rules.html` | Min requirements + basic rules done; Discord rules & Points system placeholders |
| Roster | `roster.html` | Sample table – **needs your real member data** |
| Car Numbers | `numbers.html` | Interactive 1–99 grid + Request form + Change Number form |
| Join League | `join.html` | Full registration form (approval-based) |
| Broadcasts | `videos.html` | Placeholder |
| Merchandise | `merch.html` | Placeholder |
| Donate | `donate.html` | Placeholder |
| Sponsors | `sponsors.html` | Placeholder |
| Contact | `contact.html` | Email live; Discord link/QR pending |

Theme matches the phoenix logo (deep navy / electric blue / gold accents, dark background).

---

## Quick Local Preview

1. Open the folder in a browser, or better:
2. From a terminal inside this folder run:
   ```bash
   # Python 3
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080`

Or simply double-click `index.html` (some features work better with a local server).

---

## How to Host It (Recommended Free Options)

### Option A – Netlify (easiest, free, forms support)
1. Create a free account at [netlify.com](https://www.netlify.com).
2. Drag & drop the entire `outcast-website` folder onto the Netlify dashboard, **or** connect a GitHub repo.
3. Your site will be live at a `*.netlify.app` URL (you can add a custom domain later).
4. Forms can be upgraded to real submissions with Netlify Forms (or Formspree).

### Option B – GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to Settings → Pages → set source to the main branch.
4. Site will be at `https://yourusername.github.io/repo-name`.

### Option C – Cloudflare Pages / Vercel
Same idea: connect the folder or a Git repo and deploy.

---

## Making the Forms Actually Work

Currently the forms show a success message in the browser only (demo). To receive real submissions:

1. **Easiest:** Sign up at [formspree.io](https://formspree.io) (free tier).
2. Create a form, copy the endpoint URL.
3. In each form (`join.html`, `numbers.html`) change:
   ```html
   <form id="join-form">
   ```
   to:
   ```html
   <form id="join-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove or adjust the JavaScript `handleFormSubmit` if you want native Formspree redirect/success pages.

Alternatively use Google Forms embeds or Airtable forms.

---

## Updating the Roster (and Car Numbers)

The roster and taken numbers are driven by one array in `js/main.js`:

```js
const SAMPLE_ROSTER = [
  { number: '07', name: 'Admin Example', iRacingName: 'Admin.OutCast', car: 'N/A' },
  // add more...
];
```

- Edit that array with real members.
- The number grid on the Car Numbers page automatically marks those numbers as taken.
- Later we can move this to a JSON file or Google Sheet so non-technical admins can update it.

---

## What I Still Need From You

See the companion message / list below for the exact items required to finish each section.

---

## File Structure

```
outcast-website/
├── index.html
├── rules.html
├── roster.html
├── numbers.html
├── join.html
├── videos.html
├── merch.html
├── donate.html
├── sponsors.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── logo.png
└── README.md
```

---

Built for OutCast Motorsports – 2026
