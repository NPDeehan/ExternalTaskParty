const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger,asyncResponseTimeout:50000, maxTasks:1, workerId:"Message-Sender-Muriel" };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("SendSorryAboutNoiseMessage", async function({ task, taskService }) { 

 const processVariables = new Variables();
  processVariables.set("sorryNotSorry", false);

  await taskService.complete(task, processVariables);
});

client.subscribe("SendInvite", async function({ task, taskService }) { 

  await taskService.complete(task);
});
