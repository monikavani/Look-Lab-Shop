const Navbar = ({cartCount}) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      {/* <h1 className="text-xl font-bold">E-Shop</h1> */}
      <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-5 before:bg-indigo-500">
              <span className="relative text-white p-2 font-bold">LookLab</span>
            </span>
      <div className="flex space-x-4">
        <button className="text-sm font-medium">Cart</button>
      </div>
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
      )}
    </nav>
  )
}

export default Navbar;