import React from 'react'
import { connect } from 'react-redux'
import { openNavMenu } from '../../../Redux/Mobile/header-reduser'
import Nav from './Nav'

const mapStateToProps = (state) => {
  return {
    open: state.mobHeader.isOpenNavMenu
  }
}

const NavContainer = connect(mapStateToProps, {openNavMenu})(Nav)

export default NavContainer