import type { QueryConditions } from "../types/query-params";

export function buildQueryParams<T extends Record<string, any>>(
  conditions: QueryConditions<T>
): URLSearchParams {
  const searchParams = new URLSearchParams();

  for (const [field, value] of Object.entries(conditions)) {
    if (value === undefined || value === null) continue;

    if (typeof value === 'object' && !Array.isArray(value)) {
      // Вариант 1: Передан объект с операторами, например { gt: 100 }
      for (const [operator, opValue] of Object.entries(value)) {
        if (opValue !== undefined && opValue !== null) {
          
          // Обрабатываем массивы для оператора 'in': [1, 2, 3] -> "1,2,3"
          const formattedValue = Array.isArray(opValue) ? opValue.join(',') : String(opValue);
          
          searchParams.append(`${field}:${operator}`, formattedValue);
        }
      }
    } else {
      // Вариант 2: Значение передано напрямую (no operator -> eq)
      // Если бэкенд строго требует ":eq", пишем `${field}:eq`
      // Если бэкенд принимает просто без двоеточия, пишем `${field}`
      const formattedValue = Array.isArray(value) ? value.join(',') : String(value);
      
      searchParams.append(`${field}`, formattedValue);
    }
  }

  return searchParams;
}
