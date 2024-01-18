const {
  validateGroup,
  createGroup,
} = require('../models/groups/groups.model');
const {
  setCreatorAdmin,
} = require('../models/relationships/userGroupRoleRelationships/userGroupRoleRelationships.model');

const httpStatuses = require('../constants/httpStatuses');
const { groupControllerMessages, smthWentWrong } = require('../constants/controllerMessages');

async function httpCreateGroup(req, res) {
  try {
    const group = req.body;
    const userId = req.user.id;

    const sendGroup = {
      ...group,
      userId,
    };

    const error = validateGroup(sendGroup);

    if (error) {
      return res.status(httpStatuses.badRequest).json({
        success: false,
        message: error.details[0].message,
        statusCode: httpStatuses.badRequest,
      });
    }

    const createdGroup = await createGroup(sendGroup);

    await setCreatorAdmin(userId, createdGroup._id);

    return res.status(httpStatuses.created).json({
      success: true,
      data: createdGroup,
      message: groupControllerMessages.groupCreated,
      statusCode: httpStatuses.created,
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatuses.serverError).json({
      success: false,
      message: error.message || smthWentWrong,
      statusCode: httpStatuses.serverError,
    });
  }
}

module.exports = {
  httpCreateGroup,
};