import React from 'react'
import RealEstate from '../Component/Solutions/RealEstate/RealEstate'

export const metadata = {
  title: 'WhatsApp Business API for real estate digital marketing',
  description: "Get WhatsApp Business API for real estate digital marketing in Bangalore. Enhance seamless communication & marketing with Bulk WhatsApp Messaging Services.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business API for real estate digital marketing",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/realestate/" }],
  openGraph: {
    title: 'WhatsApp Business API for real estate digital marketing',
    description: "Get WhatsApp Business API for real estate digital marketing in Bangalore. Enhance seamless communication & marketing with Bulk WhatsApp Messaging Services.",
    url: "https://www.a2zsms.in/realestate/",
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
    title: 'WhatsApp Business API for real estate digital marketing',
    description: "Get WhatsApp Business API for real estate digital marketing in Bangalore. Enhance seamless communication & marketing with Bulk WhatsApp Messaging Services.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/realestate/",
  },
};


const page = () => {
  return (
    <div>
    <RealEstate/>
    </div>
  )
}

export default page