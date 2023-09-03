import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Dialogs/Messages/MessagesContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";
import Nav from "./Nav/Nav";
import ProfileContainer from "./Profile/ProfileContainer";
import SettingCompContainer from "./Setting Component/SettingCompContainer";
import UsersContainer from "./Users/UsersContainer";
import classes from './Desktop.module.css';

const DesktopView = ({ isAuth, authUserId }) => {
  return (
    <div className={classes.app_wrapper}>
      <HeaderContainer />
      {isAuth && <Nav authUserId={authUserId} />}
      <Routes>
        <Route path="/login" element={<LoginPageContainer />} />
      </Routes>
      <div className={classes.app_wrapper_content}>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/profile' />} /> */}
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/dialogs/*" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/friends" element={<MyFriendsContainer />} />
          <Route path="/settings" element={<SettingCompContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default DesktopView;
