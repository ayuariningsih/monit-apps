import { RecipientProps, TransactionProps } from "@/types"

const graphqlUrl = 'http://localhost:3000/api/graphql/'
const headers    = {
  "Content-Type": "application/json"
}

export async function getAllTransactions() {
  const response = await fetch(`http://localhost:3000/api/graphql/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: /* GraphQL */ `query MyQuery {
        transactions {
          id,
          name,
          total,
          recipients {
            amount
          }
        }
      }`
    })
  })

  const { data }  = await response.json()

  return data
}

export async function getAllOptions() {
  const response = await fetch(`http://localhost:3000/api/graphql/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: /* GraphQL */ `query MyQuery {
        person {
          id,
          name
        }
      }`
    })
  })

  const { data }  = await response.json()

  return data
}

export async function getTransactionById(id: string) {
  const response = await fetch(graphqlUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: /* GraphQL */ `query GetTransaction($id:ID!) {
        transaction(id: $id) {
          id,
          name,
          total,
          recipients {
            recipient_id,
            recipient_name
            description,
            amount,
            discount,
            total
          }
        }
      }`,
      variables: { id }
    })
  })

  const { data }  = await response.json()

  return data
}

export async function createNewTransaction(transaction:TransactionProps<RecipientProps[]>) {
  const response = await fetch(graphqlUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: /* GraphQL */ `mutation CreateTransaction($transaction:AddTransactionInput!) {
        createTransaction(transaction: $transaction) {
          id,
          name,
          total,
          recipients {
            recipient_id,
            recipient_name
            description,
            amount,
            discount,
            total
          }
        }
      }`,
      variables: { transaction }
    })
  })

  const { data }  = await response.json()

  return data
}

export async function updateCurrentTransaction(id: string, edits:TransactionProps<RecipientProps[]>) {
  const response = await fetch(graphqlUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: /* GraphQL */ `mutation UpdateTransaction($id: ID!, $edits:EditTransactionInput!) {
        updateTransaction(id: $id, edits: $edits) {
          id,
          name,
          total,
          recipients {
            recipient_id,
            recipient_name
            description,
            amount,
            discount,
            total
          }
        }
      }`,
      variables: { id, edits }
    })
  })

  const { data }  = await response.json()

  return data
}

export async function searchTransactionsByName(name: string) {
  const response = await fetch(graphqlUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: /* GraphQL */ `query Search($name:String!) {
        searchTransaction(name: $name) {
          id,
          name,
          total,
          recipients {
            recipient_id,
            recipient_name
            description,
            amount,
            discount,
            total
          }
        }
      }`,
      variables: { name }
    })
  })

  const { data }  = await response.json()

  return data
}
