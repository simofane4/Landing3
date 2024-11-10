# Landsay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



curl -X POST https://login.wget.ma/includes/api.php \
  -d 'action=GetOrderStatuses' \
  -d 'username=GI40jvTCfojqfwYUzri1Au1qIOXRKjid' \
  -d 'password=K0l5E0Kj08uOn0EB6d2oERPxfNzjrZ3c' \
  -d 'responsetype=json'



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://login.wget.ma/includes/api.php ');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
    http_build_query(
        array(
            'action' => 'GetOrderStatuses',
            // See https://developers.whmcs.com/api/authentication
            'username' => 'GI40jvTCfojqfwYUzri1Au1qIOXRKjid',
            'password' => 'K0l5E0Kj08uOn0EB6d2oERPxfNzjrZ3c',
            'responsetype' => 'json',
        )
    )
);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);



docker run -p 8080:8080 -p 50000:50000 -v /your/home:/var/jenkins_home jenkins
docker pull mohamedaitkhmim/barber-api:prod
docker run -p 8899:8899 --name barber-api mohamedaitkhmim/barber-api:prod




CE39E3CFFC98BE973FDDD165C9AC9