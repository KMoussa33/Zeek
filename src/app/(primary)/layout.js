import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto px-4 pt-8 pb-16 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
      <div className="flex-grow">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
