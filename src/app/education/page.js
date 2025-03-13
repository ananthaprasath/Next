import React from 'react'
import Education from '../Component/Solutions/Education/Education'
export const metadata = {
  title: "Top Bulk WhatsApp Messaging & Business for Education in Bangalore",
  description: "Get WhatsApp Business for Education Sector and API solutions in Bangalore to enhance seamless communication, marketing, and bulk messaging services.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Education Sector",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/education/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & Business for Education in Bangalore",
    description: "Get WhatsApp Business for Education Sector and API solutions in Bangalore to enhance seamless communication, marketing, and bulk messaging services.",
    url: "https://www.a2zsms.in/education/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Bulk WhatsApp Messaging & Business for Education in Bangalore",
    description: "Get WhatsApp Business for Education Sector and API solutions in Bangalore to enhance seamless communication, marketing, and bulk messaging services.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/education/",
  },
};

const page = () => {
  return (
    <div>
        <Education/>
    </div>
  )
}

export default page