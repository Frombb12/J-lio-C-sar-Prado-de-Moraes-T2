export default {
  async up(queryInterface) { // adição direta de um usuário no banco de dados para testes iniciais
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
