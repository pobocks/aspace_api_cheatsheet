# aspace_api_cheatsheet

## Notice
As of sometime a while back, I got a commit added that puts this same information in the API Documentation proper.  This cheatsheet should be considered deprecated: go here for one that will always be up to date with the current release! http://archivesspace.github.io/archivesspace/api/#routes-by-uri

## Summary
A cheatsheet for [ArchivesSpace](https://github.com/archivesspace/archivesspace)'s API.

This is not intended to replace the existing [API docs](https://archivesspace.github.io/archivesspace/api/), 
but instead to provide various compact "overviews" of the API, for aid in use and navigation of the API as a whole.

## Where's the thingumie?
The current version of the cheat sheet is available [here](https://pobocks.github.io/aspace_api_cheatsheet/)!

## Current functionality
Single page with table of routes, with methods and short descriptions.  
Index and all individual object routes are collapsed, e.g.:

| Method | Route | Description
| --- | --- | --- |
| `/repositories/:id/resources` | *GET*   | Description |
| `/repositories/:id/resources/:id` | *GET*    | Goes |
| `/repositories/:id/resources/:id` | *POST* | Here | 
| `/repositories/:id/resources/:id` | *DELETE* | and Here |

Are rendered down to:

| Method | Route | Description |
| --- | --- | --- |
| `/repositories/:id/resources` | *GET*, *POST*, *DELETE* | Description, Goes, Here, and Here |
