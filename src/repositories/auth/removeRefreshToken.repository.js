const removeRefreshToken = async ({ user, refreshToken }) => {

  user.refreshTokens = user.refreshTokens.filter(
    (token) => token !== refreshToken,
  );

  await user.save({ validateBeforeSave: false });
};


export default removeRefreshToken;