import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

const options = {}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

function initializeMongoClient() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    return client.connect()
  }
}

export async function getDatabase() {
  clientPromise = initializeMongoClient()
  const client = await clientPromise
  return client.db()
}

export async function getCollection(name: string) {
  const db = await getDatabase()
  return db.collection(name)
}
