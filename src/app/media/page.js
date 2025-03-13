import React from 'react'
import Media from '../Component/Solutions/Media/Media'
export const metadata = {
  title: "Top WhatsApp Business for Media & Entertainment in Bangalore",
  description: "Get WhatsApp API solutions for businesses in Bangalore with top Bulk WhatsApp Messaging Services for media & entertainment, marketing, and communication.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Media & Entertainment",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/media/" }],
  openGraph: {
    title: "Top WhatsApp Business for Media & Entertainment in Bangalore",
    description: "Get WhatsApp API solutions for businesses in Bangalore with top Bulk WhatsApp Messaging Services for media & entertainment, marketing, and communication.",
    url: "https://www.a2zsms.in/media/",
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
    title: "Top WhatsApp Business for Media & Entertainment in Bangalore",
    description: "Get WhatsApp API solutions for businesses in Bangalore with top Bulk WhatsApp Messaging Services for media & entertainment, marketing, and communication.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/media/",
  },
};

const page = () => {
  return (
    <div>
        <Media/>
    </div>
  )
}

export default page