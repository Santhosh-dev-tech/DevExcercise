({
	getUserdeatilsFromServer : function(cmp,event,helper) {
       
         var action = cmp.get("c.getRecordOwnerDetails");
        action.setParams({ objectRecordId: cmp.get("v.recordId") });
		 action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                if(data){
                    cmp.set("v.userDataAvailable",true);
                    console.log("From server: " ,data);
                    cmp.set("v.ownerDetails",data);
                }else{
                    cmp.set("v.userDataAvailable",false);
                }    

            }
            else  if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
	}
})