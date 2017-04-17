app.controller('chatCtrl', ['ChatService','$firebaseAuth',chatCtrl])



function chatCtrl(ChatService, $firebaseAuth){
 var vm = this;
 var auth = $firebaseAuth();
 
vm.messages = ChatService.getMessages();
vm.showMessages = ChatService.showMessages();

vm.sendMessage = function(){
   if( vm.author != null ){
   var message = {
       authorName: vm.author.displayName,
       authorId: vm.author.uid,
       authorPhoto: vm.author.photoURL,
       text: vm.newMessage
   }}
   else{
            alert('Санала зарегистрируйтесь');
        }
   if(vm.newMessage != ""){
   ChatService.sendMessage(message);
   vm.newMessage = '';
   }else{
       alert('введите сообщение')
   }

}

   vm.login = function(){
        auth.$signInWithPopup('google');
    };
    vm.logout = function(){
        auth.$signOut();
    };

    auth.$onAuthStateChanged(function(authData) {
        vm.author = authData;
    });

   vm.newMessage = '';


}

   

