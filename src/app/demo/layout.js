import Footer from "../sections/Footer";
import Header from "../sections/Header";

export default function ServicesLayout({ children }) {
  return <div className="min-h-screen bg-white">
    <Header />
    {children}
    <Footer />
    </div>;
}
