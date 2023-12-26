

const GPTSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" placeholder="What would you like to watch today?" className="p-4 m-4 col-span-9"/>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
