import React from 'react'

const navData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Profile',
    path: '/Profile',
  },
  {
    name: 'Groups',
    path: '/Groups',
  },
  {
    name: 'Notificarions',
    path: '/Notificarions',
  },
  {
    name: 'Dashboard',
    path: '/Dashboard',
  },
]

const Sidebar = () => {
  return (
    <div className='w-64 bg-white h-screen rounded-tr-[30px] rounded-br-[30px]'>
      <div className='flex items-center border border-b justify-center h-16 bg-white'>
        <img className='h-[40px] w-[40px] rounded-full object-cover mr-2' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
        <div className='flex flex-col'>
          <h2 className='font-semibold'>Demetre Kalandarishvili</h2>
          <p className='text-secondary-100'>Mentor</p>
        </div>
      </div>
      <div className='flex justify-center items-center py-5'>
        <img className='h-[20px] w-[20px]' src="data:image/png;base64,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" alt="loop" />
        <input type="text" placeholder='Search' className='bg- border-2 p-2 rounded-full' />
      </div>
      <ul className='text-black'>
        {
          navData.map((item, index) => (
            <li key={index} className='p-4 cursor-pointer hover:bg-bodyBg hover:rounded-bl-2xl hover:ml-4'>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Sidebar;