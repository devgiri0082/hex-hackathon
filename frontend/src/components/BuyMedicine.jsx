/* eslint-disable react/prop-types */
import { BiSolidCartAlt } from "react-icons/bi";
import CartButton from "./CartButton";
import { atom, useAtom } from 'jotai'

export const cartAtom = atom([]);

function BuyMedicine({medicine, handleCartChange, product}) {
  const [cart, setCart] = useAtom(cartAtom)
  if(!medicine) {
    return (
      <div></div>
    )
  }
  return (
    <main className="w-full">
      <section className="flex gap-2 bg-slate-50 border-2 max-w-[1050px] m-auto">
        {/* <div className="m-auto"> */}
        <div className="p-4">
          <img src={medicine.imageURL} className="w-60" />
        </div>
        <div className="p-6 flex flex-col items-start justify-between">
          <div className="text-upper flex flex-col gap-1 border-b-myblue border-b-2 pb-2 mb-2">
            <div className="text-xl font-medium">{medicine.name}</div>
            <div>{medicine.dosage}</div>
          </div>
          <div className="text-lower flex flex-col gap-3 items-start ">
            <div className="flex gap-4">
              <span className="text-myblue">{medicine.price}</span>
            <span className="text-slate-500 line-through">{medicine.prevPrice}</span>
            </div>

            <div className="flex items-center gap-4">
              <span>Quantity</span>
              <CartButton
                quantity={product.quantity}
                handleCartChange={handleCartChange}
              />
            </div>
            <button onClick={() => Number(product.quantity) >= 0 && setCart([{...medicine, quantity: product. quantity}])} className="flex items-center gap-2 px-4 py-2 text-white rounded-md  bg-myblue">
              <BiSolidCartAlt />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BuyMedicine;
