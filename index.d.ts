// Tarot card data by Taro's Tarot (https://tarostarot.com/tarot-card-data), CC BY 4.0

declare namespace tarotCardData {
  type YesNo = 'yes' | 'no' | 'maybe';
  type Suit = 'wands' | 'cups' | 'swords' | 'pentacles';
  type Rank =
    | 'ace' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven'
    | 'eight' | 'nine' | 'ten' | 'page' | 'knight' | 'queen' | 'king';

  interface TarotCard {
    /** URL slug, unique, e.g. "the-fool" */
    id: string;
    name: string;
    /** Major Arcana 0-21; minor cards 1-14 (ace 1, page 11, knight 12, queen 13, king 14) */
    number: number;
    arcana: 'major' | 'minor';
    /** null for the Major Arcana */
    suit: Suit | null;
    /** null for the Major Arcana */
    rank: Rank | null;
    /** 8 per card */
    keywords: string[];
    /** The upright meaning in one sentence */
    upright: string;
    /** The reversed meaning in one sentence */
    reversed: string;
    yes_no: {
      upright: YesNo;
      reversed: YesNo;
      /** Why, in under 100 characters */
      summary: string;
    };
    element: 'fire' | 'water' | 'air' | 'earth';
    astrology: {
      planet: string | null;
      sign: string | null;
      /** Numbered minor cards 2-10: which third of the sign (1, 2 or 3) */
      decan: number | null;
      dates: string | null;
      /** Court cards only, e.g. "Air of Earth" */
      elemental_dignity: string | null;
    };
    /** Card image (WebP, 300 x 527 px), public domain */
    image: string;
    /** The card's full meaning page on tarostarot.com */
    url: string;
  }

  interface TarotCardData {
    title: string;
    version: string;
    updated: string;
    source: string;
    license: string;
    license_url: string;
    /** The credit line to show with the data */
    attribution: string;
    images: string;
    cards: TarotCard[];
  }
}

declare const tarotCardData: tarotCardData.TarotCardData;
export = tarotCardData;
