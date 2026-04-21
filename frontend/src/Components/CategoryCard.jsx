import React from "react"

const CategoryCard = ({ title }) => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full rounded-3xl p-[1px] bg-gradient-to-br from-yellow-300/60 via-pink-300/50 to-blue-300/60">
        
        <div className="h-full w-full rounded-3xl bg-white/60 backdrop-blur-md border border-white/30 p-6 flex items-center justify-center text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          
          <span className="text-base md:text-lg font-semibold text-black">
            {title}
          </span>

        </div>
      </div>
    </div>
  )
}

export default CategoryCard