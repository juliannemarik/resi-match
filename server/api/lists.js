const router = require('express').Router()
const {List} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const list = await List.findOne({
      where: {
        UserId: userId
      }
    })
    res.json(list ? list : {})
  } catch (err) {
    next(err)
  }
})
