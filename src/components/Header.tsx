const Header: React.FC = () => {
  return (
    <div className='bg-hero-pattern h-[50vh] text-my-white flex items-center justify-center flex-col lg:h-[75vh]'>
      <h1 className='text-3xl text-center font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        Search for any movie
      </h1>
      <form className='mt-5 flex flex-col items-center gap-3 lg:flex-row '>
        <input
          type='text'
          placeholder='Search...'
          className='px-4 py-2 text-black rounded-lg'
        />
        <button className='bg-my-red text-my-white px-6 py-2 rounded-sm cursor-pointer'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
