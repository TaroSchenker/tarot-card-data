"""Tarot card data for all 78 cards.

Tarot card data by Taro's Tarot (https://tarostarot.com/tarot-card-data), CC BY 4.0.

    import tarot_card_data
    cards = tarot_card_data.cards()
    fool = tarot_card_data.get("the-fool")
"""

import json
from functools import lru_cache
from pathlib import Path

__version__ = "1.0.0"
__all__ = ["load", "cards", "get", "csv_path", "json_path"]

_HERE = Path(__file__).resolve().parent


def _data_file(name):
    # Installed wheel: next to this file. Repo checkout: one folder up.
    for folder in (_HERE, _HERE.parent):
        path = folder / name
        if path.is_file():
            return path
    raise FileNotFoundError(name)


def json_path():
    """Path to tarot-cards.json."""
    return _data_file("tarot-cards.json")


def csv_path():
    """Path to tarot-cards.csv (one row per card, keywords separated by '; ')."""
    return _data_file("tarot-cards.csv")


@lru_cache(maxsize=1)
def load():
    """The whole data set: licence details plus `cards` (78 dicts)."""
    with open(json_path(), encoding="utf-8") as f:
        return json.load(f)


def cards():
    """All 78 cards, Major Arcana first."""
    return load()["cards"]


def get(card_id):
    """One card by its id, e.g. "the-fool" or "nine-of-wands"."""
    for card in cards():
        if card["id"] == card_id:
            return card
    raise KeyError(card_id)
