// import DashBoard from "./DashBoard"


const App = () => {
  return (
    <div>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg w-80">
    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
    <input
      type="text"
      placeholder="Username"
      className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      Login
    </button>
  </div>
</div>

{/* <DashBoard/> */}

    </div>
  )
}

export default App
