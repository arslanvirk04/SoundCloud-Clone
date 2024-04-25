import React from "react";

export const publicRoutes = [
    {
        key: "login",
        path: "/login",
        component: React.lazy(() => import("../components/LoginFormModal/LoginForm.js")),
        loaded: false,
        layout: "public"

    },
    {
        key: "home",
        path: "/",
        component: React.lazy(() => import("../components/Splash/index.js")),
        loaded: true,
        layout: "public"

    },

    {
        key: "register",
        path: "/register",
        component: React.lazy(() => import("../components/SignupFormModal/SignupForm.js")),
        loaded: false,
        layout: "public"

    },

];
