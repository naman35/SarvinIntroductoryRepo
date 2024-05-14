import {
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
export default function CreaterCard({
  name = "Naman Agarwal",
  location = "Bareilly,India",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  category = "Food",
}) {
  return (
    <div className="max-w-sm bg-white relative group border transition-shadow drop-shadow-xl rounded-xl mb-10">
      <a
        href="#"
        className="relative block  group-hover:opacity-70 transition-opacity duration-300"
      >
        <div className="relative overflow-hidden bg-white flex justify-center align-middle">
          <div
            style={{ width: 100, height: 100 }}
            class="flex-col justify-center rounded-full mt-2"
          >
            <img
              alt="alt text."
              src={img}
              class="w-30 h-30 mb-3 rounded-full "
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </a>
      <div className="p-3.5 bg-white">
        <div className="flex justify-between text-black text-base font-semibold">
          <div>{name} </div>
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              {category}
            </div>
          </div>
        </div>
        <div className="flex mb-1 gap-1 align-middle text-gray-700 text-xs">
          <FaMapMarkerAlt class="pt-1" />
          {location}
        </div>
        <div class="flex gap-2">
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2 bg-white rounded-full text-pink-700 bg-pink-100 border border-pink-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Followers : 2098
            </div>
          </div>

          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-purple-700 bg-purple-100 border border-purple-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Deal Cracked : 13
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-orange-700 bg-orange-100 border border-orange-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              ER : 20%
            </div>
          </div>
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-green-700 bg-green-100 border border-green-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Audience Avg : 1023/Post
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="flex w-full mt-4 justify-center rounded-md bg-[#b74a42] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Hire Me!
        </button>
      </div>
    </div>
  );
}
