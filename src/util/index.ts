export const snakeToCamel = (string: string) =>
  string
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join('');

export const parsePxToNumber = (value: string) =>
  value.endsWith('px') ? parseInt(value.slice(0, -2), 10) : 0;
