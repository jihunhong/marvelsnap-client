const useDeckSeries = (items: any = []) => {
  const series = new Map();
  for (const item of items) {
    const exist = series.get(item.grade);
    series.set(item.grade, (exist || 0) + 1);
  }
  return [Array.from(series).sort((a, b) => b[0] - a[0])];
};

export default useDeckSeries;
