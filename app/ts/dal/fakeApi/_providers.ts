import {provide} from 'angular2/core';
import {Http} from 'angular2/http';
import {UserApi} from "../api/userApi";
import {UserFakeApi} from "./userApi";

export const FAKE_API_PROVIDERS = [
    provide(UserApi, {useClass: UserFakeApi})
];