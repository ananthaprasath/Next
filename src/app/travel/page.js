import React from 'react'
import Travel from '../Component/Solutions/Travel/Travel'

export const metadata = {
  title: "Top Bulk WhatsApp Messaging & Business for Travel in Bangalore",
  description: "Get WhatsApp Business for Travel and Tourism with top Bulk WhatsApp Messaging Services in Bangalore to enhance seamless communication and marketing.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Travel and Tourism",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/travel/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & Business for Travel in Bangalore",
    description: "Get WhatsApp Business for Travel and Tourism with top Bulk WhatsApp Messaging Services in Bangalore to enhance seamless communication and marketing.",
    url: "https://www.a2zsms.in/travel/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp Messaging Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Bulk WhatsApp Messaging & Business for Travel in Bangalore",
    description: "Get WhatsApp Business for Travel and Tourism with top Bulk WhatsApp Messaging Services in Bangalore to enhance seamless communication and marketing.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/travel/",
  },
};

const page = () => {
  return (
    <div>
        <Travel/>
    </div>
  )
}

export default page