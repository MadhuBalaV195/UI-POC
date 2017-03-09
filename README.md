# UI-POC
1. To clone the project in your system navigate to your required folder and open git bash
2. Then type "git clone url" url copied from the link and then enter
3. Navigate inside the folder then run "npm install" from a command prompt in that folder path
4. If you have not installed angular cli then run "npm install -g angular-cli" to install 
   globally(you dont have to install cli for another project if installed globally).
5. This project uses bootstrap 4, to install bootstrap follow below steps
6. run "npm install -g  bootstrap@4.0.0-alpha.6 --save"
7. After installing the above dependencies run the following npm command which will install the bootstrap module 
8. "npm install --save @ng-bootstrap/ng-bootstrap" 
9. Add the following import into app.module "import {NgbModule} from '@ng-bootstrap/ng-bootstrap';" 
10. and add "NgbModule" to the imports[]
11. Your app module will look like this:

    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

    @NgModule({
       declarations: [
       AppComponent
    ],
      imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(), // Add Bootstrap module here.
    ],
      providers: [],
      bootstrap: [AppComponent]
    })

    export class AppModule { }

12. Open angular-cli.json and insert a new entry into the styles and scripts array :
    "styles": [
      "styles.css",
       "../node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": ["../node_modules/jquery/dist/jquery.min.js",
                  "../node_modules/tether/dist/js/tether.js",
                  "../node_modules/bootstrap/dist/js/bootstrap.min.js"],
13. Now you can run the project using "ng serve" or "npm start".
