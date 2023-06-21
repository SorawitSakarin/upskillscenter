import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const UpskilLandingPage = lazy(() => import("../pages/UpskillLandingPage"));

const UpskillRouter = () => {
  return (
    <Router>
      <main>
      <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<UpskilLandingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default UpskillRouter;
