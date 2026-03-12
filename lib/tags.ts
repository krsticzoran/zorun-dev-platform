export const TAGS = {
  pocetnici: "Početnici",
  rekreativci: "Rekreativci",
  napredni: "Napredni",
  "40plus": "40+",
  "5k": "5K",
  "10k": "10K",
  "21k": "21K",
  maraton: "Maraton",
} as const;

export type Tag = keyof typeof TAGS;

export const TAG_VALUES = Object.keys(TAGS) as Tag[];

export const TAG_OPTIONS = TAG_VALUES.map((tag) => ({
  value: tag,
  label: TAGS[tag],
}));
