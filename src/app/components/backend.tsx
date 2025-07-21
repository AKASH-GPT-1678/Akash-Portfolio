import React from 'react'
import Image from 'next/image';
import { Backend } from '../data/backend';
const BackendDisplay = () => {
    return (
        <div>
            <div id="frontend" className="flex flex-row gap-1 flex-wrap  max-w-[440px] min-h-[200px] border-2 border-white p-4 items-center justify-center">
                {
                    Backend.map((item, index) => {
                        return (
                            <div className="flex flex-row gap-2 items-center justify-center p-2 border-2 border-amber-50 px-3 rounded-2xl bg-white text-black" key={index}>
                                <Image src={item.icon} alt="react" width={100} height={100} className="h-6 w-6" />
                                <p className=" font-bold">{item.name}</p>


                            </div>

                        )
                    })
                }


            </div>

        </div>
    )
};

export default BackendDisplay
