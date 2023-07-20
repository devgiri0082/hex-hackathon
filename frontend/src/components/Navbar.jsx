import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserButton, useAuth } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "./BuyMedicine";

const Navbar = () => {
  const navigate = useNavigate();
  const [showcart, setShowcart] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();
  return (
    <nav className="flex items-center justify-center w-screen px-4 py-4 shadow-sm text-slate-500 ">
      <div className="flex justify-between max-w-[1050px] w-full cursor-pointer items-center">
        <Link to={"/"}>
          <figure>
            <img src={logo} />
          </figure>
        </Link>
        <ul className="flex gap-4 items-center sm:gap-6">
        {isSignedIn && <div className="relative">
             <li
              onClick={() => setShowcart(!showcart)}
              className="border-b-2 border-transparent hover:border-myblue px-1 cursor-pointer"
            >
              Cart
            </li>
            {showcart && <Cart />}
          </div>}
          {isSignedIn && <Link to="/medicines">
            <li className="px-1 border-b-2 border-transparent cursor-pointer hover:border-myblue">
              Medicines
            </li>
          </Link>}

          {!isSignedIn && (
            <Link to="/sign-in/*">
              <li className="px-3 py-1 text-white rounded-md cursor-pointer bg-myblue hover:opacity-70">
                Sign In
              </li>
            </Link>
          )}
          {isSignedIn && <UserButton />}
        </ul>
      </div>
    </nav>
  );
};

const Cart = () => {
  const [cartItem, setCartItem] = useAtom(cartAtom);
  const prescriptionRef = useRef();
  const [isLoading, setIsLoading] = useState();
  console.log({ cartItem });
  return (
    <>
      <section className="absolute bg-white right-0 shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartItem.map((item) => {
                  return (
                    <li key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.imageURL}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {item.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">

                          <div>
                            <dt className="inline">Price:</dt>
                            <dd className="inline">{item.price}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <button className="text-gray-600 transition hover:text-red-600">
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>RS. {cartItem.reduce((acc, val) => acc + Number(val.price.split(" ")[1]), 0)}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-max">
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        <span className="text-red-500">*</span> Upload
                        Prescription:
                      </label>
                      <input
                        ref={prescriptionRef}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        type="file"
                        multiple
                        accept="image/png, image/jpeg, image/jpg"
                        name="vatimageurl"
                      />
                    </div>
                    <div className="" onClick={() => {
                      setIsLoading(true);
                      if(prescriptionRef.current.files.length <= 0) {
                        alert("Prescription is mandatory")
                        return;
                      }
                      setTimeout(() => {
                        alert("successfully completed the order.")
                        setIsLoading(false);
                      }, 700)
                      setCartItem([]);
                    }}>
                      <a
                        href="#"
                        className="block rounded bg-myblue px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Confirm Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
