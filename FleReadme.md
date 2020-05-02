# Building a Documentation Portal For Multiple APIs

[Part One](https://swagger.io/blog/api-documentation/building-documentation-portal-swagger-tutorial/)


``` 
	$ npx create-react-app oas-doc-portal
	$ cd oas-doc-portal
	$ npm start

```
## Swagger ui

``` 
npm install swagger-ui

Open /src/App.js

import React, { Component } from 'react';
import './App.css'
import SwaggerUI from 'swagger-ui';

``` 


# BGL API Portal
## Liste des APIs

Récupération d'un fichier de configuration json sur github
https://raw.githubusercontent.com/leorone14/oas-doc-portal/master/src/config.json

* API Inbound
	* Récupération de la liste --> API Manager
		* https://sdal030l.bgl.lu:8575/api/portal/v1.3/discovery/apis
		    * name
		    * id
		    * summary
	* Récupération de la définition de l'api dans l'API Manager
	    * https://sdal030l.bgl.lu:8575/api/portal/v1.3/discovery/swagger/api/id/{id}
	* Recupération du logo de l'api
	    * https://sdal030l.bgl.lu:8575/api/portal/v1.3/discovery/swagger/apis/{id}/image
	* Récupération de l'OAS de l'api:
	    * https://sdal030l.bgl.lu:8575/api/portal/v1.3/discovery/swagger/api/id/{id}?swaggerVersion=2.0
```
 {
        "name": "iHub",
        "summary": null,
        "id": "a55a08ef-5cf8-40c7-9c38-d34f781f6eaa",
        "uri": "https://sdal030l.bgl.lu:8575/api/portal/v1.3/discovery/swagger/api/iHub",
        "type": "rest"
    }
```
     
* API Outbound



