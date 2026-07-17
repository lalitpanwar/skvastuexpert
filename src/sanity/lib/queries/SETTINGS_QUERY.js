export const SETTINGS_QUERY = `*[_type=="settings"][0]{
  siteName,
  siteUrl,
  tagline,
  logo,
  favicon,

  defaultTitle,
  defaultDescription,
  defaultKeywords,
  defaultOgImage,

  twitterHandle,

  email,
  phone,
  address,

  facebook,
  instagram,
  linkedin,
  youtube,

  googleVerification,
  googleAnalyticsId,
  googleTagManagerId
}`;