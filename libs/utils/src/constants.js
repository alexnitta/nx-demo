const cognitoSpecialCharacters = `= + - ^ $ * . [ ] { } ( ) ? " ! @ # % & / \\ , > < ' : ; | _ ~ \``;
const defaultLocale = 'en-US';

const devBaseUrl = 'http://localhost:4000';
const prodBaseUrl = 'https://storybox.page';
const supportEmail = 'support@storybox.page';
const faunaGraphQLEndpoint = 'https://graphql.fauna.com/graphql';
const cloudinaryCloudName = 'storybox';

const localStorageKeys = {
    // Just makes it a little bit harder to read what's in localStorage if someone's snooping around
    accessToken: 'h%55ixB9ZbVQzr4zzYPuwQ^@AgHv&sST',
    isRefreshingToken: '6Wp!Mr*!4W^Dh9h6iYREyqzmcEM8JW&g',
};

module.exports = {
    cognitoSpecialCharacters,
    cloudinaryCloudName,
    defaultLocale,
    devBaseUrl,
    faunaGraphQLEndpoint,
    prodBaseUrl,
    localStorageKeys,
    supportEmail,
};
