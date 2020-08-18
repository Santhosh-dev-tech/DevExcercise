public class RecordOwnerDetailsCtrl {

    
    @AuraEnabled
    public static user getRecordOwnerDetails(String objectRecordId){
        
        sObject acutalRecord = database.query('SELECT OwnerId FROM '+((Id)objectRecordId).getSObjectType() +' WHERE id=:objectRecordId');
        if(((String)acutalRecord.get('ownerId')).startsWith('005'))
        return [SELECT Id,Name,MediumPhotoUrl FROM User WHERE id=:(Id)acutalRecord.get('ownerId')];
        else
            return null;
    }
}