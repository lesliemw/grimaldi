import Image from "next/image";
import AddToCartButton from "../ui/AddToCartButton";
import HeartButton from "../ui/HeartButton";

function ProductDetails({ alt, src, name, description }) {
  return (
    <section className="text-gray-700 font-themeFont overflow-hidden bg-white">
      <>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt={alt}
              className="lg:w-1/2 w-full object-cover object-center"
              src={src}
              height={500}
              width={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-20">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2> */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
              </h1>

              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* <div className="flex">
                    <span className="mr-3"></span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div> */}
                <div className="flex  w-full justify-between items-center">
                  <div className="">
                    <span className="mr-3">Size</span>
                    <select
                      className="rounded border appearance-none border-gray-200 py-2 focus:outline-none  text-base pl-3 pr-10"
                      // value={size}
                    >
                      <option value="SM">SM</option>
                      <option value="MD">M</option>
                      <option value="LG">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div>
                    <span className="mr-2">Quantity</span>
                    <div className="relative inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md bg-gray-50">
                      <button className=" hover:text-gray-700">-</button>
                      <input
                        className="w-12 px-2 justify-center  text-center border-0 rounded-md    "
                        // value={qty}
                        // placeholder={qty}
                      />
                      <button className=" hover:text-gray-700">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €250
                  {/* € {price * qty} */}
                </span>
                <div className="flex gap-4">
                  <HeartButton />
                  <AddToCartButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default ProductDetails;
