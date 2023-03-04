const Sidebar = ()=>{
return(
    <div className="flex  flex-col ml-1"> 
    <span className=" text-center cursor-pointer text-xs py-7 border border-transparent rounded-lg hover:bg-gray-800">Home</span>
    <span className=" text-center cursor-pointer text-xs py-7 border border-transparent rounded-lg hover:bg-gray-800">Shorts</span>
    <span className=" text-center cursor-pointer text-xs py-7 border border-transparent rounded-lg hover:bg-gray-800">Subscription</span>
    <span className=" text-center cursor-pointer text-xs py-7 border border-transparent rounded-lg hover:bg-gray-800">Library</span>
    </div>
)
};

export default Sidebar;