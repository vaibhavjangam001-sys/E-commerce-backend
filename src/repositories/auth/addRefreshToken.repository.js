const addRefreshToken = async ({ user, refreshToken }) => {
  user.refreshTokens.push(refreshToken);
  await user.save({ validateBeforeSave: false });
};

export default addRefreshToken;
