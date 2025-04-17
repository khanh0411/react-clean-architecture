import { AuthCredentials } from "@/core/entities/models/authCredentials.model";
import { AuthToken } from "@/core/entities/models/authToken.model";

export interface AuthRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn(credentials: AuthCredentials): Promise<AuthToken | any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signOut(): Promise<any>;
}
