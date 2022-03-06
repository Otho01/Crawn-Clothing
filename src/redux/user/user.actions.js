export const sertCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user,
    };
};
