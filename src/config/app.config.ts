interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View available construction tools.',
    'Reserve a construction tool for rent.',
    'Cancel reservation.',
    'View reservation status.',
  ],
  ownerAbilities: ['Manage Company', 'Invite Admins', 'Deactivate Admins'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/1866d32f-9a3f-4d29-887a-682a628e7b9e',
};
