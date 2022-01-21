/*************************************************************************
USERS TABLE
*************************************************************************/

export default function (sequelize: any, Sequelize: any) {
	var Users = sequelize.define(
		'users',
		{
			names: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			dob: Sequelize.STRING,
			gender: Sequelize.ENUM('MALE', 'FEMALE'),
			status: {
				type: Sequelize.ENUM('active', 'inactive'),
				defaultValue: 'inactive',
			},
			verifiedAt: Sequelize.DATE,
		},
		{
			freezeTableName: true,
		}
	);

	Users.associate = function (models: any) {
		models.users.hasOne(models.userSettings, { onDelete: 'cascade', targetKey: 'id', foreignKey: 'userId' });
		// models.Users.hasMany(models.transactions, {onDelete: 'cascade',targetKey: "id", foreignKey: 'userId'});
		// models.Users.hasMany(models.cards, {onDelete: 'cascade',targetKey: "id", foreignKey: 'userId'});
		// models.Users.hasMany(models.hotelBookings, {onDelete: 'cascade',targetKey: "id", foreignKey: 'userId'});
		// models.Users.hasMany(models.flightBookings, {onDelete: 'cascade',targetKey: "id", foreignKey: 'userId'});
		// models.Users.hasMany(models.requestLogs, {onDelete: 'cascade',targetKey: "id", foreignKey: 'userId'});
	};

	return Users;
}
