const { reverseText } = require('../services/iecho.services')
const { formatResponse } = require('../services/responses.services')

exports.getReverseText = (req, res) => {
  const text = req.query.text || null
  if (!text || text.length < 1) {
    return res.status(400).send(formatResponse({ error: 'no text' }, false))
  }
  const result = reverseText(text)
  if (!result.valid) return res.status(400).json(result.data)
  res.status(200).json(result.data)
}
