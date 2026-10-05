import React from 'react'
import CartHeader from 'src/components/CartHeader/CartHeader'
import Footer from 'src/components/Footer/Footer'

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}

export default CartLayout