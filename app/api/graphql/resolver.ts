import db from '@/lib/_db'

export const resolvers = {
  Query: {
    person() {
      return db.person
    },
    transactions() {
      return db.transactions
    },
    transaction(_: any, args: { id: string }) {
      return db.transactions.find((transaction) => transaction.id === args.id)
    },
  },
  Mutation: {
    addTransaction(_: any, args: { transaction: any }) {
      let transaction = {
        ...args.transaction, 
        id: Math.floor(Math.random() * 10000).toString()
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