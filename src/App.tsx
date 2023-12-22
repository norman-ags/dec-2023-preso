import * as React from "react";
import * as ReactDOM from "react-dom/server";
import "./App.css";
import { Box, Button, css, Flex, globalStyles, Text } from "@realtair/ui";
import { useFallingRealtairElements } from "./useFallingRealtairElements";
import { Brand, BrandName } from "@realtair/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useArrowkeysNavigation, useSlideNavigation } from "./slides/useSlides";

function App() {
  globalStyles();
  useFallingRealtairElements();
  useArrowkeysNavigation();
  const { previousPath, nextPath } = useSlideNavigation();

  return (
    <Flex direction="column" justify="between">
      <Outlet />
      <Flex
        gap="md"
        justify="end"
        css={{ color: "$purple7", fontWeight: "$semiBold" }}
      >
        <Link to={previousPath}>Previous</Link>
        <Link to={nextPath}>Next</Link>
      </Flex>
    </Flex>
  );
}

export default App;
