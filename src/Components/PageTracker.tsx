import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);

  useEffect(() => {
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage && lastPage !== location.pathname) {
      navigate(lastPage);
    }
  }, [navigate, location.pathname]);

  return null;
};

export default PageTracker;
