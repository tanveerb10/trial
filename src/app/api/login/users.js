// ** Fake user data and data type
// =============== Fake Data ============================
import { PureAbility } from "@casl/ability"

export const users = [
  {
    id: 1,
    name: 'admin',
    password: 'admin',
    email: 'admin@vuexy.com',
    image: '/images/avatars/1.png',
    role: 'admin'
  },
  {
    id: 2,
    name: 'support',
    password: 'admin',
    email: 'support@vuexy.com',
    image: '/images/avatars/2.png',
    role: 'support'
  },
  {
    id: 3,
    name: 'manager',
    password: 'admin',
    email: 'manager@vuexy.com',
    image: '/images/avatars/3.png',
    role: 'manager'
  },
  {
    id: 4,
    name: 'catalog',
    password: 'admin',
    email: 'catalog@vuexy.com',
    image: '/images/avatars/4.png',
    role: 'catalog'
  },
  {
    id: 5,
    name: 'super-admin',
    password: 'admin',
    email: 'superadmin@vuexy.com',
    image: '/images/avatars/5.png',
    role: 'superadmin'
  },

]

// Define abilities based on user roles
const abilitiesJson = {
  admin: [{ action: 'manage', subject: 'all' }],
  support: [{ action: 'read', subject: 'all' }],
  manager: [{ action: 'read', subject: 'all' }],
  catalog: [{ action: 'read', subject: 'all' }],
  superadmin: [{ action: 'manage', subject: 'all' }]
};

export function defineAbilityFor(user) {
  const rules = abilitiesJson[user.role] || abilitiesJson.guest;

  // Create an Ability instance using the rules
  return new PureAbility(rules);
}
