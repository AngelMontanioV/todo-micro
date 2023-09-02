const Header = () => {
  return (
    <div className='text-white mb-5'>
      <div className="md:hidden ml-1 text-lg"><i className="fa-solid fa-bars"></i></div>
      <div className="flex justify-between text-2xl font-bold">
        <div><i className="fa-solid fa-house-chimney"></i><span className="ml-4">Tareas</span></div>
        <div>...</div>
      </div>
    </div>
  );
};

export { Header };