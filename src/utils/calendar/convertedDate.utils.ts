import { Nullable } from "primereact/ts-helpers";

export const convertToArrayDate = (
  value: string | number | Date | null | (string | number | Date | null)[],
  format: string
): Nullable<Date | Date[] | (Date | null)[] | null> => {
  if (!value) return null;

  if (Array.isArray(value)) {
    return value
      .map((item) => parseSingleDate(item, format))
      .filter(Boolean) as Date[] | (Date | null)[];
  }

  return parseSingleDate(value, format) || null;
};

const parseSingleDate = (
  value: string | number | Date | null,
  format: string
): Date | null => {
  if (!value) return null;

  if (value instanceof Date) return value;
  if (typeof value === "number") return new Date(value);
  if (typeof value === "string") {
    const parsed = parseDateString(value, format);
    return parsed ? new Date(parsed) : null;
  }
  return null;
};

const parseDateString = (value: string, format: string): string | null => {
  try {
    const parts = extractDateParts(value, format);
    if (!parts.year || !parts.month || !parts.day) return null;

    let result = `${parts.year}/${parts.month}/${parts.day}`;
    if (parts.hours) result += ` ${parts.hours}`;
    if (parts.minutes) result += `:${parts.minutes}`;
    if (parts.seconds) result += `:${parts.seconds}`;

    return result;
  } catch {
    return null;
  }
};

const extractDateParts = (value: string, format: string) => {
  return {
    year: sliceAt(value, format, "yyyy", 4),
    month: sliceAt(value, format, "mm", 2),
    day: sliceAt(value, format, "dd", 2),
    hours: sliceAt(value, format, "HH", 2) || "00",
    minutes: sliceAt(value, format, "MM", 2) || "00",
    seconds: sliceAt(value, format, "SS", 2) || "00",
  };
};

const sliceAt = (
  value: string,
  format: string,
  token: string,
  length: number
) => {
  const index = format.indexOf(token);
  return index !== -1 ? value.slice(index, index + length) : null;
};

export const formatDateUTC = (
  date: Date | Date[] | (Date | null)[] | null | undefined,
  format: string
): string | string[] | null => {
  if (!date) return null;

  const formatSingleDate = (d: Date | null) => {
    if (!(d instanceof Date) || isNaN(d.getTime())) return null;

    const parts: { [key: string]: string } = {
      yyyy: d.getFullYear().toString(),
      mm: (d.getMonth() + 1).toString().padStart(2, "0"),
      dd: d.getDate().toString().padStart(2, "0"),
      HH: d.getHours().toString().padStart(2, "0"),
      MM: d.getMinutes().toString().padStart(2, "0"),
      SS: d.getSeconds().toString().padStart(2, "0"),
    };

    return ["yyyy", "mm", "dd", "HH", "MM", "SS"].reduce(
      (str, token) => str.replace(token, parts[token]),
      format
    );
  };

  if (Array.isArray(date)) {
    return date.map(formatSingleDate).filter(Boolean) as string[];
  }

  return formatSingleDate(date);
};
