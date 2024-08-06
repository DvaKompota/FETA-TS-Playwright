import { randomString } from '@/test-data/utils';

export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token?: string;

    constructor(firstName?: string, lastName?: string, email?: string, password?: string) {
        this.firstName = firstName ?? randomString(5);
        this.lastName = lastName ?? randomString(10);
        this.email = email ?? `${this.firstName}.${this.lastName}@${randomString(5)}`.toLowerCase() + '.com';
        this.password = password ?? randomString(5) + randomString(5).toLowerCase();
    }

    static createRandomUser(): User {
        return new User();
    }
}

export interface AddUserResponse {
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        __v: number;
    };
    token: string;
};