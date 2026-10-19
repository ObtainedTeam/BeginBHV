// Google-reviews van het Google Bedrijfsprofiel, via de Places API (New).
// Env in Vercel: GOOGLE_PLACES_KEY (API-sleutel met Places API (New) aan), GOOGLE_PLACE_ID (Place ID van BeginBHV).
// Antwoord wordt 24 uur gecachet aan de Vercel-kant, zodat de API bijna nooit geraakt wordt.

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  res.setHeader('Content-Type', 'application/json');
  if (!key || !placeId) {
    res.setHeader('Cache-Control', 'public, s-maxage=3600');
    return res.status(200).json({ configured: false });
  }
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=nl`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri' },
    });
    if (!r.ok) throw new Error(`Places ${r.status}`);
    const d = await r.json();
    const reviews = (d.reviews ?? [])
      .filter((x) => x.rating >= 4 && x.text?.text)
      .slice(0, 6)
      .map((x) => ({
        name: x.authorAttribution?.displayName ?? 'Google-gebruiker',
        photo: x.authorAttribution?.photoUri ?? '',
        rating: x.rating,
        text: x.text.text,
        when: x.relativePublishTimeDescription ?? '',
      }));
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json({ configured: true, rating: d.rating, count: d.userRatingCount, url: d.googleMapsUri, reviews });
  } catch (e) {
    console.error('reviews', e);
    res.setHeader('Cache-Control', 'public, s-maxage=600');
    return res.status(200).json({ configured: true, error: true });
  }
}
