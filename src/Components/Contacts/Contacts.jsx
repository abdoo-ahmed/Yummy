import React from 'react'

const Contacts = () => {

  return <>
    
    <div className="flex items-center justify-center" style={{minHeight:"90vh"}}>
        <form
            className="grid grid-cols-1 sm:grid-cols-2 mr-2 gap-4 w-[100%] max-w-5xl"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                placeholder="Enter Your Name"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />
            <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />
            <input
                type="text"
                placeholder="Enter Your Phone"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />
            <input
                type="number"
                placeholder="Enter Your Age"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />
            <input
                type="password"
                placeholder="Enter Your Password"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />
            <input
                type="password"
                placeholder="Repassword"
                className="p-3 rounded-md outline-none text-gray-700 bg-white"
            />

            <div className="col-span-1 sm:col-span-2 flex justify-center mt-2">
                <button
                    type="submit"
                    className="border border-red-800 text-red-800 px-6 py-1 rounded-md hover:bg-red-800 hover:text-white transition"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>

  
  </>
}

export default Contacts