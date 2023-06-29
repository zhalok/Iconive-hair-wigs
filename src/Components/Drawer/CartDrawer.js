import { useDisclosure } from "@mantine/hooks";
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
  const { setCartRenderer } = useContext(CartContext);
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
      // setCartAdded
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
    // console.log(cart);
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

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
        title="Cart"
        zIndex={1000}
        withOverlay={true}
        position={"right"}
      >
        {/* Drawer content */}
        <div
        // class="offcanvas offcanvas-end"
        // tabindex="-1"
        >
          <div class="offcanvas-body">
            {cartItems &&
              cartItems.map((cartItem, index) => (
                <div
                  key={index}
                  className="w-100 text-start p-3 border-bottom border-1"
                >
                  <CartItem
                    id={cartItem.product}
                    addOns={cartItem.addons}
                    quantity={cartItem.amount}
                    discardCartItem={discardCartItem}
                    setCartItems={setCartItems}
                    setProductTotal={setProductTotal}
                    price={cartItem.price}
                    setCartAdded={setCartAdded}
                    setCartRenderer={setCartRenderer}
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
              <p className="text-14 ps-3">
                Taxes and shipping calculated at checkout
              </p>

              <div className="d-flex px-3 gap-3">
                <a href="/checkout" className="w-50">
                  <button className="btn btn-chek w-100 text-light py-2">
                    CHECK OUT
                  </button>
                </a>
                <a className="w-50 h-100" href="/catagory">
                  <button className="w-100 h-100 btn btn-secondary rounded-10 py-2">
                    ADD MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
