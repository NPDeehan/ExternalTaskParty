const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger,asyncResponseTimeout:50000, maxTasks:1, workerId:"Party-Planner-Niall" };

// create a Client instance with custom configuration
const client = new Client(config);

client.subscribe("GetSupplies", async function({ task, taskService }) { 
  
   await taskService.complete(task);
 
 });

client.subscribe("GetDisoBall", async function({ task, taskService }) { 
  
   await taskService.complete(task);
 
 });


// // // Compensation
client.subscribe("ReturnDiscoball", async function({ task, taskService }) { 

  await taskService.complete(task);
});