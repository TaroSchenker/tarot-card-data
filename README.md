# Tarot card data: all 78 cards (JSON and CSV)

Free, structured data for the 78 tarot cards: names, numbers, suits, ranks, keywords, upright and reversed meanings, yes or no answers, element and astrology, with a public-domain image of each card from the 1909 Rider-Waite-Smith deck.

Made by [Taro's Tarot](https://tarostarot.com). The page with downloads, field notes and an embeddable daily card: **https://tarostarot.com/tarot-card-data**

## Files

| File | What it is |
| --- | --- |
| `tarot-cards.json` | All 78 cards, one object each, with licence details at the top |
| `tarot-cards.csv` | The same data, one row per card (keywords separated by `; `) |
| `images/` | 78 card images, WebP, 300 x 527 px (also as one [ZIP](https://cdn.tarostarot.com/downloads/tarot-card-images-1909-v1.zip)) |

Always-current copies: [https://tarostarot.com/tarot-card-data/tarot-cards.json](https://tarostarot.com/tarot-card-data/tarot-cards.json) and [https://tarostarot.com/tarot-card-data/tarot-cards.csv](https://tarostarot.com/tarot-card-data/tarot-cards.csv). Both send `Access-Control-Allow-Origin: *`, so browser code on any site can fetch them. There is no key and no rate limit: fetch the file once and keep it.

## Fields

| Field | Example | Notes |
| --- | --- | --- |
| `id` | `the-fool` | URL slug, unique |
| `name` | `The Fool` | |
| `number` | `0` | Major Arcana 0-21; minor cards 1-14 (ace 1, page 11, knight 12, queen 13, king 14) |
| `arcana` | `major` | `major` or `minor` |
| `suit` | `null` | `wands`, `cups`, `swords`, `pentacles`; `null` for the Major Arcana |
| `rank` | `null` | `ace` ... `ten`, `page`, `knight`, `queen`, `king`; `null` for the Major Arcana |
| `keywords` | `["new beginnings", ...]` | 8 per card |
| `upright` | one sentence | The upright meaning in one line |
| `reversed` | one sentence | The reversed meaning in one line |
| `yes_no.upright` / `yes_no.reversed` | `yes` | `yes`, `no` or `maybe` |
| `yes_no.summary` | one line | Why, in under 100 characters |
| `element` | `air` | `fire`, `water`, `air`, `earth` |
| `astrology.planet` / `astrology.sign` | `Uranus` / `Aquarius` | Major Arcana and numbered minor cards (2-10) |
| `astrology.decan` | `1` | Numbered minor cards 2-10: which third of the sign (1, 2 or 3) |
| `astrology.dates` | `March 21-30` | Where the card has a zodiac date range |
| `astrology.elemental_dignity` | `Air of Earth` | Court cards only |
| `image` | URL | The card image on cdn.tarostarot.com (same files as `images/`) |
| `url` | URL | The card's full meaning page on tarostarot.com |

Aces carry no astrology. Court cards carry their elemental dignity and no zodiac range.

## Example record

```json
{
  "id": "the-fool",
  "name": "The Fool",
  "number": 0,
  "arcana": "major",
  "suit": null,
  "rank": null,
  "keywords": [
    "new beginnings",
    "innocence",
    "spontaneity",
    "free spirit",
    "adventure",
    "faith",
    "potential",
    "risk"
  ],
  "upright": "New beginnings, unlimited potential, and a leap of faith into the unknown.",
  "reversed": "Recklessness, poor judgment, or fear of taking necessary risks.",
  "yes_no": {
    "upright": "yes",
    "reversed": "no",
    "summary": "A yes for the leap itself; the landing is not shown yet"
  },
  "element": "air",
  "astrology": {
    "planet": "Uranus",
    "sign": "Aquarius",
    "decan": null,
    "dates": null,
    "elemental_dignity": null
  },
  "image": "https://cdn.tarostarot.com/cards/00-TheFool.webp",
  "url": "https://tarostarot.com/tarot-cards/the-fool"
}
```

## Use it

```js
const res = await fetch('https://tarostarot.com/tarot-card-data/tarot-cards.json');
const { cards } = await res.json();
const card = cards[Math.floor(Math.random() * cards.length)];
console.log(card.name, card.upright);
```

```python
import csv
with open("tarot-cards.csv", newline="", encoding="utf-8") as f:
    cards = list(csv.DictReader(f))
print(cards[0]["name"], cards[0]["yes_no_upright"])
```

## Daily card for your site

Paste this where the card should appear. One cached script, no cookies, no tracking; the card changes at midnight UTC. Add `data-theme="dark"` to the `div` for a dark card.

```html
<div data-taros-tarot-daily-card><a href="https://tarostarot.com/tarot-card-of-the-day">Daily card by Taro's Tarot</a></div>
<script src="https://tarostarot.com/embed/daily-card.js" async></script>
```

## Licence

- **Card data** (all text in `tarot-cards.json` and `tarot-cards.csv`): [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). Use it for anything, including commercial projects, and credit it with a link:

  ```html
  Tarot card data by <a href="https://tarostarot.com/tarot-card-data">Taro's Tarot</a> (CC BY 4.0)
  ```

- **Card images**: public domain. See [LICENSE](LICENSE) for where the scans come from.

Data version 2026-11-12. Exported from https://tarostarot.com; the page above always has the current version.
