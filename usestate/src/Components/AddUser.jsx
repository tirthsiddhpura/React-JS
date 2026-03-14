
import React, { useState } from 'react'

const AddUser = () => {

const [Data, setData] = useState([
{
name: "Aarav Patel",
email: "aarav@gmail.com",
color: "bg-red-400"
},
{
name: "Riya Sharma",
email: "riya@gmail.com",
color: "bg-purple-400"
},
{
name: "Vivan Mehta",
email: "vivan@gmail.com",
color: "bg-yellow-400"
}
])

function Add(){

// check if user already exists
if(Data.some(user => user.name === "aana")){
return alert("You can use this button only one time")
}

let arr = [...Data]

arr.push({
name:"aana",
email:"aana@gmail.com",
color:"bg-red-500"
})

setData(arr)
}

function AddTwo(){

// check if already added
if(Data.some(user => user.name === "dhruv")){
return alert("You can use this button only one time")
}

let arr = [...Data]

arr.push(
{name:"om", email:"om@gmail.com", color:"bg-blue-400"},
{name:"dhruv", email:"dhruv@gmail.com", color:"bg-green-400"}
)

setData(arr)
}

return (
<>
<section className='flex flex-wrap justify-center items-center gap-6 my-10'>

{Data.map((user,index)=> {
return (
<div
key={index}
className={`w-full h-auto max-w-sm rounded-xl p-4 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}
>

<h1 className='bg-black text-white w-full rounded-xl px-4 py-2'>
{user.name}
</h1>

<h2 className='bg-black text-white w-full rounded-xl px-4 py-2'>
{user.email}
</h2>

</div>
)
})}

</section>

<div className='flex justify-center items-center'>
<button
className='bg-orange-600 px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all'
onClick={Add}
>
Add One User
</button>
</div>

<div className='flex justify-center items-center mt-5'>
<button
className='bg-purple-600 px-6 py-4 active:bg-purple-100 active:scale-95 active:text-purple-600 text-2xl font-bold rounded-xl transition-all'
onClick={AddTwo}
>
Add Two Users
</button>
</div>

</>
)
}

export default AddUser

