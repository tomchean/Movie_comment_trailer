const Subscription = {
  comments: {
    subscribe(parent, { query }, { db, pubsub }, info) {
      return pubsub.asyncIterator(`comments ${query}`)
    }
  },
  users:{
    subscribe(parent, { query }, { db, pubsub }, info) {
      console.log('sub')
      return pubsub.asyncIterator(`users ${query}`)
    }
  }
}

export { Subscription as default } 
