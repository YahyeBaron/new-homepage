export const metadata = {
  title: 'UpBit Academy | Become a Forward Deployed Engineer with IIT Certification',
  description: "UpBit Academy is the world's first structured platform focused on training Forward Deployed Engineers. Solve real business problems, build client-ready AI systems, and boost your chances of landing top UpBit roles.",
  icons: {
    icon: '/assets/images/upbit-academy-favicon.svg',
    apple: '/assets/images/upbit-academy-favicon.svg',
  },
  openGraph: {
    title: 'Forward Deployed Engineer (UpBit) Live Course | IIT Certification',
    description: 'Live Forward Deployed Engineering & Applied AI live course with UpBit Lab & 4 phase curriculum with mentorship.',
    url: 'https://upbit.academy',
    siteName: 'UpBit Academy',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/697c1ba40a3d9d8d84842e2b/69d4be42db4c08141c2d0c7c_FDE%20opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'UpBit Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward Deployed Engineer (UpBit) Live Course | IIT Certification',
    description: 'Live Forward Deployed Engineering & Applied AI live course with UpBit Lab & 4 phase curriculum with mentorship.',
    images: ['https://cdn.prod.website-files.com/697c1ba40a3d9d8d84842e2b/69d4be42db4c08141c2d0c7c_FDE%20opengraph.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-domain="upbit.academy" data-wf-page="697c1ba50a3d9d8d84842e95" data-wf-site="697c1ba40a3d9d8d84842e2b">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/css/webflow.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/assets/css/lenis.css" />
        <style dangerouslySetInnerHTML={{ __html: `.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
