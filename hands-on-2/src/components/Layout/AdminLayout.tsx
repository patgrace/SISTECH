import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";

import SidebarAdmin from '../Admin/SidebarAdmin';

const listSidebarItem = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: <PiCirclesFourFill />, 
  }, 
  {
    title: 'Course',
    url: '/admin/courses',
    icon: <MdOutlineLibraryBooks />, 
  }
]


export default function AdminLayout() {
  return (
    <SidebarAdmin lists={listSidebarItem} />
  )
}