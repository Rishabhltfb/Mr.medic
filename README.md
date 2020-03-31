# Mr.Medic
  Mr. Medic is a medical healthcare service that comes with **both web version and android/iOS version with REST API in node.js** is used to keep and track record of a patient's medical reports which can be used by doctors to get reference, and and register current report of patient online which will, then be linked to patient's medical record. This app runs on the node.js backend and uses MongoDB atlas service for storing data online. The application is deployed on heroku so it can be used by the links provided. To view abstract, [click here](/abstract.pdf).

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

### API Routes

### Patient
**localhost:5000/api/patients/test**        
*(get) to test route is working*  
**localhost:5000/api/patients/login**    
*(post) to login*  
> body:  email, password  

**localhost:5000/api/patients/register**   
*(post) to register*  
>    body:    name, email, password, age, city ,gender

**localhost:5000/api/patients/profile**    
*(get) to view profile with authentication*  
>    authorization: bearer  

**localhost:5000/api/patients/patient/:id**     
*(get) to view patient by id*
>params: id  

**localhost:5000/api/patients/**            
*(delete) to delete profile with authorization*
>    authorization: bearer  

**localhost:5000/api/patients/all**   
*(get) to get all patients*

**localhost:5000/api/patients/avatar/:id**  
*(patch) to upload avatar*
> params: id  
> body(file): image

### Doctor
**localhost:5000/api/doctors/test**     
*(get) to test route is working*  

**localhost:5000/api/doctors/login**   
*(post) to login*
>    body:    email, password    

**localhost:5000/api/doctors/register**    
*(post) to register*  
>    body:    name, email, password, city, clinickAddress, specialization    

**localhost:5000/api/doctors/all**      
*(get) to get all doctors*  

**localhost:5000/api/doctors/find/:id**     
*(get) to get doctors by id*  
>    params:    id    

**localhost:5000/api/doctors/city/:city**         
*(get) to get doctors by city*   
>    params:     city   
    
    
### Report    
**localhost:5000/api/reports/test**     
*(get) to test route is working*   

**localhost:5000/api/reports/report**    
*(post) to create a report with authorization*  
>    authorization: bearer  

**localhost:5000/api/reports/report/:id**     
*(get) to get a report with id*  
>    param:  id  

**localhost:5000/api/reports/all**       
*(get) to get all the reports*

**localhost:5000/api/reports/image/:id**    
*(patch) to upload doctor report*
>   param: id  
>  body(file): image   

**localhost:5000/api/reports/update:id**    
*(patch) to update other parameters.*    
*make sure to give data of suggested Medicines in the form of array in raw-json*
> param: id  
> body: heading, disease, remarks, suggestedMedicines
