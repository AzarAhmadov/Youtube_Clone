import Header from '@/common/Header'
import '../css/globals.scss'
import Category from '@/components/Category'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>YouTube</title>
        <link rel="icon" href="page_logo_jpeg"></link>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
