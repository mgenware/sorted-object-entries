export interface Options {
  desc?: boolean;
}

export default function sortedEntries<T>(
  o: { [s: string]: T } | ArrayLike<T>,
  opt?: Options,
): [string, T][] {
  // eslint-disable-next-line no-param-reassign
  opt = opt || {};

  // Generate a compare function based on `desc` to boost performance.
  let comparer: (a: string, b: string) => number;
  if (opt.desc) {
    comparer = (a, b) => a.localeCompare(b) * -1;
  } else {
    comparer = (a, b) => a.localeCompare(b);
  }
  return Object.entries(o).sort(([k1], [k2]) => comparer(k1, k2));
}
