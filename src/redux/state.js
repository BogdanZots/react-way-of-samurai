let posts = [
    {id:1,message:'My first message',likeCount:'5'},
    {id:2,message:'My second message',likeCount:'10'},
    {id:3,message:'My third message',likeCount:'15'}
  ]
  let dialogsData = [
    {id:1,name:"Dimych"},
    {id:2,name:"Igor"},
    {id:3,name:"Vlad"},
    {id:4,name:"Mark"},
    {id:5,name:"Gosha"}
  
  ]
  
  let dialogsMessages = [
    {id:1,message:'Test message1'},
    {id:2,message:'Test message2'},
    {id:3,message:'Test message3'},
  ]

  export let addPost = (postMessage)=>{
      let newPost = {
          id:5,
          message:postMessage,
          likeCount:0
      }
    state.profilePage.posts.push(newPost)
  }

  let state = {
      profilePage:{
        posts,
      },
      dialogsPage:{
        dialogsMessages,
        dialogsData
      },
      sidebar:{}
  }

  export default state