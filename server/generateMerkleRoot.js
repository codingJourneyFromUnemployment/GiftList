const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');

function generateMerkleRoot() {
    const merkleTree = new MerkleTree(niceList);
    return merkleTree.getRoot();
}

const merkleRoot = generateMerkleRoot();
console.log(merkleRoot);