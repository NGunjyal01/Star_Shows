
const MainTVShowVideoTitle = ({title}) => {
    return (
      <div className='pt-[40%] md:pt-[40%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <div className='my-4 mt-2 md:mt-6'>
          <button className='px-3 py-1 md:px-14 md:py-4 bg-white text-black font-bold rounded-lg hover:bg-opacity-80'>Play</button>
          <button className='hidden md:inline-block mx-2 px-14 py-4 bg-[#393E46] font-bold rounded-lg hover:bg-opacity-80'>More Info</button>
        </div>
      </div>
    )
};
  
export default MainTVShowVideoTitle;
  