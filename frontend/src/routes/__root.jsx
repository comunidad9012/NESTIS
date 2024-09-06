import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div>Hello &quot;__root&quot;!</div>
      <Outlet />
    </React.Fragment>
  ),
});
