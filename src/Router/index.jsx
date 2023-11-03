import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";

import Login from "../pages/Auth/Login";

import UserPanel from "../pages/UserPanel";
import Layout from "../pages/Layout/Layout";
import Dashboard from "../pages/AdminPanel/Dashboard";
import Oquvchilar from "../pages/AdminPanel/Oquvchilar";
import Kurslar from "../pages/AdminPanel/Kurslar";
import Xizmatlar from "../pages/AdminPanel/Xizmatlar";
import Buyurtmachilar from "../pages/AdminPanel/Buyurtmachilar";
import Settings from "../components/DHeader/Settings/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserPanel />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/students",
                element: <Oquvchilar />,
            },
            {
                path: "/dashboard/courses",
                element: <Kurslar />,
            },
            {
                path: "/dashboard/services",
                element: <Xizmatlar />,
            },
            {
                path: "/dashboard/customers",
                element: <Buyurtmachilar />,
            },
            {
                path: "/dashboard/user",
                element: <Settings />,
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;

//  {
//     path: '/',
//     name: 'dashboard',
//     component: () => import('@pg/Layout.vue'),
//     children: [
//       {
//         path: '/about',
//         name: 'about',
//         component: () => import('@pg/About/AboutView.vue')
//       },
//       {
//         path: '/mentors',
//         name: 'mentors',
//         component: () => import('@pg/Mentors/Mentors.vue'),
//         beforeEnter: (to, _, next) => {
//           if (
//             to.name == 'mentors' &&
//             ['SUPER-ADMIN', 'ADMINSTRATOR'].includes(localStorage.getItem('role'))
//           ) {
//             return next()
//           } else {
//             return next({ name: 'dashboard' })
//           }
//         }
//       },
//       {
//         path: '/students',
//         name: 'students',
//         component: () => import('@pg/Students/Students.vue')
//       },
//       {
//         path: '/groups',
//         name: 'groups',
//         component: () => import('@pg/Groups/Groups.vue')
//       },
//       {
//         path: '/homeworks',
//         name: 'homeworks',
//         component: () => import('@pg/Homeworks/Homeworks.vue'),
//         beforeEnter: (to, _, next) => {
//           if (
//             to.name == 'homeworks' &&
//             ['STUDENT', 'MENTOR'].includes(localStorage.getItem('role'))
//           ) {
//             return next()
//           } else {
//             return next({ name: 'dashboardtysdfughijkl;' })
//           }
//         }
//       }
//     ]
//   }
