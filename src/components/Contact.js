// const Contact = () => {
//     return (
//         <div>
//             <h1 className="font-bold text-3xl p-4 m-4">Contact is </h1>

//             <input type="text" className="border" placeholder="name" />
//             <input type="text" className="border" placeholder="" />
//             <button>Submit </button>
//         </div>
//     )
// }

// export default Contact;

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="text"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button className="bg-pink-500 text-white p-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">
            Submit
          </button>

        </div>
      </div>

    </div>
  );
};

export default Contact;