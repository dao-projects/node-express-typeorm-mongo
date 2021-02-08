import {CloudController} from "../controller/CloudController";

export const CloudServer = [
    {
        method: "get",
        route: "/cloud",
        controller: CloudController,
        action: "all"
    }, {
        method: "get",
        route: "/cloud/:id",
        controller: CloudController,
        action: "one"
    }, {
        method: "post",
        route: "/cloud",
        controller: CloudController,
        action: "save"
    }, {
        method: "delete",
        route: "/cloud/:id",
        controller: CloudController,
        action: "remove"
    }
]
