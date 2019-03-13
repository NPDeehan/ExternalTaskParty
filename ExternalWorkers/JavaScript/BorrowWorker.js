const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger,asyncResponseTimeout:50000, maxTasks:1, workerId:"Trustworthy-Seif" };

// create a Client instance with custom configuration
const client = new Client(config);

client.subscribe("Borrow", async function({ task, taskService }) { 
 	 const processVariables = new Variables();
  
  if(Math.random() >= 0.4){
    processVariables.set("money", 100);
// 			 await taskService.handleBpmnError(task, "CREATE_FAILURE", "Party Create has failed because you didn't eat enough brocoli");
 	} else if(Math.random() >= 0.4){
    processVariables.set("money", 400);
//       await taskService.handleBpmnError(task, "CREATE_FAILURE", "Party Create has failed because you didn't eat enough brocoli");
  }else if(Math.random() >= 0.4){
    processVariables.set("money", 1003);
//       await taskService.handleBpmnError(task, "CREATE_FAILURE", "Party Create has failed because you didn't eat enough brocoli");
  }else {
    processVariables.set("money", 3002);
  }
   await taskService.complete(task,processVariables);
 
 });
// client.subscribe("CreateAccount", async function({ task, taskService }) { 
// 		if(Math.random() >= 0.9){
// 			 await taskService.handleBpmnError(task, "CREATE_FAILURE", "Add Person name has failed because you didn't call your mom");
// 	}else{
//   await taskService.complete(task);
// }
// });
// client.subscribe("CreateExternalAccount", async function({ task, taskService }) { 

//   await taskService.complete(task);
// });


// // Compensation
client.subscribe("ReturnMoney", async function({ task, taskService }) { 

  await taskService.complete(task);
});
