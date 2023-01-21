import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import '../src/styles/globals.css';

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
