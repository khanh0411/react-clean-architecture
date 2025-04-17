/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { LoginParams, loginRequest } from "@/apis/modules/auth";
import { AuthCredentials } from "@/core/entities/models/authCredentials.model";
import { AuthToken } from "@/core/entities/models/authToken.model";

export class AuthRepositoryImpl {
  async signIn(credentials: AuthCredentials): Promise<AuthToken | any> {
    try {
      const params: LoginParams = {
        email: String(credentials.email),
        password: String(credentials.password),
      };
      const response = await loginRequest(params);
      console.log(response);
    } catch (error) {
      return error;
    }
  }

  async signOut(): Promise<any> {
    try {
      // todo signOut logic
    } catch (error) {
      return error;
    }
  }
}
