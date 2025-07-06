"use client"
import { Fragment } from 'react/jsx-runtime'
import Navbar from '../ui/nav'
import FooterDemo from '../ui/FooterDemo';
import { About } from '../ui/about-3'
import ResourcePage from '../ui/resource'
export const Resource=()=>{
    return(
      <Fragment>
        <Navbar></Navbar>
        <ResourcePage/>
        <FooterDemo />
      </Fragment>
    )
}