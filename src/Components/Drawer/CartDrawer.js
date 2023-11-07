/* eslint-disable jsx-a11y/img-redundant-alt */
import { Drawer, Button, Group } from "@mantine/core";
import CurrencyContext from "../../Contexts/CurrencyContext";
import { useContext, useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../Contexts/CartContext";
import currencyConverter from "../../utils/CurrencyChanger";
export default function CartDrawer({ opened, close }) {
  //   const [opened, { open, close }] = useDisclosure(false);
  const [cartItems, setCartItems] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { cartRenderer, setCartRenderer } = useContext(CartContext);

  const [update, setUpdate] = useState({});

  const discardCartItem = (product) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const _cartItems = JSON.parse(cart);
      const idx = _cartItems.map((e) => e.product).indexOf(product);

      const _product = cartItems[idx];

      if (idx != -1) _cartItems.splice(idx, 1);

      localStorage.setItem("cart", JSON.stringify(_cartItems));
      setProductTotal((prev) => prev - _product.price * _product.amount);
      setCartItems(_cartItems);

      setCartRenderer({});
    }
  };
  const calculateTotal = async () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setProductTotal(total);
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    console.log("cart", cart);
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, [opened, cartRenderer]);

  useEffect(() => {
    if (cartItems && Array.isArray(cartItems)) {
      calculateTotal();
    }
  }, [cartItems]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="  Shopping Cart"
        zIndex={1000}
        withOverlay={true}
        position={"right"}
      >
        {/* Drawer content */}
        <div
        // class="offcanvas offcanvas-end"
        // tabindex="-1"
        >
          <div className="border-bottom">
            {productTotal > 250 * parseFloat(process.env.REACT_APP_FX_RATE) ? (
              <p className="text-16 fw-bold mt-4 ms-3">
                <span className="text-theme">Congratulations! </span> you’ve got
                free shipping!
              </p>
            ) : (
              <p className="text-16 fw-bold mt-4 ms-3">
                spend <span className="text-theme"> 250$ </span> to get free
                shipping
              </p>
            )}
          </div>
          <div>
            {cartItems.length !== 0 ? (
              <div class="offcanvas-body p-0">
                {cartItems &&
                  cartItems.map((cartItem, index) => (
                    <div key={index} className="w-100 text-start">
                      <CartItem
                        id={cartItem.product}
                        addOns={cartItem.addons}
                        quantity={cartItem.amount}
                        discardCartItem={discardCartItem}
                        setCartItems={setCartItems}
                        setProductTotal={setProductTotal}
                        price={cartItem.price}
                        setCartAdded={setCartAdded}
                        // setCartRenderer={setCartRenderer}
                        // update={update}
                        // setUpdate={setUpdate}
                      />
                    </div>
                  ))}
                <div className="mt-5">
                  <div className="d-flex justify-content-between fw-bold px-3">
                    <p>Grand Total :</p>
                    <p>
                      {currency == "USD" ? "$" : "৳"}
                      {currencyConverter(currency, productTotal)}
                    </p>
                  </div>
                  <p className="text-16 ps-3 text-black">
                    Taxes and shipping calculated at checkout
                  </p>

                  <p className="text-theme-gray border-top p-3 text-16">
                    While the contents of your cart are currently displayed in
                    USD, the checkout will use BDT at the latest exchange rate.
                  </p>

                  <div className="d-flex mx-3 gap-3">
                    <a href="/checkout" className="w-50 pb-3">
                      <button className="btn btn-chek w-100 text-light py-2 btn-shadow">
                        CHECK OUT
                      </button>
                    </a>
                    <a className="w-50 h-100 pb-3" href="/catagory">
                      <button className="w-100 h-100 btn btn-secondary rounded-10 py-2 btn-shadow">
                        ADD MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-2 fw-bold text-secondary">
                <img
                  src="./Image/emptycart.webp"
                  alt="this is an image "
                  className="w-75 mt-5 mb-3"
                />
                <h5>Cart is empty</h5>
              </div>
            )}
          </div>
          {/* <div class="offcanvas-body p-0">
            {cartItems &&
              cartItems.map((cartItem, index) => (
                <div key={index} className="w-100 text-start">
                  <CartItem
                    id={cartItem.product}
                    addOns={cartItem.addons}
                    quantity={cartItem.amount}
                    discardCartItem={discardCartItem}
                    setCartItems={setCartItems}
                    setProductTotal={setProductTotal}
                    price={cartItem.price}
                    setCartAdded={setCartAdded}
                    // setCartRenderer={setCartRenderer}
                    // update={update}
                    // setUpdate={setUpdate}
                  />
                </div>
              ))}
            <div className="mt-5">
              <div className="d-flex justify-content-between fw-bold px-3">
                <p>Grand Total :</p>
                <p>
                  {currency == "USD" ? "$" : "৳"}
                  {currencyConverter(currency, productTotal)}
                </p>
              </div>
              <p className="text-16 ps-3 text-black">
                Taxes and shipping calculated at checkout
              </p>

              <p className="text-theme-gray border-top p-3 text-16">
                While the contents of your cart are currently displayed in USD,
                the checkout will use BDT at the latest exchange rate.
              </p>

              <div className="d-flex mx-3 gap-3">
                <a href="/checkout" className="w-50 pb-3">
                  <button className="btn btn-chek w-100 text-light py-2 btn-shadow">
                    CHECK OUT
                  </button>
                </a>
                <a className="w-50 h-100 pb-3" href="/catagory">
                  <button className="w-100 h-100 btn btn-secondary rounded-10 py-2 btn-shadow">
                    ADD MORE
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </Drawer>
    </>
  );
}
