import Footer from "@components/ui/Footer";
import Header from "@components/ui/Header";
import "@styles/globals.css";

export const metadata = {
  title: "Grimaldi & Co.",
  description: "E-commerce website for high end goods",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
