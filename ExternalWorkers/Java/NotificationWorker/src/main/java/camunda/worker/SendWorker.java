package camunda.worker;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.camunda.bpm.client.ExternalTaskClient;
import org.camunda.bpm.client.topic.TopicSubscriptionBuilder;

public class SendWorker {

	public static void main(String[] args) {
		
		 ExternalTaskClient client = ExternalTaskClient.create()
			      .baseUrl("http://localhost:8080/engine-rest")
			      .lockDuration(60000)
			      .asyncResponseTimeout(100000)
			      .workerId("Java-RAWKS!!!")
			      .maxTasks(1)
			      .build();
			    
			    // subscribe to the topic
			    TopicSubscriptionBuilder subscribtionBuilder = client.subscribe("SendInvite");
			    subscribtionBuilder
			      .handler((externalTask, externalTaskService) -> {
			    	  Random rando = new Random();
			    	  
			    	  if(rando.nextBoolean()) {
			    		  externalTaskService.handleBpmnError(externalTask, "PartyFailed");
			    	
			    	  externalTaskService.complete(externalTask);
			    	  }
			    	  
			    	  
			      }).open();

	}

}
