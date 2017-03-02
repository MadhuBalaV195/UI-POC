import { Component } from '@angular/core';
import {ANGULAR_TABS_DIRECTIVES, TabInterface} from "angular2-tabs/core";

@Component ({
    selector: 'updateprofile-comp',
    templateUrl: 'app/updateprofile/updateprofile.component.html',
     directives: [ANGULAR_TABS_DIRECTIVES]
})

export class UpdateProfileComponent {
    tabOne: TabInterface = {id: "test", title: 'test Title', canActivate: () => {return true;}}

}