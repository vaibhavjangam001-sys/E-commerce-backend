const removeAllRefreshTokens = async (user) => {
  if (user.refreshTokens.length === 0) {
    return;
  }

  user.refreshTokens = [];

  await user.save({ validateBeforeSave: false });
};

export default removeAllRefreshTokens;
