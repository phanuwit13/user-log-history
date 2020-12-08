module.exports = (sequelize, Sequelize) => {
    const loglogin = sequelize.define(
        'loglogin',
        {
            loginId: {
                type: Sequelize.STRING,
                field: 'loginId',
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING,
                field: 'username'
            },
            date_stamp: {
                type: Sequelize.STRING,
                field: 'date_stamp'
            },
            statusId: {
                type: Sequelize.STRING,
                field: 'statusId'
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return loglogin;
};