'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from '../Button/Button';
import { signOut } from 'next-auth/react';


type Proptypes = {
  lists: Array <{
    title: string,
    url: string,
    icon: React.JSX.Element,
  }>
}

const SidebarAdmin = (props: Proptypes) => {
  const { lists } = props;
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-screen bg-blue text-light w-64">
    <div className="p-4 text-lg font-bold">Admin Page</div>
    {lists.map ((list, index) => (
      <Link
       href={list.url}
       key={list.title} 
       className={`flex items-center mx-6 my-2 hover:bg-dark-secondary p-2 hover:transition-75 rounded-md ${pathname === list.url ? 'bg-dark-secondary p-2' : 'bg-blue'}`}>
        <i className='flex flex-col'> {list.icon} </i>
        <h2 className="ml-2"> {list.title}  </h2>
        </Link>
    )) }

  <div className=" flex-grow  " />
    <div className='flex justify-center m-4'>
      <Button  
        variant='secondary'
        className='w-full'
        onClick= {() => signOut()}>
        Logout
      </Button>
    </div>
  </div>
  )
}

export default SidebarAdmin;