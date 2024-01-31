import Footer from "@components/ui/Footer";
import Header from "@components/ui/Header";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000, //3seconds
            },
            error: {
              duration: 5000, //5seconds
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "",
              color: "",
            },
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
