import { defineConfig } from 'astro/config';
export default defineConfig({site:'https://theoddphoenix.com',base:process.env.SITE_BASE || '/',output:'static'});
