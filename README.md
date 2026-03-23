# TuneIn-Side 🎵

Mini bir music mood quiz app'i.
5 soruya cevap veriyorsun, mood'unu yakalıyoruz, sonra sana o ana uygun playlist veriyoruz.

## Ne Var Bu App'te?

- 5 soruluk hızlı quiz akışı
- 3 mood kategorisi (energetic / chill / night vibes)
- Skora göre dinamik playlist (0-10 arası)
- Sonuç kartı + Spotify arama linkleri
- Mobil uyumlu, tek sayfa, sade arayüz

## Localde Çalıştırma

1. Proje klasörünü aç.
2. `index.html` dosyasını direkt tarayıcıda aç **veya** local server başlat:
   - `python -m http.server 4173`
3. Tarayıcıdan aç: `http://127.0.0.1:4173/index.html`

## Deploy (En Kolay Yol)

Bu proje static olduğu için Netlify / Vercel / GitHub Pages ile direkt deploy edilir.

- Build step yok
- Output klasörü yok
- Root'taki dosyalar direkt yayınlanır (`index.html`, `style.css`, `script.js`, `assets/`)

## Not

- Backend yok, database yok, auth yok.
- Tamamen client-side çalışır.
