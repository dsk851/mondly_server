export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    logo: './assets/logo.png',
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  head: {
    favicon: './assets/favicon.ico'
  },
  theme: {
    colors: {
      primary100: '#f0f8ff',
      primary500: '#0066cc',
      primary600: '#004499'
    }},
});
