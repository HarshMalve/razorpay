import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
let WebAPIServiceService = class WebAPIServiceService {
    constructor(http, ENUM) {
        this.http = http;
        this.ENUM = ENUM;
        this.url = ENUM.API.url;
    }
    sendPostRequest(url, data) {
        return new Promise(resolve => {
            this.http.post(url, data)
                .map(res => res)
                .subscribe(data => {
                resolve(data);
            }, err => {
                resolve(err);
                if (err) {
                    console.error('Please check server connection', 'Server Error!');
                }
            });
        });
    }
};
WebAPIServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WebAPIServiceService);
export { WebAPIServiceService };
//# sourceMappingURL=web-apiservice.service.js.map