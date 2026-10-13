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

  const lines = Object.entries(data)
    .filter(([k]) => k !== 'website')
    .map(([k, v]) => `${k}: ${String(v).slice(0, 2000)}`)
    .join('\n');
  const subject = `Nieuwe aanvraag via beginbhv.com (${data.course || data.source || 'contact'})`;

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
        }),
      });
      if (!r.ok) throw new Error(await r.text());
    } else if (MAIL_PROVIDER === 'resend') {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${MAIL_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: MAIL_FROM || 'BeginBHV <noreply@beginbhv.com>', to: [MAIL_TO], reply_to: email, subject, text: lines }),
      });
      if (!r.ok) throw new Error(await r.text());
    }
    return res.status(200).json({ ok: true, mailed: true });
  } catch (e) {
    console.error('[aanvraag] mail mislukt', e);
    return res.status(502).json({ error: 'Mail mislukt' });
  }
}
