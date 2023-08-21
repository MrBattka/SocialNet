import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "../components/Mobile/Dialogs/DialogsContainer";
import HeaderContainer from "../components/Mobile/Header/HeaderContainer";
import LoginPageContainer from "../components/Mobile/Login Page/LoginContainer";
import MyFriendsContainer from "../components/Mobile/My Friends/MyFriendsContainer";
import ProfileContainer from "../components/Mobile/Profile/ProfileContainer";
import SettingCompContainer from "../components/Mobile/Settins Component/SettingsContainer";
import UsersContainer from "../components/Mobile/Users/UsersContainer";
import classes from "./Mobile.module.css";
import MessagesContainer from "../components/Mobile/Dialogs/Messages/MessagesContainer";

const MobileView = () => {
  return (
    <div className={classes.wrapper_app}>
      <header className={classes.header}>
        <HeaderContainer />
      </header>
      <main className={classes.content}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/dialogs/*" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/friends" element={<MyFriendsContainer />} />
          <Route path="/settings" element={<SettingCompContainer />} />
          <Route path="/login" element={<LoginPageContainer />} />
        </Routes>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.mobHeader.isOpenNavMenu,
  };
};

const MobileViewCont = connect(mapStateToProps)(MobileView);

export default MobileViewCont;
