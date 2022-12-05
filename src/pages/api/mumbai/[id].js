export default async function handler(req, res) {
  try {
    const { id } = req.query

    const transactions = `https://api.covalenthq.com/v1/80001/tokens/0xF46FCAb2404b071ac33e5eD2095802Cecf77FB21/nft_transactions/${id}/?key=${process.env.NEXT_PUBLIC_COVALENT}`
    const res_transactions = await fetch(transactions).then((x) => x.json())

    const nTxs = res_transactions.data.items[0].nft_transactions.length

    const output = {
      nTransactions: nTxs,
    }
    res.status(200).json(output)
  } catch (err) {
    res.status(500).json({ error: 'failed to fetch data' + err })
  }
}
