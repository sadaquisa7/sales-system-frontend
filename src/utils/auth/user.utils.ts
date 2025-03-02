export const generateUsername = (firstName: string, lastName: string) => {
  const normalize = (name: string) => name?.trim().toLowerCase() || "";

  const first = normalize(firstName);
  const last = normalize(lastName).split(" ")[0] || "";

  if (!first && !last) return { username: "", abbreviation: "" };

  return {
    username: [first, last].filter(Boolean).join(" "),
    abbreviation: `${first.charAt(0)}${last.charAt(0)}`.toUpperCase(),
  };
};
