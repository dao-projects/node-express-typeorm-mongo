import {UserController} from "../controller/UserController";

export const UserServer = [{
    method: "get",
    route: "/user",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/user/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/user",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/user/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/user/login",
    controller: UserController,
    action: "login"
}]
