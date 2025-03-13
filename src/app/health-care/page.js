import React from 'react'
import HealthCare from '../Component/Solutions/HealthCare/HealthCare'

export const metadata = {
  title: "WhatsApp for Healthcare: A Complete Guide to Messaging Services",
  description: "Discover WhatsApp for Healthcare: A Complete Guide to bulk messaging, API solutions, and marketing for businesses in Bangalore.",
  keywords: "WhatsApp for Healthcare: A Complete Guide, Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/health-care/" }],
  openGraph: {
    title: "WhatsApp for Healthcare: A Complete Guide to Messaging Services",
    description: "Discover WhatsApp for Healthcare: A Complete Guide to bulk messaging, API solutions, and marketing for businesses in Bangalore.",
    url: "https://www.a2zsms.in/health-care/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS WhatsApp for Healthcare Guide",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp for Healthcare: A Complete Guide to Messaging Services",
    description: "Discover WhatsApp for Healthcare: A Complete Guide to bulk messaging, API solutions, and marketing for businesses in Bangalore.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/health-care/",
  },
};

const page = () => {
  return (
    <div><HealthCare/></div>
  )
}

export default page