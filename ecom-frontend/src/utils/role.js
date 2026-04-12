export function getEffectiveRole(user) {
  const roles = user?.roles || [];
  if (roles.includes("ROLE_ADMIN")) return "ADMIN";
  if (roles.includes("ROLE_SELLER")) return "SELLER";
  return roles.includes("ROLE_USER") ? "USER" : null;
}

export function isRole(user, role) {
  return getEffectiveRole(user) === role;
}

