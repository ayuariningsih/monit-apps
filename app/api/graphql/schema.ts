export const typeDefs = `#graphql
  type Person {
    id: ID!
    name: String!
  }

  type Recipient {
    recipient: Person
    description: String
    discount: String
    amount: String
    total: String
  }

  type Transaction {
    id: ID!
    name: String!
    recipients: [Recipient]
    total: String
  }

  type Query {
    person: [Person]
    transactions: [Transaction!]
    transaction(id: ID!): Transaction
  }

  input PersonInput {
    id: String!
    name: String!
  }

  input RecipientInput {
    recipient: PersonInput
    description: String!
    discount: String
    amount: String!
    total: String
  }

  input AddTransactionInput {
    name: String,
    recipients: [RecipientInput!]!,
    total: String!
  }

  input EditTransactionInput {
    name: String,
    recipients: [RecipientInput],
    total: String
  }

  type Mutation {
    addTransaction(transaction: AddTransactionInput!): Transaction
    updateTransaction(id: ID!, edits: EditTransactionInput): Transaction
    deleteTransaction(id: ID!): [Transaction]
  }
`
