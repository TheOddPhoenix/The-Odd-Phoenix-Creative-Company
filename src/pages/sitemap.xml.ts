export const prerender=true;
export function GET(){const routes=['','about/','services/','contact/','lab/'];return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route=>`<url><loc>https://theoddphoenix.com/${route}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});}
