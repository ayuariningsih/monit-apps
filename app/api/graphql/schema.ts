export const typeDefs = `#graphql
  type RecipientOptions {
    id: ID!
    name: String!
  }

  type Recipient {
    recipient_id: ID!
    recipient_name: String
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
    person: [RecipientOptions]
    transactions: [Transaction!]
    transaction(id: ID!): Transaction
  }

  # input PersonInput {
  #   id: String!
  #   name: String!
  # }

  input RecipientInput {
    recipient_id: ID!
    recipient_name: String
    description: String!
    discount: String
    amount: String!
    total: String
  }

  input AddTransactionInput {
    id: ID!
    name: String,
    recipients: [RecipientInput!]!,
    total: String
  }

  input EditTransactionInput {
    id: ID!
    name: String,
    recipients: [RecipientInput!]!,
    total: String
  }

  type Mutation {
    createTransaction(transaction: AddTransactionInput!): Transaction
    updateTransaction(id: ID!, edits: EditTransactionInput): Transaction
    deleteTransaction(id: ID!): [Transaction]
  }
`
