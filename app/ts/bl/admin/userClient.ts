import {Injectable} from 'angular2/core';
import {UserApi} from "../../dal/api/userApi";
import {User} from "./user";

@Injectable()
export class UserClient {

    constructor(private _userApi: UserApi){}

    getAll(page?: number, limit: number = 10): any {
        return this._userApi.getAll(page, limit).map(function (response) {
            return {
                users: response.data.map(rawUser => User.fromJson(rawUser)),
                total: response.total
            };
        });
    }

}