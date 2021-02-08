import {UserServer} from "./server/UserServer"
import {DevServer} from "./server/DevServer"
import {CloudServer} from "./server/CloudServer"

export const Routes = [
    ...UserServer,
    ...DevServer,
    ...CloudServer
]

