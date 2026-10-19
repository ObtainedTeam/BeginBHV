// Vercel Serverless Function: ontvangt funnel- en contactaanvragen.
// E-mailverzending (dienst + API-key) wordt later ingesteld via env-vars:
//   MAIL_PROVIDER = brevo | resend
//   MAIL_API_KEY  = de API-key
//   MAIL_TO       = e-mailadres van Dennis
//   MAIL_FROM     = afzender (gevalideerd domein bij de dienst)
// Zolang die ontbreken, wordt de aanvraag alleen gelogd en 200 teruggegeven.

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let data = req.body;
  if (typeof data === 'string') { try { data = JSON.parse(data); } catch { data = {}; } }
  data = data || {};

  // Honeypot: bots vullen het verborgen veld in.
  if (data.website) return res.status(200).json({ ok: true });

  const email = String(data.email || '').trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Ongeldig e-mailadres' });
  }

  // Nederlandse labels en vaste volgorde in de mail
  const labels = {
    course: 'Cursus', participants: 'Aantal deelnemers', location: 'Locatie', company: 'Bedrijf', name: 'Naam',
    email: 'E-mail', phone: 'Telefoon', address: 'Adres', postcode: 'Postcode', city: 'Plaats', message: 'Bericht',
    quantity: 'Aantal', source: 'Via',
  };
  const courseNames = { 'bhv-basis': 'Basis BHV + e-learning', 'bhv-herhaling': 'Herhaling BHV + e-learning', 'bhv-nibhv': 'Basis BHV (NIBHV)', 'bhv-nibhv-herhaling': 'Herhaling BHV (NIBHV)', 'reanimatie-workshop': 'Reanimatie workshop', ontruimingsoefening: 'Ontruimingsoefening', incompany: 'Incompany' };
  const locationNames = { extern: 'Externe locatie, in overleg', incompany: 'Incompany (op locatie van de klant)', onbekend: 'Weet nog niet' };
  const sourceNames = { funnel: 'aanvraagfunnel (homepage/contact)', 'home-contact': 'contactformulier homepage', klantenservice: 'klantenservice', cursusboek: 'bestelling cursusboek' };
  const pretty = (k, v) => k === 'course' ? (courseNames[v] || v) : k === 'location' ? (locationNames[v] || v) : k === 'source' ? (sourceNames[v] || v) : v;
  const order = ['course', 'participants', 'location', 'company', 'name', 'email', 'phone', 'address', 'postcode', 'city', 'quantity', 'message', 'source'];
  const entries = Object.entries(data)
    .filter(([k, v]) => k !== 'website' && String(v ?? '').trim() !== '')
    .sort(([a], [b]) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99))
    .map(([k, v]) => [labels[k] || k, String(pretty(k, String(v).trim())).slice(0, 2000)]);
  const lines = entries.map(([k, v]) => `${k}: ${v}`).join('\n');
  const esc = (t) => t.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111;max-width:560px">
    <div style="background:#ff0000;color:#fff;padding:14px 18px;border-radius:10px 10px 0 0;font-weight:700;font-size:17px">Nieuwe aanvraag via beginbhv.com</div>
    <table style="border-collapse:collapse;width:100%;background:#f7f7f7;border-radius:0 0 10px 10px">
      ${entries.map(([k, v]) => `<tr><td style="padding:8px 18px;font-weight:700;width:170px;vertical-align:top;border-bottom:1px solid #e6e6e6">${esc(k)}</td><td style="padding:8px 18px;vertical-align:top;border-bottom:1px solid #e6e6e6;white-space:pre-wrap">${esc(v)}</td></tr>`).join('')}
    </table>
    <p style="color:#666;font-size:13px;margin-top:12px">Beantwoord deze mail om direct te reageren naar ${esc(email)}.</p>
  </div>`;
  const subject = `Nieuwe aanvraag via beginbhv.com: ${courseNames[data.course] || data.course || sourceNames[data.source] || 'contact'}${data.company ? ' (' + String(data.company).slice(0, 60) + ')' : ''}`;

  const { MAIL_PROVIDER, MAIL_API_KEY, MAIL_TO, MAIL_FROM } = process.env;
  if (!MAIL_PROVIDER || !MAIL_API_KEY || !MAIL_TO) {
    console.log('[aanvraag] (geen mailconfig)\n' + lines);
    return res.status(200).json({ ok: true, mailed: false });
  }

  try {
    if (MAIL_PROVIDER === 'brevo') {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': MAIL_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { email: MAIL_FROM || 'noreply@beginbhv.com', name: 'BeginBHV website' },
          to: [{ email: MAIL_TO }],
          replyTo: { email },
          subject,
          textContent: lines,
          htmlContent: html,
        }),
      });
      if (!r.ok) throw new Error(await r.text());
    } else if (MAIL_PROVIDER === 'resend') {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${MAIL_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: MAIL_FROM || 'BeginBHV <noreply@beginbhv.com>', to: [MAIL_TO], reply_to: email, subject, text: lines, html }),
      });
      if (!r.ok) throw new Error(await r.text());
    }
    return res.status(200).json({ ok: true, mailed: true });
  } catch (e) {
    console.error('[aanvraag] mail mislukt', e);
    return res.status(502).json({ error: 'Mail mislukt' });
  }
}
