export default {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Login", [
      {
        usuario: "admin",
        senha: "senha123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Login", { usuario: "admin" });
  },
};
