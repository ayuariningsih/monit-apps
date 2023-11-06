import db from '@/lib/_db'

export const resolvers = {
  Query: {
    person() {
      return db.recipientOptions
    },
    transactions() {
      return db.transactions
    },
    transaction(_: any, args: { id: string }) {
      return db.transactions.find((transaction) => transaction.id === args.id)
    },
    searchTransaction(_: any, args: { name: string }) {
      return db.transactions.filter((transaction) => transaction.name.toLowerCase().includes(args.name.toLowerCase()))
    },
  },
  Mutation: {
    createTransaction(_: any, args: { transaction: any }) {
      let transaction = {
        ...args.transaction, 
        id: Math.floor(Math.random() * 10000)
      }
      db.transactions.push(transaction)

      return transaction
    },
    updateTransaction(_: any, args: { id: string; edits: any }) {
      db.transactions = db.transactions.map((transaction) => {
        if (transaction.id === args.id) {
          return {...transaction, ...args.edits}
        }

        return transaction
      })

      return db.transactions.find((transaction) => transaction.id === args.id)
    },
    deleteTransaction(_: any, args: { id: string }) {
      db.transactions = db.transactions.filter((transaction) => transaction.id !== args.id)

      return db.transactions
    },
  }
}