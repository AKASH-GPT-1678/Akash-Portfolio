import React from 'react';
import { Devops } from '../data/devops';
import Image from 'next/image';

const DevopsDisplay = () => {
  return (
     
           <div>
                <div id="frontend" className="flex flex-row gap-1 flex-wrap  max-w-[440px] min-h-[200px] border-2 border-white p-4 items-center justify-center">
                    {
                        Devops.map((item, index) => {
                            return (
                                <div className="flex flex-row gap-2 items-center justify-center text-gray-300 p-2 border-2 border-amber-50 px-3 rounded-2xl bg-white" key={index}>
                                    <Image src={item.icon} alt="react" width={100} height={100} className="h-6 w-6" />
                                    <p className="md:text-md font-bold text-black">{item.name}</p>
    
    
                                </div>
    
                            )
                        })
                    }
    
    
                </div>
    
            </div>
  )
}

export default DevopsDisplay;
