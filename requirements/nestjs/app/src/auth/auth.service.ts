import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class AuthService extends PassportStrategy(Strategy, 'oauth2') {
  constructor() {
    super({
      authorizationURL: 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-b8f0a7f38c5287b525a5f3042786da2cb0bcb401887b83fab1200da2cbabce1f&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fwelcome&response_type=code',
      tokenURL: 'URL_TOKEN_OAUTH2',
      clientID: 'u-s4t2ud-b8f0a7f38c5287b525a5f3042786da2cb0bcb401887b83fab1200da2cbabce1f',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/welcome',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: (err: any, user: any) => void) {
    // Traitez les informations reçues et trouvez ou créez un utilisateur avec Prisma
    // Puis, appelez `done` avec l'utilisateur trouvé ou créé.
    //const user = ...;
    //done(null, user);
    
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
	  console.log('\n SUCCESSSSSSS de auth.service.ts \n');
  }
}
//export class AuthService {}

//@Injectable()
//export class AuthService {}
