import React from 'react'
import Retail from '../Component/Solutions/Retail/Retail'
export const metadata = {
  title: "Top Bulk WhatsApp Messaging & Business Solutions for Retail & E-commerce",
  description: "Get WhatsApp Business for Retail & E-commerce with top Bulk WhatsApp Messaging Services in Bangalore to enhance communication and marketing effortlessly.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Retail & E-commerce",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/retail/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & Business Solutions for Retail & E-commerce",
    description: "Get WhatsApp Business for Retail & E-commerce with top Bulk WhatsApp Messaging Services in Bangalore to enhance communication and marketing effortlessly.",
    url: "https://www.a2zsms.in/retail/",
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
    title: "Top Bulk WhatsApp Messaging & Business Solutions for Retail & E-commerce",
    description: "Get WhatsApp Business for Retail & E-commerce with top Bulk WhatsApp Messaging Services in Bangalore to enhance communication and marketing effortlessly.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/retail/",
  },
};

const page = () => {
  return (
    <div>
        <Retail/>
    </div>
  )
}

export default page