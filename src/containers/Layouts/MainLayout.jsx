import React from "react";
import Nav from "../navbar/App";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const MainLayout = ({children}) => {
    return (
        <React.Fragment>
            <Nav/>
            <ScrollToTopButton/>
        </React.Fragment>
    );
};

export default MainLayout;