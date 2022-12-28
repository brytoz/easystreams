import React, { lazy, Suspense, useContext, useReducer } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Profile from "../pages/dashboard/Profile";
import { AuthContext } from "../contexts/AuthContext";
import Index from "../pages/dashboard/Index";
import Session from "../pages/dashboard/Session";
import Login from "../pages/Login";
import Users from "../pages/dashboard/Users";
import AllPost from "../pages/dashboard/AllPost";
import UpdateLink from "../pages/dashboard/UpdateLink";
import UpdateScores from "../pages/dashboard/UpdateScores";
import Post from "../pages/dashboard/Post";
import NewUser from "../pages/dashboard/NewUser";
import UpdateImage from "../pages/dashboard/UpdateImage";
import { UpdateDateTimeInfo } from "../pages/dashboard/UpdateDateTimeInfo";
import { Priority } from "../pages/dashboard/Priority";

function Stack() {
  const { currentUser } = React.useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <Suspense>
      <Routes>
        <Route index element={<Login />} />

        <Route path="/noaccess" element={<Session />} />

        <Route path="*" element={<Error />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Index />
            </RequireAuth>
          }
        />

        <Route
          path="/Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="/posts"
          element={
            <RequireAuth>
              <AllPost />
            </RequireAuth>
          }
        />
        <Route
          path="/update-priority"
          element={
            <RequireAuth>
              <Priority />
            </RequireAuth>
          }
        />

        <Route
          path="/update-date-time-info"
          element={
            <RequireAuth>
              <UpdateDateTimeInfo />
            </RequireAuth>
          }
        />

        <Route
          path="/score-update"
          element={
            <RequireAuth>
              <UpdateScores />
            </RequireAuth>
          }
        />

        <Route
          path="/users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />

        <Route
          path="/update-link"
          element={
            <RequireAuth>
              <UpdateLink />
            </RequireAuth>
          }
        />

        <Route
          path="/send-posts"
          element={
            <RequireAuth>
              <Post />
            </RequireAuth>
          }
        />

        <Route
          path="/add-user"
          element={
            <RequireAuth>
              <NewUser />
            </RequireAuth>
          }
        />

        <Route
          path="/update-image"
          element={
            <RequireAuth>
              <UpdateImage />
            </RequireAuth>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default Stack;
