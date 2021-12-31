const web3 = require("@solana/web3.js");

const userWallet = web3.Keypair.generate();
const userPublicKey = userWallet._keypair.publicKey;
const userSecretKey = userWallet._keypair.publicKey;
const getWalletBalance = async (pubk) => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const balance = connection.getBalance(new PublicKey(pubk));
    return balance / LAMPORTS_PER_SOL;
  } catch (err) {}
};

const transferSOL = async (from, to, transferAmt) => {
  try {
    const connection = new web3.Connection(
      clusterApiUrl("devnet"),
      "confirmed"
    );
    const transaction = new web3.Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new web3.PublicKey(from.publicKey.toString()),
        toPubkey: new web3.PublicKey(to.publicKey.toString()),
        lamports: transferAmt * web3.LAMPORTS_PER_SOL,
      })
    );

    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [from]
    );
  } catch (err) {
    console.log(err);
  }
};

const airDropSol = async () => {
  try {
    const connection = new web3.Connection(
      clusterApiUrl("devnet"),
      "confirmed"
    );
    const walletKeyPair = await web3.Keypair.fromSecretKey(secretKey);
    const fromAirDropSignature = await web3.connection.requestAirdrop(
      new web3.PublicKey(walletKeyPair.publicKey),
      2 * web3.LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(fromAirDropSignature);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  airDropSol,
  transferSOL,
  getWalletBalance,
};
