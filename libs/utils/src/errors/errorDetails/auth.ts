export const auth: Record<AuthErrorName, string> = {
    accessTokenMissing: 'Access token is missing',
    emailNotConfirmed: 'Email is not confirmed',
    emailOrPasswordMissing: '`email` or `password` is missing',
    errorWhenInvalidatingTokens: 'Error when invalidating used tokens',
    failedToAuthenticateWithNewPassword:
        'Failed to authenticate with new password',
    failedToResetPassword: 'Failed to reset password',
    failedToSetPassword: 'Failed to set password',
    failedToCreateToken: 'Failed to create token',
    failedToCreateTokenAndSendEmail:
        'Failed to create token and failed to send email',
    failedToRefreshToken: 'Failed to refresh token',
    failedToSendEmail: 'Failed to send email',
    failedToSignIn: 'Failed to sign in',
    failedToSignOut: 'Failed to sign out',
    failedToUpdateUser: 'Failed to update user',
    faunaPublicKeyMissing: '`faunaPublicKey` is missing',
    invalidToken: 'Invalid token',
    invalidUserOrPassword: 'User does not exist or password is invalid',
    refreshTokenMissing: 'Refresh token is missing',
    refreshTokenLockout:
        'Could not complete request due to refresh token lockout',
    sendGridAPIKeyMissing: '`sendGridApiKey` is missing',
    tokensNotFound: 'Tokens not found',
    userAlreadyExists: 'User already exists',
    userDoesNotExist: 'User does not exist',
    notAuthenticated: 'Not authenticated',
};
