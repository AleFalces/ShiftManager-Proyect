import { CredetialSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import { Credential } from "../entities/Credential";
import credentialRepository from "../repositories/credentialRepository";

export const createCredentialServise = async (
  userCredential: ICredentialDot
): Promise<Credential> => {
  let newCredential: Credential | undefined = await CredetialSource.create({
    username: userCredential.username,
    password: userCredential.password,
  });
  await credentialRepository.save(newCredential);

  return newCredential;
};

export const deleteCredentialService = async (id: string) => {
  const credentialExist = await credentialRepository.findOneBy({ id });
  if (credentialExist === null) {
    throw Error("Credential Error");
  } else {
    await credentialRepository.delete(credentialExist);
  }
};
