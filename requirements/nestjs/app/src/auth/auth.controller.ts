import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {}

// GPT
//import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
//import { AuthService } from './auth.service';//ADDED
//
//@Controller('auth')
//export class AuthController {
//  // Cette route déclenchera la séquence d'authentification OAuth2
//  @Get('login')
//  @UseGuards(AuthGuard('oauth2'))
//  login() {
//    // Cette méthode ne sera pas appelée car la garde d'authentification redirigera l'utilisateur vers le fournisseur OAuth2
//  }
//
//  // Cette route sera le point de rappel où le fournisseur OAuth2 redirigera l'utilisateur après avoir accordé les autorisations
//  @Get('callback')
//  @UseGuards(AuthGuard('oauth2'))
//  async callback(@Req() req, @Res() res) {
//    // À ce stade, l'utilisateur est authentifié avec succès.
//    // Vous pouvez générer un JWT, créer une session, ou tout autre mécanisme d'authentification que vous souhaitez.
//
//    // Exemple : Créer un token JWT (vous aurez besoin d'un package comme @nestjs/jwt)
//    // const jwt = jwtService.sign(req.user);
//
//    // Vous pouvez maintenant rediriger l'utilisateur vers votre frontend avec le token ou le stocker dans un cookie
//    res.redirect(`http://localhost:3000?token=${jwt}`);
//  }
//
//  // Pour se déconnecter ou gérer d'autres aspects de l'authentification, ajoutez d'autres méthodes ici.
//  @Get('logout')
//  logout(@Req() req, @Res() res) {
//    // Détruisez la session ou le token, puis redirigez l'utilisateur
//    req.logout();
//    res.redirect('http://localhost:3000');
//  }
//}
