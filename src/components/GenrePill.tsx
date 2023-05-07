const GenrePill: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='text-sm w-fit px-4 py-1 rounded-full border border-gray-500 bg-gray-800 cursor-default lg:px-6 lg:py-2 lg:text-base'>
      <p>{text}</p>
    </div>
  );
};

export default GenrePill;
