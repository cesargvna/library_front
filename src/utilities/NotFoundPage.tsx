import React from "react";  
import { Route, Routes } from "react-router";

interface NotFoundPageProps {
    children?: React.JSX.Element;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({children}) => {
  return (
    <Routes>
        {children}
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
};
export default NotFoundPage;