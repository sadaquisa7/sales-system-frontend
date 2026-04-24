export const ConvertParams = (
  params: Record<string, unknown> = {} // Default to empty object if undefined
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      value == null || typeof value === "object"
        ? JSON.stringify(value)
        : String(value),
    ])
  );
