# Connect theoddphoenix.com

Prepared October 31, 2026. Public DNS currently uses launch1.spaceship.net and launch2.spaceship.net; apex A answers are 34.216.117.25 and 54.149.79.189. No www CNAME was found. These records have NOT been changed.

## GitHub first

1. Publish the reviewed source to the repository and merge its implementation branch.
2. Open repository Settings → Pages. Set source to GitHub Actions.
3. In the GitHub account’s Pages settings, verify domain ownership using GitHub’s unique TXT record. Copy the exact generated host/value into Spaceship; do not guess a verification token.
4. Set repository Pages custom domain to `theoddphoenix.com`. GitHub Actions deployments do not require a CNAME file; the Pages setting establishes the domain binding.
5. Run the manual Pages workflow from main. SITE_BASE should be `/` for this domain.

## Spaceship

Open Spaceship → Advanced DNS Manager → theoddphoenix.com → DNS records → Custom records. Keep Spaceship’s existing nameservers. Replace only conflicting website records/parking entries for @ and www after reviewing them. Preserve email MX, SPF, DKIM, DMARC, and unrelated verification TXT records.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | theoddphoenix.github.io |

Use Automatic/default TTL. Remove conflicting @ AAAA records if present, or configure all four GitHub IPv6 addresses from the official guide. Do not add wildcard records.

## Verify and launch

Wait for GitHub’s DNS check and certificate provisioning, then enable Enforce HTTPS. Verify HTTPS on both the apex and www, the redirect to the apex, all five navigation routes, the sitemap and robots, and a real inquiry after connecting Formspree. DNS propagation can take up to 24 hours.

Add a Google Search Console Domain property using the exact verification TXT record Google supplies. Submit https://theoddphoenix.com/sitemap.xml after launch. The empty portfolio is intentionally noindex and excluded; include it once real work is added.

Sources: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site and https://www.spaceship.com/knowledgebase/dns-records-types/
