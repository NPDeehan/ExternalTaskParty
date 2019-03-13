# ExternalTaskParty

This project has 3 different aspects that exist independently. 

## Process Models
There are 3 models that can be deployed via REST to a running instance of the Camunda BPM platform. They can then be started from the Tasklist web app or via The REST API

## JavaScript Workers
These are workers that will poll the engine for work and for more details on starting and installing the workers take a look a the works own github page:
https://github.com/camunda/camunda-external-task-client-js 

## Java Worker
This is a worker that does the same as one of the JS workers only in Java instead - for more details just import it as a maven project, build it and start it. 
more information on the client can be found here:
https://github.com/camunda/camunda-external-task-client-java 



