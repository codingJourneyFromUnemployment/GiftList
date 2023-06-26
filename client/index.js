const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const name = "beidi";
  const merkleTree = new MerkleTree(niceList);
  const index = niceList.indexOf(name);
  const proof = merkleTree.getProof(index);

  const res = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name,
    proof,
  });

  console.log(res.data);
}

main();