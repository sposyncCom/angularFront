Angular + Django REST

1. Framework Information
   
   Angualar : 14.2.8
   
   Django REST : 3.13.1
   
   Django REST SimpleJWT : 5.2.2
   
   Django : 4.1.2
   
   Django Channels : 2.4.0

   

2. NGINX Configuration

   LOCATION Section :
   
   
         location ~^/api  {
      
              proxy_pass http://unix:/run/cgunicorn.sock;
         
              proxy_redirect off;
         
              proxy_set_header   Host              $http_host;
         
              proxy_set_header   X-Real-IP         $remote_addr;
         
              proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
         
              proxy_set_header   X-Forwarded-Proto https;   
          }

   SERVER Section :
   
         server_name sposync.com www.sposync.com;
      
         root /home/ubuntu/angularFront/dist/angular-front;
      
         index index.html index.htm;
   

4. Web App Information - Back-end

   webRTC application utilizing Django Channels as signalling websockets.
   
   Flask-based video relay server.
   
   Equipped with COTRUN server for P2P connection
   
   
6. Checking with Android Native App
   https://play.google.com/store/apps/details?id=com.sposync.app
   

# AngularFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
## ng cache clean && ng build --configuration=production –optimization=false

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
