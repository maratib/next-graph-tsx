import Link from 'next/link'
import { useState } from 'react'
import {
  useViewerQuery,
  useUpdateNameMutation,
  ViewerDocument,
} from '../lib/schemas/viewer.graphql'
import { initializeApollo } from '../lib/apollo'
import Greeting from '../components/theme/Greeting'
import Layout from '../components/layouts/Layout'

const Index = () => {
  const { viewer } = useViewerQuery().data!
  const [newName, setNewName] = useState('')
  const [updateNameMutation] = useUpdateNameMutation()

  const onChangeName = () => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      //Follow apollo suggestion to update cache
      //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      update: (
        store,
        {
          data: {
            // @ts-ignore
            updateName: { name },
          },
        }
      ) => {
        // Read the data from our cache for this query.
        // @ts-ignore
        const { viewer } = store.readQuery({ query: ViewerDocument })
        const newViewer = { ...viewer }
        // Add our comment from the mutation to the end.
        newViewer.name = name
        // Write our data back to the cache.
        store.writeQuery({ query: ViewerDocument, data: { viewer: newViewer } })
      },
    })
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      You're signed in as {viewer.name} and you're {viewer.status}. Go to the{' '}
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      page.
      <div>
        <input
          type="text"
          placeholder="your new name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        <input type="button" value="change" onClick={onChangeName} />
      </div>
      <Greeting name="Maratib" />
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
