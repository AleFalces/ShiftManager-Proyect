import { CredetialSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import { Credential } from "../entities/Credential";

export const createCredentialServise = async (
  userCredential: ICredentialDot
): Promise<Credential> => {
  let newCredential: Credential | undefined = await CredetialSource.create({
    username: userCredential.username,
    password: userCredential.password,
  });
  await CredetialSource.save(newCredential);

  return newCredential;
};

export const deleteCredentialService = async (id: string) => {
  const credentialExist = await CredetialSource.findOneBy({ id });
  if (credentialExist === null) {
    throw Error("Credential Error");
  } else {
    await CredetialSource.delete(credentialExist);
  }
};
