import { useMemo } from "react";

export function useSearch(items, query) {
  const normalized = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalized) return items;
    return items.filter((item) => {
      const text = `${item.title} ${item.author} ${item.category}`.toLowerCase();
      return text.includes(normalized);
    });
  }, [items, normalized]);

  return results;
}
