FS.debug = true;
FS.HTTP.setBaseUrl('/public/');
var imageStore = new FS.Store.GridFS('images');

Images = new FS.Collection('images', {
    stores: [imageStore]
});

if(Meteor.isClient) {
    Template.example.events({
        'change .fileInput': function(event,template) {

            FS.Utility.eachFile(event, function(file){
               console.log(file);
                Images.insert(file, function(error,fileObj){
                   if(error) {
                      //console.log(error)
                   } else {
                      // console.log(fileObj);
                   }
                });
            });
        }
    });
    Template.list.helpers({
        files: function(){
            return Images.find();
        }
    })
}