# Mr.Medic
  Mr. Medic is a medical healthcare service that comes with **both web version and android/iOS version with REST API in node.js** is used to keep and track record of a patient's medical reports which can be used by doctors to get reference, and and register current report of patient online which will, then be linked to patient's medical record. This app runs on the node.js backend and uses MongoDB atlas service for storing data online. The application is deployed on heroku so it can be used by the links provided. To view abstract, [click here](/abstract.pdf).
  
## Web App
<br><br>
  <img src="/screenshots/webApp.jpg" width="100%" height="625px">
The web App/ web Portal is build using React which is deployed on heroku at https://pacific-chamber-91721.herokuapp.com/.
The WebApp gives the facility to 
- Search Doctors according to area location
- Search Patient according to name
- Login & Signup of Doctors
- Login & Signup of Patients
- Details of Doctors
- Details of Patients 
- QR Code implementation in patient profile which contails app the details of patient which can be opened on app.

## Flutter app
<br><br>
  <img src="/screenshots/Annotation.png" width="100%" height="505px">
You can download the fully functioned [APK](https://drive.google.com/open?id=1By_CKuRpz-8DsvFL3b3102nDxG0T3h-O), or you can setup the flutter app using the mentioned steps: 
### Getting Started

- clone this repository.

```
git clone 'repository_url'
```

- download flutter from flutter : https://flutter.dev/docs/get-started/install
- install flutter and dart plugins for your text editor.
- open project in your preferred text editor and download all dependencies from pubspec.yaml (automatically downloaded during first run)
- create a folder named api in lib folder
- create a file name keys.dart
- paste this key in the file 
```
import 'package:scoped_model/scoped_model.dart';

class ApiKeys extends Model {
  static final uri = 'http://evening-dusk-90900.herokuapp.com/';
}
```
- run project using command

```
flutter run
```
-Login credentials(Dummy Users) for app:
```
patient-username:  ishan@email.com
patient-password:  12345

doctor-username:  doctorNew@email.com
doctor-password:  12345
```

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

### How it works
* Home screen gives the option to select if you want to login as patient or doctor.

* After seleting patient you will see a screen to select what you want to do. Patiens will also be able to view a list of their medical reports.

* From profile patient would be able to navigate through their reports by clicking on them and they would be able to update their report if they want.
<br><br>
  <img src="/screenshots/Screenshot_2020-03-31-23-05-00-48_4c4ca68678991bf4c89a67acdf9c2b9d.png" width="250px" height="500px">
  <img src="/screenshots/Screenshot_2020-03-31-23-05-52-39_4c4ca68678991bf4c89a67acdf9c2b9d.png" width="250px" height="500px">
  <img src="/screenshots/Screenshot_2020-03-31-23-06-03-45_4c4ca68678991bf4c89a67acdf9c2b9d.png" width="250px" height="500px">
<br>

* Patient can also find the list of doctors avialable nearby them.

* If user is logged-in as doctor, he would be able to scan the qr code of patient which is unique for every patient to view patient's medical history. Screenshots for qr code generation and formation have been attached below.
<br><br>
  <img src="/screenshots/Screenshot_2020-03-31-23-06-40-46_4c4ca68678991bf4c89a67acdf9c2b9d.png" width="250px" height="500px">
  <img src="/screenshots/Screenshot_2020-03-31-23-09-14-21_4c4ca68678991bf4c89a67acdf9c2b9d.png" width="250px" height="500px">

* After scanning a new report (current report) will also be generated for patient's latest visit to doctor.

## Node API
This application is based on REST API build in node.js. API is deployed on heroku at https://evening-dusk-90900.herokuapp.com . To set up the node API move to the node_api directory and run the following command in terminal/command prompt:
```
npm install
```
This will install all the required dependencies for the API. To start the server run the following command in your terminal/command prompt:
```
npm start
```
*The server will run on port 5000.*  
Alternatively API can also be fetched directly from heroku and using the respective routes. Link for route to test the [Root Path](https://evening-dusk-90900.herokuapp.com).  
