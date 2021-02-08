import {DevController} from "../controller/DevController";

export const DevServer = [{
    method: "get",
    route: "/dev",
    controller: DevController,
    action: "all"
}, {
    method: "get",
    route: "/dev/:id",
    controller: DevController,
    action: "one"
}, {
    method: "post",
    route: "/dev",
    controller: DevController,
    action: "save"
}, {
    method: "delete",
    route: "/dev/:id",
    controller: DevController,
    action: "remove"
}
]
