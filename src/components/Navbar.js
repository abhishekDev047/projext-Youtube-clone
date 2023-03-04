
const Navbar = ()=>{
return(
    <div className="flex w-full my-3 h-10">
       <div className="mx-4 w-1/5 items-center text-center"><a href="#"><img src="https://www.citypng.com/public/uploads/preview/-516096049696zbxtf43qa.png" alt="YOUtube" className="h-full w-full" /></a></div>
       <div className="w-3/5 items-center text-center">
        <input type="text" placeholder="Search" className="bg-transparent rounded-l-3xl  border-gray-700 border h-full w-3/4 px-2 py-2" />
        <button className="text-gray-600 bg-gray-600 px-3 py-2 border-slate-700 border rounded-r-3xl">
        Search
        </button> 
        <button className="ml-2"><i className=" border border-transparent bg-slate-900 hover:bg-gray-700 rounded-full px-2 py-2"> Mic</i></button>
       </div>
       <div className="w-1/5 items-center text-center"> 
       <button className="ml-3 mr-2"><i className=" hover:border hover:border-transparent border-transparent border hover:rounded-full px-2 py-2 hover:bg-gray-700"> Cre</i></button>
       <button className="ml-2 mr-3"><i className=" hover:border hover:border-transparent border-transparent border hover:rounded-full px-2 py-2 hover:bg-gray-700"> Ntf</i></button>
       <button className="mx-3"><i className=" border border-transparent bg-gray-500 rounded-full px-2 py-2"> A/c</i></button>
       </div>
    </div>
)
};
export default Navbar;