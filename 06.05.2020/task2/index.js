function markAdmins(users, ids) {
    users.map(user => {
        const isAdmin = ids.includes(id);
        return {...user, isAdmin }
    });
}