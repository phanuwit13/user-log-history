module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'user',
        {
            username: {
                type: Sequelize.STRING,
                field: 'username',
                primaryKey: true
            },
            password: {
                type: Sequelize.STRING,
                field: 'password'
            },
            firstname: {
                type: Sequelize.STRING,
                field: 'firstname'
            },
            lastname: {
                type: Sequelize.STRING,
                field: 'lastname'
            }
            ,
            token: {
                type: Sequelize.STRING,
                field: 'token'
            },
            refreshToken: {
                type: Sequelize.STRING,
                field: 'refreshToken'
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return User;
};