import React from 'react'
import { connect } from 'react-redux'
import { openNavMenu } from '../../../Redux/Mobile/header-reduser'
import Header from './Header'

const mapStateToProps = (state) => {
    return {
        open: state.mobHeader.isOpenNavMenu
    }
}

const HeaderContainer = connect(mapStateToProps, {openNavMenu})(Header)

export default HeaderContainer