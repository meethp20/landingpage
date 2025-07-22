'use client'

export default function Card({title,description}:{
    title:string,
    description:string
}){


    return(
        <div className="w-[100px] h-[400px] bg-gradient-to black from-slate-700">
            <div className="font-bold text-gray-300 tracking-tight mx-auto">
                {title}
            </div>
            <div className="text-gray-400 tracking-wide">
                {
                    description
                }
                 
            </div>

        </div>
    )

}