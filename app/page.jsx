import HomeScreenCallouts from "@components/home/HomeScreenCallouts";
import PromoSection from "@components/home/PromoSection";
import ProductsMap from "@components/products/ProductsMap";

export const metadata = {
  title: "Grimaldi & Co. | Home",
};

function Home() {
  return (
    <>
      <PromoSection />
      <HomeScreenCallouts />
      <ProductsMap />
    </>
  );
}

export default Home;
