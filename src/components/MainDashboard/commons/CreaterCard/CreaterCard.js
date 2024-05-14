export default function CreaterCard({
  name = "Loreal Paris color",
  type = "Loreal Styling & Salon",
  img = "https://m.media-amazon.com/images/I/51MAaw-IrGL.jpg",
  category = "Food",
  section = "",
}) {
  return (
    <div className="max-w-sm bg-white relative group border transition-shadow drop-shadow-xl rounded-xl mb-10">
      <a
        href="#"
        className="relative block rounded-md  group-hover:opacity-70 transition-opacity duration-300"
      >
        <div className="relative overflow-hidden bg-white flex justify-center align-middle">
          {section === "" ? (
            <div
              style={{ width: 100, height: 100 }}
              class="flex-col justify-center"
            >
              <img alt="alt text." src={img} width={300} height={50} />
            </div>
          ) : (
            <div
              style={{ width: 180, height: 180 }}
              class="flex-col justify-center"
            >
              <img alt="alt text." src={img} width={300} height={50} />
            </div>
          )}

          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </a>
      <div className="p-3.5 bg-white rounded-b-xl">
        {section === "" ? (
          <div class="flex justify-between">
            <div className="text-black text-base font-medium">{name}</div>
            <div class="bg-blue-100 text-blue-800 text-xs pt-1 font-medium px-2.5  rounded-full ">
              {category}
            </div>
          </div>
        ) : (
          <div class="flex justify-between">
            <div className="text-black text-lg font-medium">{name}</div>
            <div class="bg-pink-100 text-pink-800 text-xs pt-1.5 font-medium px-2.5  rounded-full ">
              {category}
            </div>
          </div>
        )}
        <div className="text-gray-400 text-sm">{type}</div>
        {section === "" ? (
          <div class="flex mt-1">
            <div class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded  border-blue-400">
              Prize - Rs 500
            </div>
            <div class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded  border-green-400">
              Ads Type: ShoutOut
            </div>
          </div>
        ) : (
          <div class="flex mt-1">
            <div class=" bg-[#e5dbde] text-[#565555] text-xs font-medium me-2 px-2 py-0.5 rounded  border-blue-400">
              Prize - Rs 500
            </div>
            <div class="bg-yellow-200 text-yellow-800 text-xs font-medium me-2 px-2 py-0.5 rounded  border-yellow-400">
              Ads Type: ShoutOut
            </div>
          </div>
        )}
        {section === "" ? (
          <div className="text-gray-400 text-md mt-2 mr-2">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Deal
            </button>
          </div>
        ) : (
          <div className="text-gray-400 text-md mt-2 mr-2">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#ed6742] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
