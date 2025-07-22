'use client'

export default function Card({title,description}:{
    title:string,
    description:string
}){


    return(
        <div className="w-[150px] h-[300px] flex items-center flex-col bg-gradient-to black border-1 rounded-lg from-slate-700">
            <div className="font-bold  dark:text-gray-300 light:text-gray-900 p-9 tracking-tight mx-auto">
                {title}
            </div>
            <div className="dark:text-gray-400 light:text-gray-800 tracking-wide">
                {
                    description
                }
                 
            </div>

        </div>
    )

}