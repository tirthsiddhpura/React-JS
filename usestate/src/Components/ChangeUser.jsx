// import React, { useState } from 'react'

// const ChangeUser = () => {
//     const [Data, setData] = useState({username:"Test_user", role:"Tester", photo:"https://i.pinimg.com/736x/b5/eb/cb/b5ebcb3f2d0763ed5df606485406c97f.jpg"})

//     function Change(){
//        if (Data.username === "Test_user") {
//          let new_obj = { ...Data };
//         console.log(new_obj);
//         new_obj.username = "Developer_User";
//         new_obj.role = "Developer";
//         new_obj.photo = "https://i.pinimg.com/736x/b5/eb/cb/b5ebcb3f2d0763ed5df606485406c97f.jpg"
//         setData(new_obj);
//        } else {
//         let new_obj = { ...Data };
//         console.log(new_obj);
//         new_obj.username = "Test_User";
//         new_obj.role = "Tester";
//         new_obj.photo = "https://i.pinimg.com/736x/2e/d1/5e/2ed15eb23a2382dc4c2b836b84468c90.jpg"
//         setData(new_obj);
//        }
//     }


//   return (
//     <>
//     <div className="mx-auto mt-10 bg-[#222] rounded-xl w-full max-w-sm h-auto px-4 py-2 text-center text-2xl font-bold">
//         <img src={Data.photo} alt="" className="w-24 h-24 object-cover rounded-full my-4 mx-auto"/>
//         <h1 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-500 select-none mb-2">{Data.username}</h1>
//         <h3 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-500 select-none mb-2">{Data.role}</h3>

//         <button className="w-full bg-orange-500 px-4 py-2 my-2 rounded-xl font-bold hover:bg-orange-100 hover:text-orange-500 hover:scale-95 transition select-none" onClick={Change}>Switch User</button>
//     </div>
//     </>
//   )
// }

// export default ChangeUser
import { useState } from "react";

const ChangeUser = () => {
  const [Data, setData] = useState({
    username: "Jr. Developer Panda",
    role: "Developer",
    photo:
      "https://i.pinimg.com/736x/ee/df/0d/eedf0d7d5cb232a5b49a2bf58794cd0d.jpg",
    background: "bg-white",
  });

  function Change() {
    let o = { ...Data };

    o.username = "Sr. Panda Developer";
    o.photo =
      "https://i.pinimg.com/1200x/2b/81/f8/2b81f83e4d34fd91ed311bd51a7a20cb.jpg";
    o.background = "bg-green-200";
    setData(o);
  }

  return (
    <>
      <section className="flex items-center justify-center h-[100vh] select-none">
        <div
          className={`w-full h-auto max-w-sm p-4 rounded-4xl ${Data.background}`}
        >
          {/* photo */}
          <div className="relative flex justify-center">
            <img
              src={Data.photo}
              alt="photo"
              className="rounded-4xl object-cover"
            />
            <h1 className="text-xl font-bold  text-center absolute z-10 top-6 bg-white/30 rounded-full px-4 py-1">
              {Data.username}
            </h1>
          </div>

          {/* Content */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2 text-black">
              <img
                src={Data.photo}
                alt="photo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">@{Data.role} </p>
                <p className="text-gray-400">32m ago</p>
              </div>
            </div>
            <button
              className="bg-black py-2 px-6 rounded-xl active:bg-black/50 active:scale-95"
              onClick={Change}
            >
              Upgrade Developer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangeUser;
