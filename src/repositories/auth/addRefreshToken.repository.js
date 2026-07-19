const addRefreshToken = async ({ user, refreshToken }) => {
  if (!user.refreshTokens.includes(refreshToken)) {
    user.refreshTokens.push(refreshToken);
  }
  await user.save({ validateBeforeSave: false });
};

export default addRefreshToken;
