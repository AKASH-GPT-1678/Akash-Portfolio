import React from 'react'
import Image from 'next/image';
import { Languages } from '../data/langauages';
const LanguagesDisplay = () => {
  return (
     <div>
            <div id="frontend" className="flex flex-row gap-1 flex-wrap  max-w-[440px] min-h-[200px] border-2 shadow-2xl border-purple-400 rounded-xl p-4 items-center justify-center">
                {
                    Languages.map((item, index) => {
                        return (
                            <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl" key={index}>
                                <Image src={item.icon} alt="react" width={100} height={100} className="h-6 w-6" />
                                <p className="text-lg font-bold">{item.name}</p>


                            </div>

                        )
                    })
                }


            </div>

        </div>
  )
}

export default LanguagesDisplay;
