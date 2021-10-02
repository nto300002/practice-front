import React from 'react'
import {Link} from "react-router-dom"
import { IoMdSearch } from "react-icons/io"
import Style from "./Header.module.scss"

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
      <form>
        <input type="text" placeholder="search" />
        <button type="submit"><IoMdSearch/></button>
      </form>
      </div>
    </div>
  )
}

export default Header
