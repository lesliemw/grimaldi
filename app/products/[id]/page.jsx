import ProductDetails from "@components/products/ProductDetails";

function ProductIdPage({ params: { productId } }) {
  return <ProductDetails id={productId} />;
}

export default ProductIdPage;
