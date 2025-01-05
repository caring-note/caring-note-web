// src/keycloak.js
import Keycloak from 'keycloak-js';

// Keycloak 설정. 여기서 url, realm, clientId는 위에서 만든 값으로 교체
const keycloak = new Keycloak({
  url: 'http://caringnote.co.kr/keycloak',
  realm: 'caringnote',
  clientId: 'caringnote',
});

export default keycloak;
