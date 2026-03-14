import {MoveUpRight} from "lucide-react";

import React from 'react'

const Card = ({data}) => {

    return (
        <>
            <div className="card w-full h-auto max-w-md bg-green-950 rounded-[10%] p-2 text-white shadow-2xl m-10" >
                <div className="bg-green-800 pb-3 text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
                        <img src={data.photo} alt="" className="w-full object-cover rounded-[10%]"/>
                        <span className="py-1">Free Delivery until 30/03/2026</span>
                </div>

                <div className="content px-6 py-2 flex justify-between items-center">
                    <div className="details ">
                        <h2 className="text-green-50 text-2xl font-bold">{data.juice_name}</h2>
                        <div className="more pt-4 flex justify-between gap-2 items-center">
                            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">{data.ingredients[0]}</span>
                            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">{data.ingredients[1]}</span>
                            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">{data.ingredients[2]}</span>
                        </div>
                    </div>

                    <div className="price border-l-2 border-green-400/20 pl-6">
                        <h2 className="text-4xl font-bold">{data.price} $</h2>
                        <p className="flex gap-1 items-center text-[14px]">Order Now <span><MoveUpRight className="w-3.5 h-3.5 stroke-3" />
                        </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
