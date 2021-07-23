import { withIronSession } from 'next-iron-session';

const { SESSION_COOKIE_PASSWORD, NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, NODE_ENV } = process.env;

export default function withSession(handler) {
  return withIronSession(handler, {
    password: SESSION_COOKIE_PASSWORD,
    cookieName: `next_iron_session::${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`,
    cookieOptions: {
      secure: NODE_ENV === 'production',
    },
  });
}
