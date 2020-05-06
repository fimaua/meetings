const markAdmins = (users, ids) =>
    users.map(user => {
        let id = user.id
        const isAdmin = ids.includes(id);
        return {...user, isAdmin }
    });