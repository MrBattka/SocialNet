import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import HeaderContainer from "../components/Dekstop/Header/HeaderContainer";
import LoginPageContainer from "../components/Dekstop/LoginPage/LoginPageContainer";
import MyFriendsContainer from "../components/Dekstop/MyFriends/MyFriendsContainer";
import Nav from "../components/Dekstop/Nav/Nav";
import ProfileContainer from "../components/Dekstop/Profile/ProfileContainer";
import SettingCompContainer from "../components/Dekstop/Setting Component/SettingCompContainer";
import UsersContainer from "../components/Dekstop/Users/UsersContainer";
import DialogsContainer from "../components/Dekstop/Dialogs/DialogsContainer";
import MessagesContainer from "../components/Dekstop/Dialogs/Messages/MessagesContainer";

const DesktopView = ({ isAuth, authUserId }) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      {isAuth && <Nav authUserId={authUserId} />}
      <Routes>
        <Route path="/login" element={<LoginPageContainer />} />
      </Routes>
      <div className="app-wrapper-content">
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
