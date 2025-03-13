import React from 'react'
import Food from '../Component/Solutions/Food/Food'
export const metadata = {
  title: "Top WhatsApp Business for Food & Beverage in Bangalore",
  description: "Get WhatsApp Business for Food & Beverage in Bangalore with top bulk messaging services to boost communication and marketing for your business.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Food & Beverage",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/food/" }],
  openGraph: {
    title: "Top WhatsApp Business for Food & Beverage in Bangalore",
    description: "Get WhatsApp Business for Food & Beverage in Bangalore with top bulk messaging services to boost communication and marketing for your business.",
    url: "https://www.a2zsms.in/food/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top WhatsApp Business for Food & Beverage in Bangalore",
    description: "Get WhatsApp Business for Food & Beverage in Bangalore with top bulk messaging services to boost communication and marketing for your business.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/food/",
  },
};

const page = () => {
  return (
    <div>
        <Food/>
    </div>
  )
}

export default page