export const routeStr = `import AaaaBbbb from "aaaa/bbbb.tsx";
import AaaaCccc from "aaaa/cccc.tsx";
import AaaaOoooP from "aaaa/[oooo].tsx";
import AaaaDddd from "aaaa/dddd.tsx";
import AaaaLayout from "aaaa/layout.tsx";
import AaaaMiddleware from "aaaa/middleware.tsx";
import BbbbDddd from "bbbb/dddd.tsx";
import BbbbEeeeHggh from "bbbb/eeee-hggh.tsx";
import BbbbFfff from "bbbb/ffff.tsx";
import CcccMiddleware from "cccc/middleware.tsx";
import CcccAuth from "cccc/auth.tsx";
export const routes = [
  {
    path: "aaaa",
    element: <AaaaBbbb />,
    children: [
      {
        element: <AaaaLayout />,
        children: [
          {
            path: "bbbb",
            element: <AaaaMiddleware><AaaaBbbb /></AaaaMiddleware>,
            children: []
          },
          {
            path: "cccc",
            element: <AaaaMiddleware><AaaaCccc /></AaaaMiddleware>,
            children: []
          },
          {
            path: ":oooo",
            element: <AaaaMiddleware><AaaaOoooP /></AaaaMiddleware>,
            children: []
          },
          {
            path: "dddd",
            element: <AaaaMiddleware><AaaaDddd /></AaaaMiddleware>,
            children: []
          }
        ]
      }
    ]
  },
  {
    path: "bbbb",
    element: <BbbbDddd />,
    children: [
      {
        path: "dddd",
        element: <BbbbDddd />,
        children: []
      },
      {
        path: "eeee-hggh",
        element: <BbbbEeeeHggh />,
        children: []
      },
      {
        path: "ffff",
        element: <BbbbFfff />,
        children: []
      }
    ]
  },
  {
    path: "cccc",
    element: <CcccMiddleware />,
    children: [
      {
        path: "auth",
        element: <CcccMiddleware><CcccAuth /></CcccMiddleware>,
        children: []
      }
    ]
  }
]`;