import { Expose } from "class-transformer";
import { IUser } from "../interface/user.interface";

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];
export const extendedUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];
export const allUserGroupsForSerializing: string[] = [
  ...extendedUserGroupsForSerializing,
  'user.password',
];

export class UserEntity implements IUser {
    id: string;

    email: string;

    login: string;

    phone: string;

    @Expose({groups: ['user.password']})
    password: string;

    @Expose({groups: ['user.timestamps']})
    createdAt: Date;

    @Expose({groups: ['user.timestamps']})
    updatedAt: Date;
}