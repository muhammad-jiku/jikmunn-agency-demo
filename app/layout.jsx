//  internal imports
import '../src/styles/globals.css';
import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
