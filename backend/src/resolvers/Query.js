  const Query = {
  comments: async (parent, args, { db,models }, info) =>{
    return  await models.Comment.find({movieid:args.query})
  } ,
  favorites: async(parent, args, { db,models }, info) =>{

    const user = await models.User.find({userId:args.query});
    if(Object.getOwnPropertyNames(user).length > 1){
      return  {
        userId: user[0].userId,
        favorite:user[0].favorite
      }
    }
    return {
      userId:args.query, 
      favorite:[]
    }
  }
}

export { Query as default }
