export const colors = {
  ink:          '#111827',
  indigo:       '#6366f1',
  indigoLight:  '#818cf8',
  mist:         '#9ca3af',
  smoke:        '#f3f4f6',
  white:        '#ffffff',
  page:         '#fafafa',
} as const;

export const fonts = {
  sans: "'DM Sans', sans-serif",
  mono: "'DM Mono', monospace",
} as const;

export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  6:  24,
  8:  32,
  12: 48,
  16: 64,
} as const;

export type Color = keyof typeof colors;
export type SpacingKey = keyof typeof spacing;
