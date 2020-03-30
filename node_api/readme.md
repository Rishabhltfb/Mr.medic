localhost:5000/api/patients/test        # (get)to test route is working  
localhost:5000/api/patients/login       # (post)to login  
    body:    email, password  
localhost:5000/api/patients/register    # (post)to register  
    body:    name, email, password, age, city ,gender  
localhost:5000/api/patients/profile     # (get) to view profile with authentication  
    authorization: bearer  
localhost:5000/api/patients/            # (delete) to delete profile with authorization  
    authorization: bearer  
localhost:5000/api/patients/all         # (get) to get all patients  

    
localhost:5000/api/doctors/test        # (get) to test route is working  
localhost:5000/api/doctors/login       # (post) to login  
    body:    email, password  
localhost:5000/api/doctors/register    # (post) to register  
    body:    name, email, password, city, clinickAddress, specialization  
localhost:5000/api/doctors/all         # (get) to get all doctors  
localhost:5000/api/doctors/find/:id         # (get) to get doctors by id  
    params:    id    
localhost:5000/api/doctors/city/:id         # (get) to get doctors by city   
    params:     id   
  
    
localhost:5000/api/reports/test         # (get) to test route is working  
localhost:5000/api/reports/report       # (post) to create a report with authorization  
    authorization: bearer  
localhost:5000/api/reports/report/:id   # (get) to get a report with id  
    param:  id  
localhost:5000/api/reports/all          # (get) to get all the reports  