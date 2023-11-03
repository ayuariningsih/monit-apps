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
            recipient {
              id,
              name
            },
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
