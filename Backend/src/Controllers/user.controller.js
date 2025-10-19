import UserService from "../Services/user.service.js";

class UserController {
    constructor() {
        this.userService = new UserService()
    }
}

export default UserController;