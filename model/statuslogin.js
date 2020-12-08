module.exports = (sequelize, Sequelize) => {
    const status = sequelize.define(
        'statuslogin',
        {
            statusId: {
                type: Sequelize.INTEGER,
                field: 'statusId',
                primaryKey: true
            },
            statusName: {
                type: Sequelize.STRING,
                field: 'statusName'
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return status;
};