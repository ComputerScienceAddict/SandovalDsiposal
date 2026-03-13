/**
 * Business contact and config constants
 * UPDATE: Replace all values with actual business details
 */

export const BUSINESS = {
  /* Business name - used in navbar, footer, SEO */
  name: 'Sandoval Commercial Disposal',

  /* Primary phone - used for Call Now, Get a Quote, sticky CTA */
  phone: '909-545-9339',

  /* Email for quote requests and contact */
  email: 'info@sandovalcommercial.com',

  /* Service area for footer and Service Area section */
  serviceArea: 'Southern California – homeowners, contractors & property managers',

  /* Logo path in /public */
  logoPath: '/sandoval-logo-new.png',

  /* Social links */
  instagram: 'https://www.instagram.com/sandovalcommercialdisposal',
  tiktok: 'https://www.tiktok.com/@sandoval.commeric',
  yelp: 'https://www.yelp.com/biz/sandoval-commercial-disposal-diamond-bar#reviews',

  /* Yelp business info */
  yelpRating: 5.0,
  yelpReviewCount: 9,
  yelpWriteReview: 'https://www.yelp.com/writeareview/biz/sandoval-commercial-disposal-diamond-bar',
  hours: '6:00 AM - 6:00 PM',
  categories: ['Junk Removal & Hauling', 'Demolition Services', 'Movers'],
} as const;
