# Gateways REST API

General description
---
This project use clean arquitecture and apply 
some patterns such as:
- Repository
- Dependency Injection

Project Structure
---
- Components
	-  Express handlers (Factories, Middlewares and routes)
- Controllers
	- Musala.GatewayMgmt.Services (Business concrete implementation)
- Models
	- Domain model objects such as Entities
- Remote_models
	- Mongodb related models and schemas
- Repositories
	- Data access objects interfaces (It would be better using Typescript)
- Repositories_interfaces
	- Repository implementations in this case using Mongodb as external data provider (No interface pattern in JS)
- Routes
	- All routes are imported here.
- use_cases
	- Application business rules 		

Prerequisites
---
- Node.js
- npm
- MongoDB installed locally or through a cloud service like MongoDb Atlas

Instructions
---
1. Clone project: 
	git clone https://github.com/yalint/gateways-backend.git
2. cd gateways-backend
3. npm install
4. npm start 
5. Install and open Postman, import json file "Gateway Api.postman_collection.json" which is in the root directory of the project