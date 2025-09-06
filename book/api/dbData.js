const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://samrudhib24:bookreview123@cluster0.1gicfea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = async (req, res) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    
    const db = client.db('bookReviews');
    const collection = db.collection('reviews');
    const data = await collection.find({}).limit(20).toArray();
    
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
};
