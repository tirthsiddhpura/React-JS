import React, { useEffect, useState } from "react";
import { Bookmark, Plus, ArrowDown } from "lucide-react";
import axios from "axios";
const Gallery = () => {
  const [img, setImg] = useState([]);
// api fetch
  useEffect(() => {
    try {
      const FetchImg = async () => {
        let response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=30",
        );
        console.log(response);
        setImg(response.data);
      };
      FetchImg();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <section>
        {/* Fetch image from Api  */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {img.map((data) => {
            return (
              <div className="relative mb-4 break-inside-avoid shadow group" key={data.id}>
                {/* image  */}
                <img
                  src={data.download_url}
                  alt="image"
                  className="object-cover w-full "
                />

                {/* overlay div  */}
                <div className="absolute top-0 inset-0 bg-black/50 flex flex-col justify-between  p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* top icon  */}
                  <div className="flex justify-end gap-2 ">
                    <div className="bg-white p-2 rounded-md ">
                      <Bookmark />
                    </div>
                    <div className="bg-white p-2 rounded-md ">
                      <Plus />
                    </div>
                  </div>
                  {/* bottom icon  */}
                  <div className="flex items-center justify-between ">
                    <h1 className="text-white font-bold">{data.author}</h1>
                    <div className="bg-white p-2 rounded-md ">
                      <ArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
