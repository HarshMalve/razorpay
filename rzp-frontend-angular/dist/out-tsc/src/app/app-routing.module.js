import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RazorpayComponentComponent } from './components/razorpay-component/razorpay-component.component';
const routes = [
    { path: 'razorpay', component: RazorpayComponentComponent },
    { path: '', redirectTo: 'razorpay', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map