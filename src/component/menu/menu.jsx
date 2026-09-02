"use client"
import style from './menu.module.css'
import React, { useEffect, useRef, useState } from 'react'
import menuitems from "./configuration.json";
import Link from 'next/link';

 const Menu = () => {

  const [isMobileView,setIsMobileVIew]=useState(document.body.offsetWidth<700);
  const [left,setLeft]=useState(-100);
    const timeoutRef=useRef();
  useEffect(()=>{
    const fnResize = ()=>{
      clearTimeout(timeoutRef.current);
      timeoutRef.current=setTimeout(()=>{
        console.log(isMobileView);
        setIsMobileVIew(document.body.offsetWidth<700);
      },100)
    };
    window.addEventListener("resize",fnResize);
  })

  const handleMobileMenuBtnClick = () =>{
    setLeft(left === 10  ? -100 : 10);
  }

  const handleMenuItemClick = () =>{
    setLeft(-100);
  }

  return (
    <>  {
        isMobileView && <button className={style.mobileMenuBtn} onClick={handleMobileMenuBtnClick}>menu</button>
     } 
    <div style={{ left: `${left}px`}}  className={`${style.menu}  ${isMobileView ? style.mobileMenu:style.desktopMenu}`}>
    
      {
        menuitems?.map(({item,path},index)=>{
          return <span key={`mi_${index}`}> <Link onClick={handleMenuItemClick} href={path}>{item}</Link> </span>
        })
      }
    </div>
    </>
  )
}

export  default Menu;