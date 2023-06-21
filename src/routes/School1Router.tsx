
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoadingSpinnerDNA from "../components/LoadingSpinnerDNA";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "../context/ProtectedRoute";
import NotProtectedRoute from "../context/NotProtectedRoute";
import NavBarSchool from "../subschool1/navigation/Navbar";
import "./transition.css";
const PostTest = lazy(()=> import("../subschool1/pages/PostTest"));
const PreTest = lazy(()=> import("../subschool1/pages/PreTest"));
const Result = lazy(()=> import("../subschool1/pages/TestResult"));
const Exam = lazy(() => import("../subschool1/pages/Exam"));
const Tips = lazy(() => import("../subschool1/pages/Tips"));
const Home = lazy(() => import("../subschool1/pages/Home"));
const Learn = lazy(()=> import("../subschool1/pages/Learn"));
const Login = lazy(() => import("../subschool1/pages/Login"));
const Profile = lazy(()=> import("../subschool1/pages/Profile"));
const Dashboard = lazy(()=> import("../subschool1/pages/Dashboard"));
const Fundamental = lazy(() => import("../subschool1/pages/Fundamental"));
const PersonalInformation = lazy(()=> import("../subschool1/pages/PersonalInformation"));

const School1Router = () => {

  return (
    <Router>
      <AuthProvider>
        <main>
          <NavBarSchool />
          <Suspense fallback={<LoadingSpinnerDNA />}>
            <Routes>
              <Route path="/login" element={<NotProtectedRoute> <Login /> </NotProtectedRoute>} />
              <Route path="/tips" element={<ProtectedRoute><Tips /></ProtectedRoute>} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute> } />
              <Route path="/exam" element={<ProtectedRoute><Exam /></ProtectedRoute> } />
              <Route path="/result/:testId" element={<ProtectedRoute><Result /></ProtectedRoute>} />
              <Route path="/learn/:courseId" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
              <Route path="/fundamental" element={<ProtectedRoute><Fundamental /></ProtectedRoute>} />
              <Route path="/pretest/:testId" element={<ProtectedRoute><PreTest /></ProtectedRoute>} />
              <Route path="/posttest/:testId" element={<ProtectedRoute><PostTest /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute> } />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
              <Route path="/personalinformation" element={<ProtectedRoute><PersonalInformation /></ProtectedRoute> } />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Suspense>
        </main>
      </AuthProvider>
    </Router>
  );
};

export default School1Router;