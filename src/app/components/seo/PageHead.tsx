import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, type PageSeoConfig } from '../../../../app/seo'

export function PageHead({ config }: { config: PageSeoConfig }) {
  const canonical = absoluteUrl(config.path)
  const image = config.image ?? DEFAULT_OG_IMAGE
  const keywords = config.keywords?.join(', ')

  return (
    <>
      <title>{`${config.title} | ${SITE_NAME}`}</title>
      <meta name="description" content={config.description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {config.noindex ? <meta name="robots" content="noindex,follow" /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={`${config.title} | ${SITE_NAME}`} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteUrl(image)} />
      <meta property="og:image:alt" content={config.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${config.title} | ${SITE_NAME}`} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={absoluteUrl(image)} />
    </>
  )
}
