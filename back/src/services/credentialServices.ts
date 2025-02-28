import ICredentialDot from "../Dto/CredentialDto";
import Icredemtial from "../interfaces/ICredentials";

export const credential: Icredemtial[] = [];

let id: number = 1;

export let createCredentialServise = async (
  userCredential: ICredentialDot
): Promise<Icredemtial> => {
  let newCredential: Icredemtial = {
    id,
    username: userCredential.username,
    password: userCredential.password,
  };
  credential.push(newCredential);
  id++;
  return newCredential;
};
