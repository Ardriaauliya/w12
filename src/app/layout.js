export const metadata = {
  title: 'Ardria Auliya',
  description: 'Pemrograman Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}