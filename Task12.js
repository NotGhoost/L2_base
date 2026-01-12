function longest(arr, n) {
  return arr
    .map((str, index) => ({ str, index }))
    .sort((a, b) => {
      const lenDiff = b.str.length - a.str.length;
      return lenDiff !== 0 ? lenDiff : a.index - b.index;
    })[n - 1].str;
}
