"use client"
import style from './menu.module.css'
import React, { useEffect, useState } from 'react'
import menuitems from "./configuration.json";
import Link from 'next/link';

 const Menu = () => {

  const [isMobileView,setIsMobileVIew]=useState(document.body.offsetWidth < 700);

  useEffect(()=>{
    const fnResize = ()=>{
       console.log(document.body.offsetWidth);
    };

    window.addEventListener("resize",fnResize);
  })

  return (
    <div className={style.menu}>
      {
        menuitems.map(({item,path,index})=>{
          return <span key={`mi_${index}`}> <Link href={path}>{item}</Link> </span>
        })
      }

    </div>
  )
}

export  default Menu;