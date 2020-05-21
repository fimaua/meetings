const user = {
    _firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ')
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ')
    },
    set firstName(name) {
        if (typeof name === 'string') {
            this._firstName = name;
        } else {
            console.error('Not a string')
        }
    },
    get firstName() {
        return this._firstName;
    },
}
user.firstName = 1;
console.log(user._firstName)