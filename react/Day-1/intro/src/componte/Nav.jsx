import React from 'react'

export const Nav = () => {
  return (
    <>
    <div className="bg-purple-500 p-3 shadow text-white font-semibold font-sans flex justify-start items-center gap-15">
    <div className="mx-10">Logo</div>
    <div className="flex gap-15">
        <link to="/"> Array </link>
        <link to="/Obj"> Obj </link>
        
    </div>
    </div>
    
    </>
  )
}
export default Nav