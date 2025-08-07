const ROUTES = {
    HOME: "/",
    SIGN_IN: "/signin",
    SIGN_UP: "/signup",
    PROFILE: (id: string) => `/profile/${id}`,
    TAG: (_id: string) => `/tags/${_id}`
}
export default ROUTES;