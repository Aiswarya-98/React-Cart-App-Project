import React from "react"
import CartItem from "./CartItem"
import { useGlobalContext } from "../../Hooks/Context"

function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Is currently Empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
          <button className="btn clear-btn" onClick={clearCart}>
            CLAER CART
          </button>
        </div>
      </footer>
    </section>
  )
}

export default CartContainer
