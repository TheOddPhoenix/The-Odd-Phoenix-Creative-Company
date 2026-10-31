export const prerender=true;
export function GET(){const preview=import.meta.env.PUBLIC_SITE_PREVIEW==='true';return new Response(preview?'User-agent: *\nDisallow: /\n':'User-agent: *\nAllow: /\nSitemap: https://theoddphoenix.com/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});}
