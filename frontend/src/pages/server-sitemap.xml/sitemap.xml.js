// pages/sitemap.xml.js

// Import the necessary modules
import { createSitemap } from 'next-sitemap';
import { serverRuntimeConfig } from 'next/config';

// Define your getServerSideProps function to generate the sitemap
export async function getServerSideProps({ res }) {
  const sitemap = createSitemap({
    baseUrl: 'http://localhost:3000', // Replace with your website's base URL
    pages: [
      // List of pages to include in the sitemap
      { route: '/about-us' },
      { route: '/products' },
      { route: '/services' },
      // Add more pages as needed
    ],
    // Additional options go here
  });

  // Write the sitemap to the response
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap.toString());
  res.end();

  return {
    props: {},
  };
}

// Export an empty component for the route
export default function Sitemap() {
  return null;
}
