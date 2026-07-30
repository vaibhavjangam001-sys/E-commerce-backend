const removeRefreshToken = async ({ user, refreshToken }) => {
  
  if (!user.refreshTokens.includes(refreshToken)) {
    return;
  }

  user.refreshTokens = user.refreshTokens.filter(
    (token) => token !== refreshToken,
  );

  await user.save({ validateBeforeSave: false });
};

export default removeRefreshToken;
