# _Geocache_

## CONTRIBUTORS: **JUSTIN GOMEZ**

### PROJECT DESCRIPTION:
* THIS APPLICATION DISPLAYS ALL GEOCACHES THAT USERS HAVE SUBMITTED. THE USER CAN SUBMIT GEOCACHES. WHEN THE USER SUBMITS A LOCATION SUCH AS A PHYSICAL ADDRESS, GPS COORDINATES ARE GENERATED, IF YOU WERE TO SUBMIT GPS COORDINATES A PHYSICAL ADDRESS IS GENERATED AND SAVED TO THE GEOCACHE. A GOOGLE MAP AND THE LOCATION OF A GEOCACHE IS GENERATED WHEN A GEOCACHE IS CLICKED AND THE COMPONENT IS LOADED.

#TECHNOLOGIES USED

* HTML
* SCSS
* TYPESCRIPT/JAVASCRIPT
* ANGULAR
* NPM
* BOWER
* FIREBASE
* BOOTSTRAP

### COMPLETE SET-UP INSTRUCTIONS

1. DOWNLOAD OR CLONE FROM GITHUB REPOSITORY [Click here](https://github.com/ProgramJustin/geocache)
2. TO CLONE, TYPE: git clone https://github.com/ProgramJustin/geocache INTO YOUR TERMINAL AND PRESS "ENTER"
3. TO RUN THIS APPLICATION INSTALL THE FOLLOWING PACKAGES: npm, bower.
4. TO INSTALL THESE PACKAGES IN THE PROJECT, IN YOUR TERMINAL NAVIGATE TO THE PROJECT'S DIRECTORY AND TYPE:
* npm install bower
* npm install
5. CREATE AN api-keys.ts file IN THE APP DIRECTORY.
6. GO TO [Click here](https://developers.google.com/maps/documentation/geocoding/start) TO GET YOUR API KEY, AND IN YOUR api-keys.ts file TYPE:
* export const geoKey = "YOUR API-KEY HERE";
### THIS WILL ADD YOUR GEOCACHE GOOGLE MAP LOCATION ASSUMING YOUR GEOCACHE OBJECTS IN YOUR FIREBASE DATABASE CONTAINS AN address PROPERTY SUCH AS: _geocache.address_
7. GO TO [Click here](https://developers.google.com/maps/documentation/embed/get-api-key) TO GET YOUR API KEY, AND IN YOUR api-keys.ts file TYPE:
* export const googMapKey = "YOUR API-KEY HERE";
8. TO LAUNCH THIS APPLICATION IN YOUR TERMINAL TYPE: ng serve


# NEW FEATURES IF GIVEN THE OPPORTUNITY
* ADD AUTHENTICATION
* ADD FEATURE THAT DISPLAYS ALL GEOCACHES IN THE LOCAL AREA


* Copyright 2017, Justin Gomez
