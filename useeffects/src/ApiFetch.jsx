import React, { useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);

  // Method 1
  const Method1 = () => {
    console.log(" Method1 Clicked");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(" Method1 Response:", res);
        return res.json();
      })
      .then((data) => {
        console.log(" Method1 Data:", data);
        setData1(data);
      })
      .catch((err) => console.error(" Method1 Error:", err));
  };

  // Method 2
  const Method2 = async () => {
    console.log(" Method2 Clicked");

    try {
      const res = await fetch("https://dummyjson.com/products?limit=10");
      console.log(" Method2 Response:", res);

      const data = await res.json();
      console.log(" Method2 Data:", data);

      setData2(data.products);
    } catch (err) {
      console.error(" Method2 Error:", err);
    }
  };

  // Method 3 (Recipes)
  const Method3 = async () => {
    console.log(" Method3 Clicked");

    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      console.log(" Method3 Response:", res);

      console.log(" Method3 Data:", res.data);

      setData3(res.data.recipes);
    } catch (err) {
      console.error(" Method3 Error:", err);
    }
  };

  return (
    <>
      {/* Method 1 */}
      <section className="p-6 bg-green-200 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">
          Method 1: fetch
        </h1>

        <div className="flex flex-wrap gap-4">
          {Data1.map((user) => (
            <div key={user.id} className="bg-black text-white p-3 w-64 rounded">
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              <h1>{user.username}</h1>
              </div>
          ))}
        </div>

        <button
          onClick={Method1}
          className="mt-4 bg-green-900 text-white px-4 py-2 rounded"
        >
          Get Data 1
        </button>
      </section>

      {/* Method 2 */}
      <section className="p-6 bg-blue-200 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">
          Method 2: Fetch Products
        </h1>

        <div className="flex flex-wrap gap-4">
          {Data2.map((item) => (
            <div key={item.id} className="bg-black text-white p-3 w-64 rounded">
              <img src={item.thumbnail} alt="" className="w-full h-40" />
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>

        <button
          onClick={Method2}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded"
        >
          Get Data 2
        </button>
      </section>

      {/* Method 3 */}
      <section className="p-6 bg-orange-200 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">
          Method 3: Axios Recipes
        </h1>

        <div className="flex flex-wrap gap-4">
          {Data3.map((item) => (
            <div key={item.id} className="bg-black text-white p-3 w-64 rounded">
              <img src={item.image} alt="" className="w-full h-40" />
              <h1>{item.name}</h1>
              <h1> {item.rating}</h1>
            </div>
          ))}
        </div>

        <button
          onClick={Method3}
          className="mt-4 bg-orange-700 text-white px-4 py-2 rounded"
        >
          Get Recipes
        </button>
      </section>
    </>
  );
};

export default ApiFetch;