import Image from "next/image";

function CartItem({ src, alt, price, qty, name, size }) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={src}
          alt={alt}
          height={500}
          width={500}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">€ {price}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div>
            <p className="text-gray-500">Size {size}</p>
            <p className="text-gray-500">Qty {qty}</p>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-500 hover:text-indigo-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
