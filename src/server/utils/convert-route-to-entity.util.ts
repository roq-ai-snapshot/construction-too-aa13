const mapping: Record<string, string> = {
  admins: 'admin',
  companies: 'company',
  reservations: 'reservation',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
