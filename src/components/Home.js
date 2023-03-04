import VIdeos from "./VIdeos";


const Home = ()=>{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

return(
    <div className="ml-3 mr-7 flex flex-col w-full">
      <div className=" h-10 mt-4 w-full"> 
      <button className="mx-2 bg-gray-800 hover:bg-gray-600 border border-transparent rounded-lg px-3 py-1">All</button>
      <button className="mx-2 bg-gray-800 hover:bg-gray-600 border border-transparent rounded-lg px-3 py-1"> For you</button>
      <button className="mx-2 bg-gray-800 hover:bg-gray-600 border border-transparent rounded-lg px-3 py-1"> Music</button>
      <button className="mx-2 bg-gray-800 hover:bg-gray-600 border border-transparent rounded-lg px-3 py-1"> Live</button>
      </div>
      <div className="flex flex-row flex-wrap">
      {arr.map((num)=>{
       return <VIdeos key={num}/>
      })}
       </div>
    </div>
)
};

export default Home;