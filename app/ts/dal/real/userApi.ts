import {Injectable} from 'angular2/core';
import {URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Api} from "./_api";

@Injectable()
export class UserApi {

    constructor(private _api: Api){}

    getAll(page?: number, limit: number = 10): any {
        let queryParams = new URLSearchParams();
        if(page != null){
            queryParams.append('page', page.toString());
        }
        queryParams.append('limit', limit.toString());
        return this._api.get('/users', queryParams).map(res => res.json());
    }

}