let nftMint = [];


function mintNFT(name,description,game,date) {
  const nft = {
    name,
    description,
    game,
    date
  };
  nftMint.push(nft);
}


function listNFTs() {
    for (let i = 0; i < nftMint.length; i++) {
      const nft = nftMint[i];
      console.log("Name: " + nft.name);
      console.log("Description: " + nft.description);
      console.log("Game: " + nft.game);
      console.log("Date: " + nft.date);
      console.log("----------------------------");
    }
  }
  


function getTotalSupply() {
  return nftMint.length;
}

//example this function below this line
mintNFT("Dragon Sword", "A powerful sword forged from dragon scales.",  "Dragon Hunter","September 1st, 2002");
mintNFT("Phoenix Feather", "A rare and beautiful feather from a phoenix.",  "Mythical Adventures","November 11th, 2022");
mintNFT("Goblin Token", "A token representing a mischievous goblin character.","Fantasy Realm","December 2nd, 2022");

listNFTs(); 
console.log("Total minted: " + getTotalSupply());
