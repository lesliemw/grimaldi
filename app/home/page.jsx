import fakeData from "@components/fakeStore";
import HomeScreenCallouts from "@components/home/HomeScreenCallouts";
import PromoSection from "@components/home/PromoSection";
import ProductCard from "@components/products/ProductCard";
import ProductsMap from "@components/products/ProductsMap";

function HomePage() {
  return (
    <>
      <PromoSection />
      <HomeScreenCallouts />
      <ProductsMap />
    </>
  );
}

export default HomePage;
