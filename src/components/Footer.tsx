const Footer: React.FC = () => {
  return (
    <footer className='text-my-white bg-my-black px-4 py-2'>
      <div className='container mx-auto text-center flex items-center justify-between lg:px-10'>
        <p className='text-3xl text-left'>
          Cine<span className='font-bold text-my-red'>Magic</span>
        </p>
        <a
          href='https://developers.themoviedb.org/3/'
          target='_blank'
          className='transition-colors hover:text-my-red'
        >
          Used API
        </a>
      </div>
    </footer>
  );
};

export default Footer;
