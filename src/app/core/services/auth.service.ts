import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authCode?: string;

  login(): void {
    const cognitoUrl = 'https://zp.auth.eu-central-1.amazoncognito.com';
    const clientId = '2bpefv14hcp7ek7uq84lhjq0lr';
    const redirectUrl = `${location.origin}/personal`;
    const url = `${cognitoUrl}/login?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=id_token`;
    window.open(url, '_self');
  }

}
