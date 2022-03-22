import { Controller, Post } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller('auth')
export class LoginController{
    constructor(private loginService: LoginService){}

    @Post('login')
    login() {
        return  this.loginService
    }
}