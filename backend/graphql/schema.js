const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Query2{
    testing: TestData
}
type RootQuery{
    hello: String
}
type TestData{
    text:String
    view:Int
}
input UserInput {
    email:String!
    password:String!
    name:String
}
type UserObject {
    email:String!
    id:String!
    posts:[Posts]
}
type Posts {
    title:String!
    content:String!
    
}
type Mutation{
    createUser(user:UserInput):UserObject
}
schema{
    query:Query2
    mutation: Mutation
}
`);
// mutation{
//     createUser(user:{email:"ttr",name:"asd",password:"123123"}){id,email,posts{title,content}}
//   }
