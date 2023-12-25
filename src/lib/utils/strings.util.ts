export function stringsToText(arr?: string[]) {
  if (!arr) return;

  return arr.join(", ");
}
