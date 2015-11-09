let setBrowserPolicies = () => {
  // Typekit
  BrowserPolicy.content.allowOriginForAll('use.typekit.net');
  BrowserPolicy.content.allowOriginForAll('p.typekit.net');
  BrowserPolicy.content.allowFontDataUrl('use.typekit.net');
  BrowserPolicy.content.allowFontDataUrl('p.typekit.net');

  // CDNs
  BrowserPolicy.content.allowOriginForAll('maxcdn.bootstrapcdn.com');
  BrowserPolicy.content.allowOriginForAll('*.cloudflare.com');

  // Stripe
  BrowserPolicy.content.allowOriginForAll('*.stripe.com');
  BrowserPolicy.framing.restrictToOrigin('checkout.stripe.com');

  // Mapbox
  BrowserPolicy.content.allowOriginForAll('*.mapbox.com');

  // Amazon S3
  BrowserPolicy.content.allowOriginForAll('*.s3-us-west-1.amazonaws.com');

  // Image Placeholder Services
  BrowserPolicy.content.allowOriginForAll('*.loremflickr.com');
};

Modules.server.setBrowserPolicies = setBrowserPolicies;
