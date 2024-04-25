import { Body, Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SudoDto } from './dto/sudo.dto';


@Controller('auth')
export class AuthController {

  constructor(private auth: AuthService) { }

  // @Get()
  /*findAll(@Res() response: Response) {
    this.auth.findAll()
      .then(res => { return response.status(200).json(res) })
  }*/

  @Post()
  login(@Body() userDto: SudoDto, @Res() response: Response) {
    this.auth.login(userDto)
      .then(res => response.status(200).json(res))
      .catch(err => response.jsonp(err))
    // console.log(token)

    // .then(res=> response.status(200).json(res))
    // .catch(err => response.jsonp(err))

  }
  /*create(@Req() request: Request, @Res() response: Response) {
    console.log(request.body)
    const sudo: CreateSudoDto = request.body
    this.auth.create(sudo)
      .then(res => { return response.status(200).json(res) })
      .catch(err => { return response.jsonp({ success: false, errors: err }) })
  }*/

  /*@Delete()
  delete(@Req() request: Request, @Res() response: Response) {
    const sudo: DeleteSudoDto = request.body
    this.auth.delete(sudo)
    .then(res=>{return response.status(200).json(res)})
    .catch(err=>{return response.jsonp({success: false, error: err})})

  }*/
}
