import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Login = sequelize.define('login', { // arquivo para sincronizar os dados inseridos no sistema para o banco de dados
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'Login',
  timestamps: true,
});

export default Login;
