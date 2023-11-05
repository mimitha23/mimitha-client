import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Router as AppRouter } from "config/router";
import { Spinner } from "components/Layouts";

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {AppRouter.map((route) => (
          <Route key={route.name} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.name}
                  path={childRoute.path}
                  element={childRoute.element}
                >
                  {childRoute.children &&
                    childRoute.children.map((nestedChildRoute) => (
                      <Route
                        key={nestedChildRoute.name}
                        path={nestedChildRoute.path}
                        element={nestedChildRoute.element}
                      />
                    ))}
                </Route>
              ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}
