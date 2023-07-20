/* eslint-disable react/no-unescaped-entities */
export default function AdminPage() {
  const handleSubmit = () => {

  };
  return (
    <>
      <main className="bg-primary-gradient bg-no-repeat bg-cover flex justify-center items-center min-h-[688px] ">
        <div className="flex items-center justify-center h-screen ">
          <div className="flex flex-col px-8 py-10 border border-gray-900 rounded-lg min-w-[450px] bg-cyan-50">
            <div className="mt-10 text-black">
              <h1 className="text-4xl font-bold">Admin Panel</h1>
              <p className="font-semibold">Medicine Information Upload!</p>
            </div>
            <form className="flex flex-col mt-10 space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Price"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <textarea
                type="text"
                placeholder="Description"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Dosage"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />
              <input
                type="text"
                placeholder="Possible Side Effect"
                className="px-3 py-3 placeholder-gray-500 border border-gray-700 rounded-lg bg-gray-50"
              />

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="images_input"
                type="file" multiple accept="iamge/png" 
              />

              <button
                className="py-3 font-semibold text-white border border-white rounded-lg bg-myblue"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
